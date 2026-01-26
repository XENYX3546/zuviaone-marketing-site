import type { ColorHarmonyType, HarmonySEOContent } from './types';

// ============================================
// HARMONY TYPE DEFINITIONS
// ============================================

export const HARMONY_TYPES: ColorHarmonyType[] = [
  'complementary',
  'analogous',
  'triadic',
  'tetradic',
  'split-complementary',
  'monochromatic',
  'shades',
  'random',
];

export const HARMONY_LABELS: Record<ColorHarmonyType, string> = {
  complementary: 'Complementary',
  analogous: 'Analogous',
  triadic: 'Triadic',
  tetradic: 'Tetradic',
  'split-complementary': 'Split Complementary',
  monochromatic: 'Monochromatic',
  shades: 'Shades',
  random: 'Random',
};

// ============================================
// SEO CONTENT PER HARMONY TYPE
// ============================================

export const harmonySEOContent: Record<string, HarmonySEOContent> = {
  general: {
    title: 'Color Palette Generator - Create Beautiful Color Schemes',
    description:
      'Generate stunning color palettes instantly. Explore complementary, analogous, triadic, and more harmony types. Free online tool for designers and developers.',
    heroTitle: 'Generate Beautiful Color Palettes',
    heroDescription:
      'Create harmonious color schemes for your designs in seconds. Click to copy, lock colors, and export to CSS, JSON, or PNG.',
    keywords: [
      'color palette generator',
      'color scheme generator',
      'color harmony',
      'design colors',
      'complementary colors',
      'hex color picker',
    ],
    content: {
      intro:
        'Our color palette generator helps designers and developers create beautiful, harmonious color schemes instantly. Whether you need complementary colors for high contrast or analogous tones for subtle gradients, we have you covered.',
      theory:
        'Color theory is the foundation of effective visual design. Understanding how colors relate to each other on the color wheel helps create palettes that are visually appealing and communicate the right mood.',
      useCases: [
        'Web design and UI interfaces',
        'Brand identity and logos',
        'Marketing materials',
        'Data visualisation',
        'Interior design mood boards',
      ],
    },
  },
  complementary: {
    title: 'Complementary Color Palette Generator | Opposite Colors',
    description:
      'Create striking complementary color schemes with colors opposite on the color wheel. Perfect for high-contrast designs, call-to-actions, and brand identities.',
    heroTitle: 'Complementary Color Palettes',
    heroDescription:
      'Colors opposite on the color wheel create maximum contrast and visual impact.',
    keywords: [
      'complementary colors',
      'opposite colors',
      'color contrast',
      'complementary color palette',
      'color wheel opposites',
    ],
    content: {
      intro:
        'Complementary colors sit directly opposite each other on the color wheel, like blue and orange or red and green. This relationship creates the strongest contrast and makes both colors appear more vibrant.',
      theory:
        'When placed side by side, complementary colors intensify each other through simultaneous contrast. This makes them ideal for designs that need to grab attention while maintaining visual balance.',
      useCases: [
        'Call-to-action buttons',
        'Sports team branding',
        'Event posters',
        'Food photography styling',
        'Accent elements in UI design',
      ],
    },
  },
  analogous: {
    title: 'Analogous Color Palette Generator | Harmonious Colors',
    description:
      'Generate smooth, harmonious analogous color schemes using adjacent colors on the wheel. Ideal for creating serene, cohesive designs.',
    heroTitle: 'Analogous Color Palettes',
    heroDescription:
      'Adjacent colors on the wheel for smooth, natural transitions and visual harmony.',
    keywords: [
      'analogous colors',
      'harmonious colors',
      'color harmony',
      'adjacent colors',
      'analogous color scheme',
    ],
    content: {
      intro:
        'Analogous colors are neighbours on the color wheel, typically spanning 30 to 60 degrees. They share common hues which creates a natural, cohesive look that is easy on the eyes.',
      theory:
        'These palettes feel organic and balanced because they mimic colour combinations found in nature - think autumn leaves or ocean sunsets. The lack of contrast creates a soothing, unified aesthetic.',
      useCases: [
        'Nature photography',
        'Wellness and spa branding',
        'Relaxing app interfaces',
        'Gradient backgrounds',
        'Editorial design',
      ],
    },
  },
  triadic: {
    title: 'Triadic Color Palette Generator | Three-Color Harmony',
    description:
      'Create vibrant triadic color schemes using three evenly spaced colors on the wheel. Perfect for dynamic, balanced designs with variety.',
    heroTitle: 'Triadic Color Palettes',
    heroDescription:
      'Three evenly-spaced colors for vibrant yet balanced color schemes.',
    keywords: [
      'triadic colors',
      'three color palette',
      'triadic color scheme',
      'color triad',
      'balanced colors',
    ],
    content: {
      intro:
        'Triadic color schemes use three colors that are evenly spaced around the color wheel, forming an equilateral triangle. This creates a vibrant palette with strong visual contrast while remaining balanced.',
      theory:
        'The equal spacing ensures no single color dominates, making triadic schemes versatile for designs that need variety without chaos. One color typically leads while the others accent.',
      useCases: [
        'Childrens products and toys',
        'Playful brand identities',
        'Infographics',
        'Creative portfolios',
        'Educational materials',
      ],
    },
  },
  tetradic: {
    title: 'Tetradic Color Palette Generator | Four-Color Harmony',
    description:
      'Generate rich tetradic color schemes with four colors forming a rectangle on the wheel. Ideal for complex, multi-element designs.',
    heroTitle: 'Tetradic Color Palettes',
    heroDescription:
      'Four colors in a rectangular pattern for rich, complex colour schemes.',
    keywords: [
      'tetradic colors',
      'four color palette',
      'rectangular color scheme',
      'complex color harmony',
      'tetradic scheme',
    ],
    content: {
      intro:
        'Tetradic (or rectangular) schemes use four colors arranged into two complementary pairs. This provides the richest colour variation while maintaining harmony through the complementary relationships.',
      theory:
        'With four colors, tetradic schemes offer maximum variety but require careful balance. Typically, one color dominates while others support. The key is managing the relationships between all four.',
      useCases: [
        'E-commerce websites',
        'Magazine layouts',
        'Dashboard interfaces',
        'Event branding',
        'Multi-product catalogues',
      ],
    },
  },
  'split-complementary': {
    title: 'Split Complementary Color Palette Generator',
    description:
      'Create balanced split-complementary schemes using a base color and two adjacent to its complement. High contrast with less tension.',
    heroTitle: 'Split Complementary Palettes',
    heroDescription:
      'A base color plus two colors adjacent to its complement for softer contrast.',
    keywords: [
      'split complementary colors',
      'split complement scheme',
      'softer contrast colors',
      'beginner color scheme',
      'split complementary palette',
    ],
    content: {
      intro:
        'Split-complementary uses a base color and the two colors adjacent to its direct complement. This provides strong visual contrast like complementary schemes but with less tension and more nuance.',
      theory:
        'By splitting the complement, you get the vibrancy of complementary colors but with more room to play. Its often recommended for beginners because its hard to mess up while still looking sophisticated.',
      useCases: [
        'Website landing pages',
        'Product packaging',
        'Presentation slides',
        'Social media graphics',
        'Logo design',
      ],
    },
  },
  monochromatic: {
    title: 'Monochromatic Color Palette Generator | Single Hue Variations',
    description:
      'Generate elegant monochromatic palettes using variations of a single hue. Perfect for sophisticated, cohesive designs.',
    heroTitle: 'Monochromatic Palettes',
    heroDescription:
      'Variations of a single hue for elegant, cohesive design schemes.',
    keywords: [
      'monochromatic colors',
      'single color palette',
      'tints and shades',
      'monochrome scheme',
      'one color variations',
    ],
    content: {
      intro:
        'Monochromatic schemes use a single base hue with variations in saturation and lightness. This creates tints (lighter) and shades (darker) of the same colour for a sophisticated, unified look.',
      theory:
        'The simplicity of monochromatic palettes makes them inherently harmonious. They create depth through value contrast rather than hue contrast, resulting in elegant, timeless designs.',
      useCases: [
        'Luxury brand identities',
        'Minimalist websites',
        'Photography portfolios',
        'Corporate presentations',
        'Mobile app interfaces',
      ],
    },
  },
  shades: {
    title: 'Color Shades Generator | Dark Variations',
    description:
      'Generate shades of any color by adding black. Create depth and dimension with progressively darker tones of your base color.',
    heroTitle: 'Color Shades',
    heroDescription:
      'Progressive darker tones of your base color for depth and dimension.',
    keywords: [
      'color shades',
      'dark color variations',
      'shade generator',
      'darker tones',
      'color depth',
    ],
    content: {
      intro:
        'Shades are created by adding black to a base colour, making it progressively darker. This technique creates depth and can evoke feelings of elegance, mystery, or seriousness.',
      theory:
        'Unlike full monochromatic schemes, shade palettes focus specifically on the darker end of the spectrum. They are particularly effective for creating visual hierarchy and adding weight to designs.',
      useCases: [
        'Dark mode interfaces',
        'Premium product design',
        'Night-themed applications',
        'Shadow and depth effects',
        'Dramatic visual compositions',
      ],
    },
  },
  random: {
    title: 'Random Color Palette Generator | Discover New Combinations',
    description:
      'Generate random harmonious color palettes for inspiration. Discover unexpected color combinations that work beautifully together.',
    heroTitle: 'Random Color Palettes',
    heroDescription:
      'Discover unexpected harmonious colour combinations for creative inspiration.',
    keywords: [
      'random color palette',
      'color inspiration',
      'discover colors',
      'random color generator',
      'color combinations',
    ],
    content: {
      intro:
        'Sometimes the best colour combinations come from happy accidents. Our random palette generator creates harmonious colour schemes you might never have considered, sparking creative inspiration.',
      theory:
        'While randomness might seem chaotic, our generator ensures the resulting palettes still follow colour theory principles. You get the surprise of discovery with the reliability of harmony.',
      useCases: [
        'Creative brainstorming',
        'Breaking design blocks',
        'Experimental projects',
        'Art and illustration',
        'Personal projects',
      ],
    },
  },
};

// ============================================
// COLOR NAME LOOKUP (Simplified)
// ============================================

const COLOR_NAMES: Record<string, string> = {
  FF0000: 'Red',
  FF4500: 'Orange Red',
  FFA500: 'Orange',
  FFD700: 'Gold',
  FFFF00: 'Yellow',
  ADFF2F: 'Green Yellow',
  '00FF00': 'Green',
  '00FA9A': 'Medium Spring Green',
  '00FFFF': 'Cyan',
  '00BFFF': 'Deep Sky Blue',
  '0000FF': 'Blue',
  '8A2BE2': 'Blue Violet',
  FF00FF: 'Magenta',
  FF1493: 'Deep Pink',
  FFFFFF: 'White',
  C0C0C0: 'Silver',
  '808080': 'Gray',
  '000000': 'Black',
  '800000': 'Maroon',
  '808000': 'Olive',
  '008000': 'Dark Green',
  '800080': 'Purple',
  '008080': 'Teal',
  '000080': 'Navy',
  F5F5DC: 'Beige',
  FFE4C4: 'Bisque',
  FAEBD7: 'Antique White',
  D2691E: 'Chocolate',
  '8B4513': 'Saddle Brown',
  A0522D: 'Sienna',
  CD853F: 'Peru',
  DEB887: 'Burlywood',
  F4A460: 'Sandy Brown',
  DAA520: 'Goldenrod',
  B8860B: 'Dark Goldenrod',
  FF6347: 'Tomato',
  FF7F50: 'Coral',
  DC143C: 'Crimson',
  DB7093: 'Pale Violet Red',
  C71585: 'Medium Violet Red',
  '4B0082': 'Indigo',
  '6A5ACD': 'Slate Blue',
  '7B68EE': 'Medium Slate Blue',
  '9370DB': 'Medium Purple',
  BA55D3: 'Medium Orchid',
  DA70D6: 'Orchid',
  EE82EE: 'Violet',
  DDA0DD: 'Plum',
  D8BFD8: 'Thistle',
  E6E6FA: 'Lavender',
  '4169E1': 'Royal Blue',
  '6495ED': 'Cornflower Blue',
  '87CEEB': 'Sky Blue',
  ADD8E6: 'Light Blue',
  B0E0E6: 'Powder Blue',
  AFEEEE: 'Pale Turquoise',
  '40E0D0': 'Turquoise',
  '48D1CC': 'Medium Turquoise',
  '20B2AA': 'Light Sea Green',
  '5F9EA0': 'Cadet Blue',
  '2E8B57': 'Sea Green',
  '3CB371': 'Medium Sea Green',
  '90EE90': 'Light Green',
  '98FB98': 'Pale Green',
  '00FF7F': 'Spring Green',
  '7CFC00': 'Lawn Green',
  '7FFF00': 'Chartreuse',
  '32CD32': 'Lime Green',
  '228B22': 'Forest Green',
  '006400': 'Dark Green',
  '556B2F': 'Dark Olive Green',
  '6B8E23': 'Olive Drab',
  '9ACD32': 'Yellow Green',
  BDB76B: 'Dark Khaki',
  F0E68C: 'Khaki',
  EEE8AA: 'Pale Goldenrod',
  FAFAD2: 'Light Goldenrod Yellow',
  FFFACD: 'Lemon Chiffon',
  FFEFD5: 'Papaya Whip',
  FFE4B5: 'Moccasin',
  FFDAB9: 'Peach Puff',
  FFE4E1: 'Misty Rose',
  FFF0F5: 'Lavender Blush',
  FAF0E6: 'Linen',
  FDF5E6: 'Old Lace',
  FFFAF0: 'Floral White',
  F5FFFA: 'Mint Cream',
  F0FFF0: 'Honeydew',
  F0FFFF: 'Azure',
  F0F8FF: 'Alice Blue',
  F8F8FF: 'Ghost White',
  FFF5EE: 'Seashell',
  FFFAFA: 'Snow',
  FFFFF0: 'Ivory',
  '2F4F4F': 'Dark Slate Gray',
  '696969': 'Dim Gray',
  '708090': 'Slate Gray',
  '778899': 'Light Slate Gray',
  A9A9A9: 'Dark Gray',
  D3D3D3: 'Light Gray',
  DCDCDC: 'Gainsboro',
  F5F5F5: 'White Smoke',
};

export function getColorName(hex: string): string {
  const upper = hex.toUpperCase().replace('#', '');
  return COLOR_NAMES[upper] || `#${upper}`;
}

export function formatHarmonyName(harmony: string): string {
  return HARMONY_LABELS[harmony as ColorHarmonyType] || harmony;
}

// ============================================
// COLOR PSYCHOLOGY & MEANINGS
// ============================================

type ColorPsychology = {
  hueRange: [number, number]; // HSL hue range
  name: string;
  meaning: string;
  emotions: string[];
  industries: string[];
  pairsWith: string[];
};

const COLOR_PSYCHOLOGY: ColorPsychology[] = [
  {
    hueRange: [0, 15],
    name: 'Red',
    meaning: 'Red is the color of passion, energy, and urgency. It stimulates appetite and creates a sense of excitement.',
    emotions: ['excitement', 'passion', 'urgency', 'energy', 'love', 'danger'],
    industries: ['Food & Beverage', 'Entertainment', 'Sports', 'Retail Sales', 'Automotive'],
    pairsWith: ['white', 'black', 'gold', 'navy'],
  },
  {
    hueRange: [15, 45],
    name: 'Orange',
    meaning: 'Orange combines the energy of red with the happiness of yellow. It represents creativity, adventure, and enthusiasm.',
    emotions: ['creativity', 'enthusiasm', 'warmth', 'adventure', 'confidence', 'friendliness'],
    industries: ['Technology', 'Food & Beverage', 'Sports', 'Entertainment', 'Children Products'],
    pairsWith: ['blue', 'white', 'brown', 'teal'],
  },
  {
    hueRange: [45, 70],
    name: 'Yellow',
    meaning: 'Yellow is the color of sunshine, optimism, and happiness. It grabs attention and stimulates mental activity.',
    emotions: ['happiness', 'optimism', 'warmth', 'clarity', 'energy', 'caution'],
    industries: ['Food & Beverage', 'Children Products', 'Leisure', 'Transportation', 'Retail'],
    pairsWith: ['purple', 'navy', 'gray', 'black'],
  },
  {
    hueRange: [70, 170],
    name: 'Green',
    meaning: 'Green represents nature, growth, and harmony. It symbolizes health, tranquility, and environmental awareness.',
    emotions: ['growth', 'harmony', 'freshness', 'safety', 'health', 'tranquility'],
    industries: ['Health & Wellness', 'Finance', 'Environment', 'Food', 'Technology', 'Real Estate'],
    pairsWith: ['white', 'brown', 'beige', 'gold'],
  },
  {
    hueRange: [170, 200],
    name: 'Cyan',
    meaning: 'Cyan blends the calm of blue with the freshness of green. It evokes clarity, cleanliness, and open spaces.',
    emotions: ['clarity', 'freshness', 'calm', 'cleanliness', 'openness', 'modernity'],
    industries: ['Technology', 'Healthcare', 'Travel', 'Cleaning Products', 'Startups'],
    pairsWith: ['coral', 'white', 'navy', 'gray'],
  },
  {
    hueRange: [200, 260],
    name: 'Blue',
    meaning: 'Blue conveys trust, stability, and professionalism. It is calming and creates feelings of security and reliability.',
    emotions: ['trust', 'security', 'calm', 'professionalism', 'loyalty', 'wisdom'],
    industries: ['Finance', 'Technology', 'Healthcare', 'Corporate', 'Insurance', 'Social Media'],
    pairsWith: ['orange', 'white', 'yellow', 'gray'],
  },
  {
    hueRange: [260, 290],
    name: 'Purple',
    meaning: 'Purple is associated with royalty, luxury, and creativity. It combines the stability of blue with the energy of red.',
    emotions: ['luxury', 'creativity', 'wisdom', 'mystery', 'spirituality', 'ambition'],
    industries: ['Beauty', 'Luxury Goods', 'Creative Arts', 'Spirituality', 'Education'],
    pairsWith: ['gold', 'yellow', 'silver', 'green'],
  },
  {
    hueRange: [290, 330],
    name: 'Pink',
    meaning: 'Pink represents femininity, romance, and playfulness. It can be calming and is often associated with nurturing.',
    emotions: ['romance', 'femininity', 'playfulness', 'compassion', 'nurturing', 'youth'],
    industries: ['Beauty', 'Fashion', 'Children Products', 'Confectionery', 'Wedding'],
    pairsWith: ['gray', 'navy', 'gold', 'mint'],
  },
  {
    hueRange: [330, 360],
    name: 'Red',
    meaning: 'Red is the color of passion, energy, and urgency. It stimulates appetite and creates a sense of excitement.',
    emotions: ['excitement', 'passion', 'urgency', 'energy', 'love', 'danger'],
    industries: ['Food & Beverage', 'Entertainment', 'Sports', 'Retail Sales', 'Automotive'],
    pairsWith: ['white', 'black', 'gold', 'navy'],
  },
];

export function getColorPsychology(hex: string): ColorPsychology {
  const { h } = hexToHslSimple(hex);
  const psychology = COLOR_PSYCHOLOGY.find(
    (p) => h >= p.hueRange[0] && h < p.hueRange[1]
  );
  return psychology || COLOR_PSYCHOLOGY[5]; // Default to blue
}

function hexToHslSimple(hex: string): { h: number; s: number; l: number } {
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
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

// ============================================
// COLOR UTILITIES
// ============================================

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleanHex = hex.replace('#', '');
  return {
    r: parseInt(cleanHex.substring(0, 2), 16),
    g: parseInt(cleanHex.substring(2, 4), 16),
    b: parseInt(cleanHex.substring(4, 6), 16),
  };
}

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  return hexToHslSimple(hex);
}

export function getContrastRatio(hex1: string, hex2: string): number {
  const getLuminance = (hex: string) => {
    const { r, g, b } = hexToRgb(hex);
    const [rs, gs, bs] = [r, g, b].map((c) => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const l1 = getLuminance(hex1);
  const l2 = getLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export function getWcagRating(contrastRatio: number): { level: string; description: string } {
  if (contrastRatio >= 7) {
    return { level: 'AAA', description: 'Excellent - Passes all WCAG requirements' };
  } else if (contrastRatio >= 4.5) {
    return { level: 'AA', description: 'Good - Passes for normal text' };
  } else if (contrastRatio >= 3) {
    return { level: 'AA Large', description: 'Acceptable for large text only' };
  }
  return { level: 'Fail', description: 'Does not meet accessibility standards' };
}

// ============================================
// RELATED COLORS
// ============================================

export function getRelatedColors(hex: string): { lighter: string[]; darker: string[]; similar: string[] } {
  const { h, s, l } = hexToHslSimple(hex);

  const hslToHex = (h: number, s: number, l: number): string => {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
  };

  const lighter = [
    hslToHex(h, s, Math.min(95, l + 15)),
    hslToHex(h, s, Math.min(95, l + 25)),
    hslToHex(h, Math.max(0, s - 20), Math.min(95, l + 30)),
  ];

  const darker = [
    hslToHex(h, s, Math.max(5, l - 15)),
    hslToHex(h, s, Math.max(5, l - 25)),
    hslToHex(h, Math.min(100, s + 10), Math.max(5, l - 30)),
  ];

  const similar = [
    hslToHex((h + 15) % 360, s, l),
    hslToHex((h - 15 + 360) % 360, s, l),
    hslToHex(h, Math.max(0, s - 20), l),
    hslToHex(h, Math.min(100, s + 20), l),
  ];

  return { lighter, darker, similar };
}

// ============================================
// POPULAR BASE COLORS FOR DISCOVERY
// ============================================

export const POPULAR_BASE_COLORS = [
  { hex: 'FF5733', name: 'Vibrant Orange' },
  { hex: '3B82F6', name: 'Blue' },
  { hex: '10B981', name: 'Emerald' },
  { hex: 'F59E0B', name: 'Amber' },
  { hex: 'EF4444', name: 'Red' },
  { hex: '8B5CF6', name: 'Purple' },
  { hex: 'EC4899', name: 'Pink' },
  { hex: '06B6D4', name: 'Cyan' },
  { hex: '84CC16', name: 'Lime' },
  { hex: 'F97316', name: 'Orange' },
  { hex: '6366F1', name: 'Indigo' },
  { hex: '14B8A6', name: 'Teal' },
];

// ============================================
// HARMONY DIAGRAM DATA
// ============================================

export const HARMONY_DIAGRAMS: Record<ColorHarmonyType, { description: string; angles: number[] }> = {
  complementary: {
    description: 'Two colors positioned 180° apart on the color wheel',
    angles: [0, 180],
  },
  analogous: {
    description: 'Three to five colors positioned 30° apart, adjacent on the wheel',
    angles: [0, 30, 60],
  },
  triadic: {
    description: 'Three colors positioned 120° apart, forming an equilateral triangle',
    angles: [0, 120, 240],
  },
  tetradic: {
    description: 'Four colors positioned 90° apart, forming a rectangle',
    angles: [0, 90, 180, 270],
  },
  'split-complementary': {
    description: 'A base color plus two colors 150° and 210° from the base',
    angles: [0, 150, 210],
  },
  monochromatic: {
    description: 'Single hue with variations in saturation and lightness',
    angles: [0],
  },
  shades: {
    description: 'Single hue with progressively darker values',
    angles: [0],
  },
  random: {
    description: 'Algorithmically generated harmonious combinations',
    angles: [0, 72, 144, 216, 288],
  },
};
