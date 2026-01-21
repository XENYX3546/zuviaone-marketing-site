'use client';

import { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { scaleIn, viewportOnce } from '@/lib/utils/animations';

type CardProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
  hover?: boolean;
  className?: string;
};

export function Card({ children, hover = false, className, ...props }: CardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        'rounded-xl bg-white border border-neutral-200 p-6',
        hover && 'transition-all duration-200 hover:shadow-lg hover:border-neutral-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
