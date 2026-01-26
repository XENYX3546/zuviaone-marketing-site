// ============================================
// COLOR TYPES
// ============================================

export type ColorHarmonyType =
  | 'complementary'
  | 'analogous'
  | 'triadic'
  | 'tetradic'
  | 'split-complementary'
  | 'monochromatic'
  | 'shades'
  | 'random';

export type ColorValue = {
  hex: string;
  rgb?: { r: number; g: number; b: number };
  hsl?: { h: number; s: number; l: number };
  name?: string;
};

// ============================================
// API RESPONSE TYPES
// ============================================

export type ResponseMeta = {
  request_id: string;
};

export type GeneratedPaletteData = {
  colors: string[];
  harmonyType: ColorHarmonyType;
  baseColor: string;
};

export type GeneratePaletteResponse = {
  data: GeneratedPaletteData;
  meta: ResponseMeta;
};

export type ListHarmoniesResponse = {
  data: {
    harmonyTypes: ColorHarmonyType[];
  };
  meta: ResponseMeta;
};

// ============================================
// API REQUEST TYPES
// ============================================

export type GeneratePaletteParams = {
  harmony: ColorHarmonyType;
  base?: string;
  count?: number;
};

export type RandomPaletteParams = {
  count?: number;
};

// ============================================
// ERROR TYPES
// ============================================

export type ColorPaletteErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

// ============================================
// SEO CONTENT TYPES
// ============================================

export type HarmonySEOContent = {
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  keywords: string[];
  content: {
    intro: string;
    theory: string;
    useCases: string[];
  };
};

// ============================================
// COMPONENT PROP TYPES
// ============================================

export type ColorPalette = {
  colors: ColorValue[];
  harmony: ColorHarmonyType;
  baseColor: string;
};
