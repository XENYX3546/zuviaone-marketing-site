import type {
  ColorHarmonyType,
  GeneratePaletteParams,
  GeneratePaletteResponse,
  ListHarmoniesResponse,
  ColorPaletteErrorResponse,
} from './types';

// ============================================
// CONFIGURATION
// ============================================

const API_BASE_URL = 'https://app.zuviaone.com/api/public/color-palette';

// ============================================
// FALLBACK PALETTE GENERATION (for build-time)
// ============================================

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function generateFallbackPalette(
  harmony: ColorHarmonyType,
  baseColor?: string,
  count = 5
): string[] {
  const base = baseColor || 'FF5733';
  const { h, s, l } = hexToHsl(`#${base}`);

  switch (harmony) {
    case 'complementary': {
      const colors = [hslToHex(h, s, l), hslToHex((h + 180) % 360, s, l)];
      // Fill remaining slots with variations
      while (colors.length < count) {
        const variation = hslToHex((h + 180 + (colors.length - 1) * 30) % 360, s, Math.min(90, l + 10));
        colors.push(variation);
      }
      return colors.slice(0, count);
    }
    case 'analogous': {
      const colors: string[] = [];
      const step = 30;
      const startH = h - step * Math.floor(count / 2);
      for (let i = 0; i < count; i++) {
        colors.push(hslToHex((startH + i * step + 360) % 360, s, l));
      }
      return colors;
    }
    case 'triadic': {
      const colors = [
        hslToHex(h, s, l),
        hslToHex((h + 120) % 360, s, l),
        hslToHex((h + 240) % 360, s, l),
      ];
      while (colors.length < count) {
        colors.push(hslToHex((h + colors.length * 60) % 360, s, Math.max(30, l - 10)));
      }
      return colors.slice(0, count);
    }
    case 'tetradic': {
      const colors = [
        hslToHex(h, s, l),
        hslToHex((h + 90) % 360, s, l),
        hslToHex((h + 180) % 360, s, l),
        hslToHex((h + 270) % 360, s, l),
      ];
      while (colors.length < count) {
        colors.push(hslToHex((h + colors.length * 45) % 360, s, l));
      }
      return colors.slice(0, count);
    }
    case 'split-complementary': {
      const colors = [
        hslToHex(h, s, l),
        hslToHex((h + 150) % 360, s, l),
        hslToHex((h + 210) % 360, s, l),
      ];
      while (colors.length < count) {
        colors.push(hslToHex(h, s, Math.max(20, l - colors.length * 15)));
      }
      return colors.slice(0, count);
    }
    case 'monochromatic': {
      const colors: string[] = [];
      const lightStep = 60 / count;
      for (let i = 0; i < count; i++) {
        colors.push(hslToHex(h, s, 20 + i * lightStep));
      }
      return colors;
    }
    case 'shades': {
      const colors: string[] = [];
      for (let i = 0; i < count; i++) {
        const newL = Math.max(10, l - i * 15);
        colors.push(hslToHex(h, s, newL));
      }
      return colors;
    }
    case 'random':
    default: {
      const colors: string[] = [hslToHex(h, s, l)];
      for (let i = 1; i < count; i++) {
        const newH = (h + i * 72) % 360;
        colors.push(hslToHex(newH, Math.max(40, s - 10 + i * 5), Math.max(30, Math.min(70, l + (i % 2 === 0 ? 10 : -10)))));
      }
      return colors;
    }
  }
}

function createFallbackResponse(
  harmony: ColorHarmonyType,
  baseColor?: string,
  count = 5
): GeneratePaletteResponse {
  const colors = generateFallbackPalette(harmony, baseColor, count);
  return {
    data: {
      colors,
      harmonyType: harmony,
      baseColor: `#${(baseColor || colors[0].replace('#', '')).toUpperCase()}`,
    },
    meta: {
      request_id: 'fallback',
    },
  };
}

// Cache configuration for ISR
export const CACHE_TAGS = {
  palettes: 'color-palettes',
  palette: (harmony: string, base: string) => `palette-${harmony}-${base}`,
  harmonies: 'color-harmonies',
} as const;

export const REVALIDATE_TIMES = {
  list: 3600, // 1 hour for harmony list
  palette: 86400, // 24 hours for palettes (deterministic)
} as const;

// ============================================
// ERROR HANDLING
// ============================================

export class ColorPaletteApiError extends Error {
  constructor(
    public code: string,
    message: string,
    public status: number
  ) {
    super(message);
    this.name = 'ColorPaletteApiError';
  }
}

function isErrorResponse(data: unknown): data is ColorPaletteErrorResponse {
  return (
    typeof data === 'object' &&
    data !== null &&
    'error' in data &&
    typeof (data as ColorPaletteErrorResponse).error?.code === 'string'
  );
}

// ============================================
// BASE FETCH UTILITY
// ============================================

async function paletteFetch<T>(
  endpoint: string,
  options: {
    params?: Record<string, string | number | undefined>;
    revalidate?: number;
    tags?: string[];
  } = {}
): Promise<T> {
  const url = new URL(`${API_BASE_URL}${endpoint}`);

  // Add query parameters
  if (options.params) {
    for (const [key, value] of Object.entries(options.params)) {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    }
  }

  const response = await fetch(url.toString(), {
    headers: {
      Accept: 'application/json',
    },
    next: {
      revalidate: options.revalidate ?? REVALIDATE_TIMES.list,
      tags: options.tags,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    if (isErrorResponse(data)) {
      throw new ColorPaletteApiError(
        data.error.code,
        data.error.message,
        response.status
      );
    }
    throw new ColorPaletteApiError(
      'UNKNOWN_ERROR',
      'An unknown error occurred',
      response.status
    );
  }

  return data as T;
}

// ============================================
// PALETTE API
// ============================================

export async function generatePalette(
  params: GeneratePaletteParams
): Promise<GeneratePaletteResponse> {
  try {
    const base = params.base ? `#${params.base.replace('#', '')}` : undefined;

    return await paletteFetch<GeneratePaletteResponse>('/generate', {
      params: {
        harmony: params.harmony,
        base,
        count: params.count,
      },
      revalidate: REVALIDATE_TIMES.palette,
      tags: [
        CACHE_TAGS.palettes,
        CACHE_TAGS.palette(params.harmony, params.base || 'random'),
      ],
    });
  } catch {
    // Fallback to local generation if API fails
    return createFallbackResponse(params.harmony, params.base, params.count);
  }
}

export async function getRandomPalette(count = 5): Promise<GeneratePaletteResponse> {
  try {
    return await paletteFetch<GeneratePaletteResponse>('/random', {
      params: {
        count,
      },
      revalidate: 0, // No cache for random palettes
      tags: [CACHE_TAGS.palettes],
    });
  } catch {
    // Fallback to local generation if API fails
    return createFallbackResponse('random', undefined, count);
  }
}

export async function listHarmonies(): Promise<ListHarmoniesResponse> {
  try {
    return await paletteFetch<ListHarmoniesResponse>('/harmonies', {
      revalidate: REVALIDATE_TIMES.list,
      tags: [CACHE_TAGS.harmonies],
    });
  } catch {
    // Fallback to hardcoded list if API fails
    return {
      data: {
        harmonyTypes: [
          'complementary',
          'analogous',
          'triadic',
          'tetradic',
          'split-complementary',
          'monochromatic',
          'shades',
          'random',
        ],
      },
      meta: {
        request_id: 'fallback',
      },
    };
  }
}

// ============================================
// VALIDATION HELPERS
// ============================================

const VALID_HARMONIES: ColorHarmonyType[] = [
  'complementary',
  'analogous',
  'triadic',
  'tetradic',
  'split-complementary',
  'monochromatic',
  'shades',
  'random',
];

export function isValidHarmony(value: string): value is ColorHarmonyType {
  return VALID_HARMONIES.includes(value as ColorHarmonyType);
}

export function isValidHexColor(hex: string): boolean {
  return /^[A-Fa-f0-9]{6}$/.test(hex);
}
