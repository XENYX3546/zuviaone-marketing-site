'use client';

import { useEffect, useRef } from 'react';
import { AnimatedSection } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { WidgetsSection as WidgetsData } from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type Props = {
  data: WidgetsData;
  themeClasses: ThemeClasses;
  profileId: string;
};

const API_BASE_URL = 'https://app.zuviaone.com/api/public/pages';

function WidgetEmbed({
  embedId,
  profileId,
}: {
  embedId: string;
  profileId: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Load embed script once
    if (!scriptLoaded.current) {
      const existing = document.querySelector(
        'script[src="https://app.zuviaone.com/embed.js"]'
      );
      if (!existing) {
        const script = document.createElement('script');
        script.src = 'https://app.zuviaone.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
      scriptLoaded.current = true;
    }

    // Track widget open interaction
    fetch(
      `${API_BASE_URL}/${encodeURIComponent(profileId)}/interaction`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'widget_open' }),
      }
    ).catch(() => {});
  }, [embedId, profileId]);

  return (
    <div ref={containerRef}>
      <div data-zuvia-embed-id={embedId} />
    </div>
  );
}

export function WidgetsSection({ data, themeClasses, profileId }: Props) {
  if (data.widgets.length === 0) {return null;}

  return (
    <section
      id="widgets"
      className={cn(themeClasses.sectionSpacing, themeClasses.sectionDivider)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {data.heading && (
          <AnimatedSection>
            <h2
              className={cn(
                'text-3xl md:text-4xl mb-8',
                themeClasses.headingStyle
              )}
              style={{
                fontFamily: 'var(--profile-heading-font), sans-serif',
              }}
            >
              {data.heading}
            </h2>
          </AnimatedSection>
        )}

        <div className="space-y-8">
          {data.widgets.map((widget) => (
            <AnimatedSection key={widget.embedId}>
              {widget.heading && (
                <h3
                  className={cn(
                    'text-xl mb-4',
                    themeClasses.headingStyle
                  )}
                  style={{
                    fontFamily:
                      'var(--profile-heading-font), sans-serif',
                  }}
                >
                  {widget.heading}
                </h3>
              )}
              <WidgetEmbed
                embedId={widget.embedId}
                profileId={profileId}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
