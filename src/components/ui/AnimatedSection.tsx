'use client';

import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { fadeInUp, viewportOnce } from '@/lib/utils/animations';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
}: AnimatedSectionProps) {
  const customVariants: Variants = {
    hidden: variants.hidden,
    visible: {
      ...(typeof variants.visible === 'object' ? variants.visible : {}),
      transition: {
        ...(typeof variants.visible === 'object' && 'transition' in variants.visible
          ? variants.visible.transition
          : {}),
        delay,
      },
    },
  };

  return (
    <motion.div
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
