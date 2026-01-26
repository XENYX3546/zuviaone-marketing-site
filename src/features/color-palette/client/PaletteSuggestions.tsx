'use client';

import { Container, Section, Card } from '@/components/ui';
import { Icon } from '@/components/ui';
import { getColorPsychology, HARMONY_LABELS } from '@/lib/color-palette';
import type { ColorHarmonyType } from '@/lib/color-palette';

type PaletteSuggestionsProps = {
  colors: string[];
  harmony: ColorHarmonyType;
  baseColor?: string;
};

// Suggestions based on harmony + color combination
function getSuggestions(
  harmony: ColorHarmonyType,
  colors: string[],
  baseColor?: string
): { useCases: string[]; industries: string[]; tips: string[] } {
  const primaryColor = baseColor || colors[0]?.replace('#', '') || 'FF5733';
  const psychology = getColorPsychology(`#${primaryColor}`);

  const harmonyUseCases: Record<ColorHarmonyType, string[]> = {
    complementary: [
      'Call-to-action buttons that demand attention',
      'Sports and fitness branding',
      'Sale banners and promotional materials',
      'Food packaging and restaurant menus',
      'Event posters and concert flyers',
    ],
    analogous: [
      'Wellness and meditation apps',
      'Nature photography websites',
      'Organic product packaging',
      'Relaxation and spa branding',
      'Environmental campaigns',
    ],
    triadic: [
      'Children\'s educational apps',
      'Playful brand identities',
      'Infographics and data visualization',
      'Creative agency portfolios',
      'Festival and carnival promotions',
    ],
    tetradic: [
      'Complex dashboard interfaces',
      'E-commerce product categories',
      'Magazine and editorial layouts',
      'Multi-brand portfolios',
      'Event with multiple sponsors',
    ],
    'split-complementary': [
      'Professional website landing pages',
      'Corporate presentation slides',
      'Mobile app interfaces',
      'Product packaging with shelf appeal',
      'Social media content templates',
    ],
    monochromatic: [
      'Luxury brand identities',
      'Minimalist portfolio websites',
      'Corporate annual reports',
      'High-end product photography',
      'Architectural firm branding',
    ],
    shades: [
      'Dark mode user interfaces',
      'Premium product packaging',
      'Night-themed applications',
      'Dramatic photography editing',
      'Luxury fashion lookbooks',
    ],
    random: [
      'Creative brainstorming sessions',
      'Experimental art projects',
      'Personal passion projects',
      'Unique greeting cards',
      'Abstract digital artwork',
    ],
  };

  const tips: string[] = [
    `Use the dominant color (${colors[0]}) for primary elements like headers and CTAs`,
    `Reserve accent colors for interactive elements and highlights`,
    `Maintain sufficient contrast for text readability (aim for 4.5:1 ratio)`,
    `Test your palette in both light and dark environments`,
    `Consider colorblind users - don't rely solely on color to convey meaning`,
  ];

  return {
    useCases: harmonyUseCases[harmony] || harmonyUseCases.random,
    industries: psychology.industries,
    tips,
  };
}

export function PaletteSuggestions({
  colors,
  harmony,
  baseColor,
}: PaletteSuggestionsProps) {
  const { useCases, industries, tips } = getSuggestions(harmony, colors, baseColor);

  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            How to Use This Palette
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Use Cases */}
            <Card>
              <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon name="target" size={20} className="text-blue-600" />
                Best Use Cases
              </h3>
              <ul className="space-y-3">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                    <Icon name="check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Industries */}
            <Card>
              <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon name="bar-chart" size={20} className="text-blue-600" />
                Recommended Industries
              </h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-neutral-500">
                This {HARMONY_LABELS[harmony].toLowerCase()} palette with its{' '}
                {colors.length} colors works particularly well for these industries
                based on color psychology research.
              </p>
            </Card>
          </div>

          {/* Design Tips */}
          <Card className="mt-6">
            <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              <Icon name="zap" size={20} className="text-yellow-500" />
              Design Tips
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg"
                >
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm text-neutral-600">{tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
