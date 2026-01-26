'use client';

import Link from 'next/link';
import { Container, Section, Card } from '@/components/ui';
import { Icon } from '@/components/ui';
import { getRelatedColors, getColorName, HARMONY_LABELS } from '@/lib/color-palette';
import type { ColorHarmonyType } from '@/lib/color-palette';

type RelatedColorsGridProps = {
  baseColor: string;
  harmony: ColorHarmonyType;
};

function ColorLink({
  hex,
  harmony,
  label,
}: {
  hex: string;
  harmony: ColorHarmonyType;
  label?: string;
}) {
  const cleanHex = hex.replace('#', '');
  const colorName = getColorName(cleanHex);

  return (
    <Link
      href={`/tools/color-palette/${harmony}/${cleanHex}`}
      className="group block"
    >
      <div
        className="h-16 rounded-lg mb-2 transition-transform group-hover:scale-105"
        style={{ backgroundColor: hex }}
      />
      <p className="text-xs font-mono text-neutral-600 group-hover:text-blue-600 transition-colors">
        {hex}
      </p>
      {label && (
        <p className="text-xs text-neutral-400">{label}</p>
      )}
    </Link>
  );
}

export function RelatedColorsGrid({ baseColor, harmony }: RelatedColorsGridProps) {
  const related = getRelatedColors(`#${baseColor}`);

  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Related Colors
          </h2>
          <p className="text-neutral-600 mb-6">
            Explore similar {HARMONY_LABELS[harmony].toLowerCase()} palettes with these related base colors.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Lighter Variations */}
            <Card>
              <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-yellow-500"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                Lighter Variations
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {related.lighter.map((hex, i) => (
                  <ColorLink
                    key={hex}
                    hex={hex}
                    harmony={harmony}
                    label={`+${(i + 1) * 15}%`}
                  />
                ))}
              </div>
            </Card>

            {/* Darker Variations */}
            <Card>
              <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-indigo-500"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                Darker Variations
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {related.darker.map((hex, i) => (
                  <ColorLink
                    key={hex}
                    hex={hex}
                    harmony={harmony}
                    label={`-${(i + 1) * 15}%`}
                  />
                ))}
              </div>
            </Card>

            {/* Similar Hues */}
            <Card>
              <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <Icon name="target" size={18} className="text-green-500" />
                Similar Hues
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {related.similar.map((hex) => (
                  <ColorLink key={hex} hex={hex} harmony={harmony} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
