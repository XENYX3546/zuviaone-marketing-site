// Design System Constants - Centralized design tokens for consistency

export const colors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  },
} as const;

export const typography = {
  sizes: {
    sm: 'text-sm',      // 14px - small text, labels
    base: 'text-base',  // 16px - body text
    lg: 'text-lg',      // 18px - large body, subheadings
    xl: 'text-xl md:text-2xl lg:text-3xl', // Responsive headings
  },
  weights: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
} as const;

export const spacing = {
  section: 'py-16 md:py-24 lg:py-32',
  sectionCompact: 'py-12 md:py-16 lg:py-20',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
} as const;

export const transitions = {
  base: 'transition-all duration-200 ease-out',
  slow: 'transition-all duration-300 ease-out',
  spring: 'transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
} as const;

export const shadows = {
  sm: 'shadow-sm',
  base: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  glow: 'shadow-lg shadow-primary-500/20',
} as const;
