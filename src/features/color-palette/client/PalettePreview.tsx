'use client';

import { Container, Section } from '@/components/ui';

type PalettePreviewProps = {
  colors: string[];
};

function getContrastColor(hex: string): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

export function PalettePreview({ colors }: PalettePreviewProps) {
  const primary = colors[0] || '#3B82F6';
  const secondary = colors[1] || '#6366F1';
  const accent = colors[2] || '#10B981';
  const background = colors[3] || '#F3F4F6';
  const dark = colors[4] || '#1F2937';

  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Preview in Context
          </h2>
          <p className="text-neutral-600 mb-6">
            See how your palette looks in real UI components.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Button Examples */}
            <div className="p-6 bg-white rounded-xl border border-neutral-200">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                Buttons
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  className="px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: primary, color: getContrastColor(primary) }}
                >
                  Primary
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: secondary, color: getContrastColor(secondary) }}
                >
                  Secondary
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-medium border-2 transition-colors"
                  style={{ borderColor: primary, color: primary }}
                >
                  Outline
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent, color: getContrastColor(accent) }}
                >
                  Accent
                </button>
              </div>
            </div>

            {/* Card Example */}
            <div className="p-6 bg-white rounded-xl border border-neutral-200">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                Card
              </h3>
              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: background }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: primary, color: getContrastColor(primary) }}
                  >
                    AB
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: dark }}>
                      Alex Brown
                    </p>
                    <p className="text-sm" style={{ color: secondary }}>
                      Product Designer
                    </p>
                  </div>
                </div>
                <p className="text-sm" style={{ color: dark, opacity: 0.8 }}>
                  This card demonstrates how your palette works for user profiles and content cards.
                </p>
              </div>
            </div>

            {/* Gradient Example */}
            <div className="p-6 bg-white rounded-xl border border-neutral-200">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                Gradients
              </h3>
              <div className="space-y-3">
                <div
                  className="h-12 rounded-lg"
                  style={{
                    background: `linear-gradient(to right, ${primary}, ${secondary})`,
                  }}
                />
                <div
                  className="h-12 rounded-lg"
                  style={{
                    background: `linear-gradient(to right, ${secondary}, ${accent})`,
                  }}
                />
                <div
                  className="h-12 rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, ${primary}, ${accent}, ${secondary})`,
                  }}
                />
              </div>
            </div>

            {/* Text & Background */}
            <div className="p-6 bg-white rounded-xl border border-neutral-200">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                Text on Backgrounds
              </h3>
              <div className="space-y-2">
                {colors.slice(0, 4).map((color, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg flex items-center justify-between"
                    style={{ backgroundColor: color }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: getContrastColor(color) }}
                    >
                      Sample text on Color {i + 1}
                    </span>
                    <span
                      className="text-sm font-mono opacity-70"
                      style={{ color: getContrastColor(color) }}
                    >
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="md:col-span-2 p-6 bg-white rounded-xl border border-neutral-200">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                Dashboard Preview
              </h3>
              <div
                className="rounded-lg overflow-hidden border"
                style={{ borderColor: background }}
              >
                {/* Header */}
                <div
                  className="px-4 py-3 flex items-center justify-between"
                  style={{ backgroundColor: dark }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: primary, color: getContrastColor(primary) }}
                    >
                      P
                    </div>
                    <div className="hidden sm:flex gap-4">
                      <span className="text-sm" style={{ color: getContrastColor(dark) }}>
                        Dashboard
                      </span>
                      <span
                        className="text-sm opacity-60"
                        style={{ color: getContrastColor(dark) }}
                      >
                        Projects
                      </span>
                      <span
                        className="text-sm opacity-60"
                        style={{ color: getContrastColor(dark) }}
                      >
                        Settings
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: secondary }}
                  />
                </div>

                {/* Content */}
                <div className="p-4" style={{ backgroundColor: background }}>
                  <div className="grid grid-cols-3 gap-4">
                    {[primary, secondary, accent].map((color, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: '#fff' }}
                      >
                        <div
                          className="w-8 h-8 rounded mb-2 flex items-center justify-center"
                          style={{ backgroundColor: `${color}20` }}
                        >
                          <div
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: color }}
                          />
                        </div>
                        <div
                          className="h-2 rounded mb-1 w-3/4"
                          style={{ backgroundColor: dark, opacity: 0.15 }}
                        />
                        <div
                          className="h-2 rounded w-1/2"
                          style={{ backgroundColor: dark, opacity: 0.1 }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
