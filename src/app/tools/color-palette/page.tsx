import type { Metadata } from 'next';
import { LandingLayout } from '@/components/layout';
import { Container, Section } from '@/components/ui';
import { siteConfig } from '@/lib/constants';
import {
  ColorPaletteGenerator,
  HarmonySelector,
} from '@/features/color-palette/client';
import { getRandomPalette, harmonySEOContent } from '@/lib/color-palette';

export const metadata: Metadata = {
  title: 'Color Palette Generator - Create Beautiful Color Schemes | ZuviaOne',
  description:
    'Generate stunning color palettes instantly. Explore complementary, analogous, triadic, and more harmony types. Free online tool for designers and developers.',
  keywords: [
    'color palette generator',
    'color scheme generator',
    'color harmony',
    'design colors',
    'complementary colors',
    'hex color picker',
    'free color tool',
  ],
  alternates: {
    canonical: `${siteConfig.url}/tools/color-palette`,
  },
  openGraph: {
    title: 'Color Palette Generator - Create Beautiful Color Schemes',
    description:
      'Generate stunning color palettes instantly. Free online tool for designers and developers.',
    url: `${siteConfig.url}/tools/color-palette`,
    type: 'website',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Palette Generator - Create Beautiful Color Schemes',
    description:
      'Generate stunning color palettes instantly. Free online tool for designers and developers.',
  },
};

function ToolSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Color Palette Generator',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    description:
      'Generate beautiful color palettes with various harmony types including complementary, analogous, triadic, and more.',
    url: `${siteConfig.url}/tools/color-palette`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
    },
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ColorPalettePage() {
  const initialPalette = await getRandomPalette(5);
  const content = harmonySEOContent.general;

  return (
    <LandingLayout>
      <ToolSchema />

      {/* Hero with Generator */}
      <section className="pt-8 md:pt-12">
        <Container>
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
              {content.heroTitle}
            </h1>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              {content.heroDescription}
            </p>
          </div>
        </Container>

        {/* Full-width color palette */}
        <ColorPaletteGenerator
          initialColors={initialPalette.data.colors}
          harmony="random"
        />
      </section>

      {/* Harmony Types Navigation */}
      <HarmonySelector />

      {/* SEO Content */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              About Our Color Palette Generator
            </h2>
            <p className="text-neutral-600 mb-6">{content.content.intro}</p>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Understanding Color Theory
            </h3>
            <p className="text-neutral-600 mb-6">{content.content.theory}</p>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Use Cases
            </h3>
            <ul className="space-y-2">
              {content.content.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-2 text-neutral-600">
                  <span className="text-blue-500 mt-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Keyboard Shortcuts */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              Keyboard Shortcuts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
                <kbd className="px-3 py-1.5 bg-white border border-neutral-200 rounded text-sm font-mono">
                  Space
                </kbd>
                <span className="text-neutral-600">Generate new palette</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
                <kbd className="px-3 py-1.5 bg-white border border-neutral-200 rounded text-sm font-mono">
                  1-5
                </kbd>
                <span className="text-neutral-600">Lock/unlock color</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
                <kbd className="px-3 py-1.5 bg-white border border-neutral-200 rounded text-sm font-mono">
                  Cmd+E
                </kbd>
                <span className="text-neutral-600">Export palette</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg">
                <span className="text-neutral-600">Click any color to copy</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
