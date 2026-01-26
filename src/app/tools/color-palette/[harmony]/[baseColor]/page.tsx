import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LandingLayout } from '@/components/layout';
import { Container, Section } from '@/components/ui';
import { siteConfig } from '@/lib/constants';
import {
  ColorPaletteGenerator,
  HarmonySelector,
  RelatedPalettes,
  ColorInfo,
  PaletteSuggestions,
  RelatedColorsGrid,
  CodeSnippets,
  PalettePreview,
  ColorWheelDiagram,
} from '@/features/color-palette/client';
import {
  generatePalette,
  isValidHarmony,
  isValidHexColor,
  getColorName,
  formatHarmonyName,
  HARMONY_LABELS,
} from '@/lib/color-palette';
import type { ColorHarmonyType } from '@/lib/color-palette';

type Props = {
  params: Promise<{ harmony: string; baseColor: string }>;
};

// No generateStaticParams - these are dynamically rendered with ISR caching
// The cache will build up over time as users generate palettes

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { harmony, baseColor } = await params;

  if (!isValidHarmony(harmony) || !isValidHexColor(baseColor)) {
    return { title: 'Not Found' };
  }

  const colorName = getColorName(baseColor);
  const harmonyLabel = formatHarmonyName(harmony);
  const title = `${colorName} ${harmonyLabel} Color Palette | ${siteConfig.name}`;
  const description = `Beautiful ${harmonyLabel.toLowerCase()} color palette based on #${baseColor.toUpperCase()}. Copy hex codes, export to CSS or JSON. Free color scheme generator.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/tools/color-palette/${harmony}/${baseColor.toUpperCase()}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/tools/color-palette/${harmony}/${baseColor.toUpperCase()}`,
      type: 'website',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function PaletteSchema({
  harmony,
  baseColor,
  colors,
}: {
  harmony: ColorHarmonyType;
  baseColor: string;
  colors: string[];
}) {
  const colorName = getColorName(baseColor);
  const harmonyLabel = HARMONY_LABELS[harmony];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${colorName} ${harmonyLabel} Color Palette`,
    description: `A ${harmonyLabel.toLowerCase()} color palette with ${colors.length} colors based on #${baseColor.toUpperCase()}`,
    creator: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: colors.map((color) => ({
      '@type': 'Thing',
      name: getColorName(color.replace('#', '')),
      color: color,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({
  harmony,
  baseColor,
}: {
  harmony: ColorHarmonyType;
  baseColor: string;
}) {
  const colorName = getColorName(baseColor);
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
      {
        '@type': 'ListItem',
        position: 3,
        name: colorName,
        item: `${siteConfig.url}/tools/color-palette/${harmony}/${baseColor.toUpperCase()}`,
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

export default async function BaseColorPage({ params }: Props) {
  const { harmony, baseColor } = await params;

  if (!isValidHarmony(harmony) || !isValidHexColor(baseColor)) {
    notFound();
  }

  const harmonyType = harmony as ColorHarmonyType;
  const normalizedBaseColor = baseColor.toUpperCase();

  const paletteResponse = await generatePalette({
    harmony: harmonyType,
    base: normalizedBaseColor,
    count: 5,
  });

  const colorName = getColorName(normalizedBaseColor);
  const harmonyLabel = HARMONY_LABELS[harmonyType];

  return (
    <LandingLayout>
      <PaletteSchema
        harmony={harmonyType}
        baseColor={normalizedBaseColor}
        colors={paletteResponse.data.colors}
      />
      <BreadcrumbSchema harmony={harmonyType} baseColor={normalizedBaseColor} />

      {/* Hero with Generator */}
      <section className="pt-8 md:pt-12">
        <Container>
          <div className="text-center mb-8">
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-neutral-500 flex-wrap">
                <li>
                  <a
                    href="/tools/color-palette"
                    className="hover:text-neutral-700 transition-colors"
                  >
                    Color Palette Generator
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <a
                    href={`/tools/color-palette/${harmony}`}
                    className="hover:text-neutral-700 transition-colors"
                  >
                    {harmonyLabel}
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-neutral-900 font-medium">{colorName}</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
              {colorName} {harmonyLabel} Palette
            </h1>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              A beautiful {harmonyLabel.toLowerCase()} color scheme based on{' '}
              <span
                className="font-mono px-2 py-0.5 rounded"
                style={{
                  backgroundColor: `#${normalizedBaseColor}`,
                  color:
                    parseInt(normalizedBaseColor, 16) > 0x7fffff
                      ? '#000'
                      : '#fff',
                }}
              >
                #{normalizedBaseColor}
              </span>
            </p>
          </div>
        </Container>

        {/* Full-width color palette */}
        <ColorPaletteGenerator
          initialColors={paletteResponse.data.colors}
          harmony={harmonyType}
          baseColor={normalizedBaseColor}
          showBaseColorPicker
        />
      </section>

      {/* Color Info - Psychology, RGB/HSL, Accessibility */}
      <ColorInfo baseColor={normalizedBaseColor} />

      {/* Color Wheel Diagram */}
      <ColorWheelDiagram harmony={harmonyType} baseColor={normalizedBaseColor} />

      {/* Palette Preview - UI Mockups */}
      <PalettePreview colors={paletteResponse.data.colors} />

      {/* Palette Suggestions - Use Cases & Industries */}
      <PaletteSuggestions
        colors={paletteResponse.data.colors}
        harmony={harmonyType}
        baseColor={normalizedBaseColor}
      />

      {/* Code Snippets - CSS, Tailwind, JSON */}
      <CodeSnippets colors={paletteResponse.data.colors} />

      {/* Related Colors - Lighter/Darker/Similar */}
      <RelatedColorsGrid baseColor={normalizedBaseColor} harmony={harmonyType} />

      {/* Harmony Types Navigation */}
      <HarmonySelector current={harmonyType} baseColor={normalizedBaseColor} />

      {/* Related Palettes - Other Harmonies */}
      <RelatedPalettes
        currentHarmony={harmonyType}
        baseColor={normalizedBaseColor}
      />
    </LandingLayout>
  );
}
