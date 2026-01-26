import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LandingLayout } from '@/components/layout';
import { Container, Section } from '@/components/ui';
import { siteConfig } from '@/lib/constants';
import {
  ColorPaletteGenerator,
  HarmonySelector,
  RelatedPalettes,
  PaletteSuggestions,
  CodeSnippets,
  PalettePreview,
  ColorWheelDiagram,
} from '@/features/color-palette/client';
import {
  generatePalette,
  isValidHarmony,
  harmonySEOContent,
  HARMONY_LABELS,
  HARMONY_TYPES,
} from '@/lib/color-palette';
import type { ColorHarmonyType } from '@/lib/color-palette';

type Props = {
  params: Promise<{ harmony: string }>;
};

// Generate static pages for all harmony types
export function generateStaticParams() {
  return HARMONY_TYPES.filter((h) => h !== 'random').map((harmony) => ({
    harmony,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { harmony } = await params;

  if (!isValidHarmony(harmony)) {
    return { title: 'Not Found' };
  }

  const content = harmonySEOContent[harmony];

  return {
    title: `${content.title} | ${siteConfig.name}`,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: `${siteConfig.url}/tools/color-palette/${harmony}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${siteConfig.url}/tools/color-palette/${harmony}`,
      type: 'website',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
    },
  };
}

function HarmonySchema({ harmony }: { harmony: ColorHarmonyType }) {
  const content = harmonySEOContent[harmony];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${HARMONY_LABELS[harmony]} Color Palette Generator`,
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    description: content.description,
    url: `${siteConfig.url}/tools/color-palette/${harmony}`,
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

function BreadcrumbSchema({ harmony }: { harmony: ColorHarmonyType }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Color Palette Generator',
        item: `${siteConfig.url}/tools/color-palette`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: HARMONY_LABELS[harmony],
        item: `${siteConfig.url}/tools/color-palette/${harmony}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function HarmonyPage({ params }: Props) {
  const { harmony } = await params;

  if (!isValidHarmony(harmony)) {
    notFound();
  }

  const harmonyType = harmony as ColorHarmonyType;
  const paletteResponse = await generatePalette({ harmony: harmonyType, count: 5 });
  const content = harmonySEOContent[harmony];

  return (
    <LandingLayout>
      <HarmonySchema harmony={harmonyType} />
      <BreadcrumbSchema harmony={harmonyType} />

      {/* Hero with Generator */}
      <section className="pt-8 md:pt-12">
        <Container>
          <div className="text-center mb-8">
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-neutral-500">
                <li>
                  <a
                    href="/tools/color-palette"
                    className="hover:text-neutral-700 transition-colors"
                  >
                    Color Palette Generator
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-neutral-900 font-medium">
                  {HARMONY_LABELS[harmonyType]}
                </li>
              </ol>
            </nav>
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
          initialColors={paletteResponse.data.colors}
          harmony={harmonyType}
          showBaseColorPicker
        />
      </section>

      {/* Color Wheel Diagram - Visual Explanation */}
      <ColorWheelDiagram harmony={harmonyType} />

      {/* Palette Preview - UI Mockups */}
      <PalettePreview colors={paletteResponse.data.colors} />

      {/* Palette Suggestions - Use Cases & Industries */}
      <PaletteSuggestions
        colors={paletteResponse.data.colors}
        harmony={harmonyType}
      />

      {/* Code Snippets - CSS, Tailwind, JSON */}
      <CodeSnippets colors={paletteResponse.data.colors} />

      {/* SEO Content */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              About {HARMONY_LABELS[harmonyType]} Colors
            </h2>
            <p className="text-neutral-600 mb-6">{content.content.intro}</p>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Color Theory
            </h3>
            <p className="text-neutral-600 mb-6">{content.content.theory}</p>

            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Best Use Cases
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

      {/* Harmony Types Navigation */}
      <HarmonySelector current={harmonyType} />

      {/* Related Palettes - Other Harmonies */}
      <RelatedPalettes currentHarmony={harmonyType} />
    </LandingLayout>
  );
}
