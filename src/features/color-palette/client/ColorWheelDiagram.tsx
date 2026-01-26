'use client';

import { Container, Section, Card } from '@/components/ui';
import { HARMONY_DIAGRAMS, HARMONY_LABELS, hexToHsl } from '@/lib/color-palette';
import type { ColorHarmonyType } from '@/lib/color-palette';

type ColorWheelDiagramProps = {
  harmony: ColorHarmonyType;
  baseColor?: string;
};

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}

export function ColorWheelDiagram({ harmony, baseColor }: ColorWheelDiagramProps) {
  const diagram = HARMONY_DIAGRAMS[harmony];
  const baseHue = baseColor ? hexToHsl(`#${baseColor}`).h : 0;

  // Generate 12 color segments for the wheel
  const segments = Array.from({ length: 12 }, (_, i) => {
    const hue = i * 30;
    return {
      hue,
      color: hslToHex(hue, 70, 50),
    };
  });

  // Calculate marker positions based on harmony angles
  const markers = diagram.angles.map((angle) => ({
    angle: (baseHue + angle) % 360,
    color: hslToHex((baseHue + angle) % 360, 70, 50),
  }));

  const size = 280;
  const center = size / 2;
  const outerRadius = 120;
  const innerRadius = 60;
  const markerRadius = 90;

  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Understanding {HARMONY_LABELS[harmony]} Harmony
          </h2>
          <p className="text-neutral-600 mb-6">{diagram.description}</p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Color Wheel SVG */}
            <Card className="flex items-center justify-center p-8">
              <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="drop-shadow-lg"
              >
                {/* Color wheel segments */}
                {segments.map((segment, i) => {
                  const startAngle = (segment.hue - 15) * (Math.PI / 180);
                  const endAngle = (segment.hue + 15) * (Math.PI / 180);

                  const outerX1 = center + outerRadius * Math.cos(startAngle - Math.PI / 2);
                  const outerY1 = center + outerRadius * Math.sin(startAngle - Math.PI / 2);
                  const outerX2 = center + outerRadius * Math.cos(endAngle - Math.PI / 2);
                  const outerY2 = center + outerRadius * Math.sin(endAngle - Math.PI / 2);

                  const innerX1 = center + innerRadius * Math.cos(startAngle - Math.PI / 2);
                  const innerY1 = center + innerRadius * Math.sin(startAngle - Math.PI / 2);
                  const innerX2 = center + innerRadius * Math.cos(endAngle - Math.PI / 2);
                  const innerY2 = center + innerRadius * Math.sin(endAngle - Math.PI / 2);

                  return (
                    <path
                      key={i}
                      d={`
                        M ${innerX1} ${innerY1}
                        L ${outerX1} ${outerY1}
                        A ${outerRadius} ${outerRadius} 0 0 1 ${outerX2} ${outerY2}
                        L ${innerX2} ${innerY2}
                        A ${innerRadius} ${innerRadius} 0 0 0 ${innerX1} ${innerY1}
                      `}
                      fill={segment.color}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Center circle */}
                <circle
                  cx={center}
                  cy={center}
                  r={innerRadius - 5}
                  fill="#f5f5f5"
                  stroke="#e5e5e5"
                  strokeWidth="2"
                />

                {/* Connection lines for multi-point harmonies */}
                {markers.length > 1 && (
                  <polygon
                    points={markers
                      .map((m) => {
                        const rad = m.angle * (Math.PI / 180) - Math.PI / 2;
                        const x = center + markerRadius * Math.cos(rad);
                        const y = center + markerRadius * Math.sin(rad);
                        return `${x},${y}`;
                      })
                      .join(' ')}
                    fill="none"
                    stroke="#333"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    opacity="0.5"
                  />
                )}

                {/* Harmony markers */}
                {markers.map((marker, i) => {
                  const rad = marker.angle * (Math.PI / 180) - Math.PI / 2;
                  const x = center + markerRadius * Math.cos(rad);
                  const y = center + markerRadius * Math.sin(rad);

                  return (
                    <g key={i}>
                      <circle
                        cx={x}
                        cy={y}
                        r={16}
                        fill={marker.color}
                        stroke="#fff"
                        strokeWidth="3"
                        className="drop-shadow-md"
                      />
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="#fff"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        {i + 1}
                      </text>
                    </g>
                  );
                })}

                {/* Center label */}
                <text
                  x={center}
                  y={center}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#666"
                  fontSize="12"
                  fontWeight="500"
                >
                  {markers.length} colors
                </text>
              </svg>
            </Card>

            {/* Explanation */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                How It Works
              </h3>

              {harmony === 'complementary' && (
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Complementary colors are positioned exactly <strong>180°</strong> apart on
                    the color wheel. This creates maximum contrast between the two colors.
                  </p>
                  <p>
                    When used together, they make each other appear more vibrant and intense.
                    This is due to a phenomenon called <strong>simultaneous contrast</strong>.
                  </p>
                  <p>
                    Best used sparingly as accents, or with one color dominant and the other
                    as a highlight.
                  </p>
                </div>
              )}

              {harmony === 'analogous' && (
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Analogous colors sit <strong>next to each other</strong> on the color
                    wheel, typically spanning 30-60°. They share similar undertones.
                  </p>
                  <p>
                    This creates a naturally <strong>harmonious</strong> and cohesive look,
                    similar to colors found together in nature.
                  </p>
                  <p>
                    Works best with one dominant color and others as supporting tones for
                    depth and interest.
                  </p>
                </div>
              )}

              {harmony === 'triadic' && (
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Triadic colors are positioned <strong>120° apart</strong>, forming an
                    equilateral triangle on the color wheel.
                  </p>
                  <p>
                    This scheme offers strong visual contrast while retaining{' '}
                    <strong>color balance</strong>. All three colors have equal visual weight.
                  </p>
                  <p>
                    Use one color as the dominant (60%), second as supporting (30%), and
                    third as accent (10%) for best results.
                  </p>
                </div>
              )}

              {harmony === 'tetradic' && (
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Tetradic (rectangular) schemes use <strong>four colors</strong> arranged
                    into two complementary pairs, positioned 90° apart.
                  </p>
                  <p>
                    This offers the richest variety of colors but requires careful{' '}
                    <strong>balance</strong> to avoid visual chaos.
                  </p>
                  <p>
                    Best approach: let one color dominate, use one or two as secondary, and
                    reserve the fourth for small accents.
                  </p>
                </div>
              )}

              {harmony === 'split-complementary' && (
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Instead of the direct complement, this scheme uses the{' '}
                    <strong>two colors adjacent</strong> to it (150° and 210° from base).
                  </p>
                  <p>
                    This provides similar contrast to complementary schemes but with{' '}
                    <strong>less visual tension</strong>, making it easier to balance.
                  </p>
                  <p>
                    Excellent for beginners - it's hard to mess up while still creating
                    sophisticated, dynamic palettes.
                  </p>
                </div>
              )}

              {harmony === 'monochromatic' && (
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Monochromatic palettes use <strong>one hue</strong> with variations in
                    saturation and lightness (tints, tones, and shades).
                  </p>
                  <p>
                    This creates inherently <strong>harmonious</strong> designs with a
                    sophisticated, unified appearance.
                  </p>
                  <p>
                    Depth comes from value contrast rather than hue contrast. Great for
                    creating elegant, focused designs.
                  </p>
                </div>
              )}

              {harmony === 'shades' && (
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Shades are created by adding <strong>black</strong> to a base color,
                    creating progressively darker versions.
                  </p>
                  <p>
                    Unlike full monochromatic schemes, shades focus on the{' '}
                    <strong>darker end</strong> of the spectrum only.
                  </p>
                  <p>
                    Perfect for dark mode interfaces, creating depth, and adding visual
                    weight to designs.
                  </p>
                </div>
              )}

              {harmony === 'random' && (
                <div className="space-y-3 text-neutral-600">
                  <p>
                    Random palettes are <strong>algorithmically generated</strong> while
                    still following color theory principles.
                  </p>
                  <p>
                    Each generation creates unexpected yet{' '}
                    <strong>harmonious combinations</strong> that might not occur through
                    traditional methods.
                  </p>
                  <p>
                    Great for breaking creative blocks, brainstorming, or discovering new
                    color combinations you wouldn't normally consider.
                  </p>
                </div>
              )}

              {/* Angle badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {diagram.angles.map((angle, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-neutral-200 rounded-full text-sm font-mono"
                  >
                    {angle}°
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
