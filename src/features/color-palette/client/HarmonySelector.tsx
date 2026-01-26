'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { cn } from '@/lib/utils';
import { HARMONY_TYPES, HARMONY_LABELS, harmonySEOContent } from '@/lib/color-palette';
import type { ColorHarmonyType } from '@/lib/color-palette';

type HarmonySelectorProps = {
  current?: ColorHarmonyType;
  baseColor?: string;
};

export function HarmonySelector({ current, baseColor }: HarmonySelectorProps) {
  // Filter out 'random' for the navigation - it's available but not a primary category
  const displayHarmonies = HARMONY_TYPES.filter((h) => h !== 'random');

  return (
    <Section>
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-neutral-900">
            Color Harmony Types
          </h2>
          <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">
            Explore different color harmony algorithms to find the perfect palette
            for your project.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {displayHarmonies.map((harmony, index) => {
            const isActive = harmony === current;
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
                <Link
                  href={href}
                  className={cn(
                    'block p-4 rounded-xl border transition-all duration-200',
                    isActive
                      ? 'border-blue-500 bg-blue-50 shadow-sm'
                      : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-sm'
                  )}
                >
                  <h3
                    className={cn(
                      'font-semibold',
                      isActive ? 'text-blue-700' : 'text-neutral-900'
                    )}
                  >
                    {HARMONY_LABELS[harmony]}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                    {content?.heroDescription || ''}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
