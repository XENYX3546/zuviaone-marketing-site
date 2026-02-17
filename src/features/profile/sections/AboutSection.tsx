'use client';

import { AnimatedSection } from '@/components/ui';
import { sanitizeHtml } from '@/lib/profiles/utils';
import { cn } from '@/lib/utils';
import type { AboutSection as AboutData } from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type Props = {
  data: AboutData;
  themeClasses: ThemeClasses;
};

const HIGHLIGHT_ICONS: Record<string, string> = {
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  users:
    'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  check:
    'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3',
  clock:
    'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2',
  award:
    'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  heart:
    'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  'map-pin':
    'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  shield:
    'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
};

function HighlightIcon({ icon, size = 20 }: { icon: string; size?: number }) {
  const path = HIGHLIGHT_ICONS[icon];
  if (!path) {return null;}

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--profile-accent, currentColor)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
      aria-hidden
    >
      <path d={path} />
    </svg>
  );
}

export function AboutSection({ data, themeClasses }: Props) {
  return (
    <section
      id="about"
      className={cn(themeClasses.sectionSpacing, themeClasses.sectionDivider)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {data.heading && (
          <AnimatedSection>
            <h2
              className={cn('text-3xl md:text-4xl mb-8', themeClasses.headingStyle)}
              style={{ fontFamily: 'var(--profile-heading-font), sans-serif' }}
            >
              {data.heading}
            </h2>
          </AnimatedSection>
        )}

        {data.content && (
          <AnimatedSection>
            <div
              className="prose prose-lg max-w-none"
              // eslint-disable-next-line react/no-danger -- Sanitized HTML from API
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.content) }}
            />
          </AnimatedSection>
        )}

        {data.highlights.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="text-center"
                >
                  {highlight.icon && (
                    <div className="flex justify-center mb-2">
                      <HighlightIcon icon={highlight.icon} size={24} />
                    </div>
                  )}
                  <p
                    className="text-3xl font-bold"
                    style={{ color: 'var(--profile-primary)' }}
                  >
                    {highlight.value}
                  </p>
                  <p className="text-sm opacity-60 mt-1">{highlight.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
