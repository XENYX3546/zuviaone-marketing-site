'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user prefers reduced motion.
 * Returns true if the user has requested reduced motion in their system settings.
 * Defaults to false during SSR for optimal initial render.
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if the media query is supported
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set the initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
