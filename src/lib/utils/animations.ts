// Animation presets for framer-motion - subtle and professional
// Supports prefers-reduced-motion for accessibility

import { type Variants } from 'framer-motion';

// Reduced motion variants - instant transitions with no movement
const reducedMotionTransition = { duration: 0.01 };

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Reduced motion variants - fade only, no movement
export const fadeInReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: reducedMotionTransition },
};

export const staggerContainerReduced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};

// Helper to get motion-safe variants
export function getMotionSafeVariants(
  variants: Variants,
  prefersReducedMotion: boolean
): Variants {
  if (!prefersReducedMotion) {return variants;}

  // Return reduced motion version - just fade, no transforms
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: reducedMotionTransition },
  };
}

// Viewport settings for scroll-triggered animations
export const viewportOnce = { once: true, margin: '-100px' } as const;

// Reduced motion viewport - no margin for faster trigger
export const viewportOnceReduced = { once: true, margin: '0px' } as const;
