'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container, Section, Card } from '@/components/ui';
import { Icon } from '@/components/ui';
import { HARMONY_TYPES, HARMONY_LABELS, harmonySEOContent } from '@/lib/color-palette';
import type { ColorHarmonyType } from '@/lib/color-palette';

type RelatedPalettesProps = {
  currentHarmony: ColorHarmonyType;
  baseColor?: string;
};

export function RelatedPalettes({ currentHarmony, baseColor }: RelatedPalettesProps) {
  // Get other harmonies excluding current and random
  const relatedHarmonies = HARMONY_TYPES.filter(
    (h) => h !== currentHarmony && h !== 'random'
  );

  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900">
            Explore Other Harmonies
          </h2>
          <p className="mt-2 text-neutral-600">
            Try different color harmony types{' '}
            {baseColor && (
              <>
                with <span className="font-mono">#{baseColor}</span> as your base
                color
              </>
            )}
            .
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedHarmonies.map((harmony, index) => {
            const href = baseColor
              ? `/tools/color-palette/${harmony}/${baseColor}`
              : `/tools/color-palette/${harmony}`;
            const content = harmonySEOContent[harmony];

            return (
              <motion.div
                key={harmony}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={href} className="block group">
                  <Card hover className="h-full">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                          {HARMONY_LABELS[harmony]}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                          {content?.heroDescription || ''}
                        </p>
                      </div>
                      <Icon
                        name="arrow-right"
                        size={18}
                        className="text-neutral-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                      />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Link back to main tool */}
        <div className="mt-8 text-center">
          <Link
            href="/tools/color-palette"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <Icon name="arrow-left" size={16} />
            Back to Color Palette Generator
          </Link>
        </div>
      </Container>
    </Section>
  );
}
