'use client';

import { Container, Section, Card } from '@/components/ui';
import {
  getColorName,
  getColorPsychology,
  hexToRgb,
  hexToHsl,
  getContrastRatio,
  getWcagRating,
} from '@/lib/color-palette';
import { cn } from '@/lib/utils';

type ColorInfoProps = {
  baseColor: string;
};

export function ColorInfo({ baseColor }: ColorInfoProps) {
  const hex = `#${baseColor}`;
  const colorName = getColorName(baseColor);
  const psychology = getColorPsychology(hex);
  const rgb = hexToRgb(hex);
  const hsl = hexToHsl(hex);

  const contrastWithWhite = getContrastRatio(hex, '#FFFFFF');
  const contrastWithBlack = getContrastRatio(hex, '#000000');
  const wcagWhite = getWcagRating(contrastWithWhite);
  const wcagBlack = getWcagRating(contrastWithBlack);

  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            About {colorName}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Color Preview & Values */}
            <Card>
              <div
                className="w-full h-32 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: hex }}
              >
                <span
                  className="text-2xl font-mono font-bold"
                  style={{ color: contrastWithWhite > contrastWithBlack ? '#fff' : '#000' }}
                >
                  {hex}
                </span>
              </div>

              <h3 className="font-semibold text-neutral-900 mb-3">Color Values</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">HEX</span>
                  <code className="font-mono text-neutral-900">{hex}</code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">RGB</span>
                  <code className="font-mono text-neutral-900">
                    rgb({rgb.r}, {rgb.g}, {rgb.b})
                  </code>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">HSL</span>
                  <code className="font-mono text-neutral-900">
                    hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
                  </code>
                </div>
              </div>
            </Card>

            {/* Color Psychology */}
            <Card>
              <h3 className="font-semibold text-neutral-900 mb-3">
                Color Psychology
              </h3>
              <p className="text-neutral-600 text-sm mb-4">{psychology.meaning}</p>

              <h4 className="text-sm font-medium text-neutral-700 mb-2">
                Associated Emotions
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {psychology.emotions.map((emotion) => (
                  <span
                    key={emotion}
                    className="px-2 py-1 bg-neutral-100 rounded-full text-xs text-neutral-600 capitalize"
                  >
                    {emotion}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-medium text-neutral-700 mb-2">
                Pairs Well With
              </h4>
              <div className="flex flex-wrap gap-2">
                {psychology.pairsWith.map((color) => (
                  <span
                    key={color}
                    className="px-2 py-1 bg-neutral-100 rounded-full text-xs text-neutral-600 capitalize"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Accessibility */}
          <Card className="mt-6">
            <h3 className="font-semibold text-neutral-900 mb-4">
              Accessibility (WCAG Contrast)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* White text on color */}
              <div className="p-4 rounded-lg" style={{ backgroundColor: hex }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">White Text</span>
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded text-xs font-bold',
                      wcagWhite.level === 'Fail'
                        ? 'bg-red-500 text-white'
                        : wcagWhite.level === 'AAA'
                          ? 'bg-green-500 text-white'
                          : 'bg-yellow-500 text-black'
                    )}
                  >
                    {wcagWhite.level}
                  </span>
                </div>
                <p className="text-white/80 text-sm">
                  Contrast: {contrastWithWhite.toFixed(2)}:1
                </p>
                <p className="text-white/60 text-xs mt-1">{wcagWhite.description}</p>
              </div>

              {/* Black text on color */}
              <div className="p-4 rounded-lg" style={{ backgroundColor: hex }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-black font-medium">Black Text</span>
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded text-xs font-bold',
                      wcagBlack.level === 'Fail'
                        ? 'bg-red-500 text-white'
                        : wcagBlack.level === 'AAA'
                          ? 'bg-green-500 text-white'
                          : 'bg-yellow-500 text-black'
                    )}
                  >
                    {wcagBlack.level}
                  </span>
                </div>
                <p className="text-black/80 text-sm">
                  Contrast: {contrastWithBlack.toFixed(2)}:1
                </p>
                <p className="text-black/60 text-xs mt-1">{wcagBlack.description}</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
