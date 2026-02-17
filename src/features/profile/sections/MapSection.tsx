'use client';

import { AnimatedSection } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { MapSection as MapData } from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type Props = {
  data: MapData;
  themeClasses: ThemeClasses;
};

export function MapSection({ data, themeClasses }: Props) {
  // Don't render if no coordinates
  if (data.latitude == null || data.longitude == null) {return null;}

  const zoom = data.zoom ?? 15;

  // Calculate bounding box based on zoom level
  const delta = 0.01 * (16 / zoom);
  const bbox = [
    data.longitude - delta,
    data.latitude - delta,
    data.longitude + delta,
    data.latitude + delta,
  ].join(',');

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${data.latitude},${data.longitude}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${data.latitude},${data.longitude}`;

  return (
    <section
      id="map"
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

        <AnimatedSection>
          <iframe
            title="Business location"
            src={mapUrl}
            className="w-full h-80 md:h-96 border-0"
            style={{ borderRadius: 'var(--profile-radius)' }}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </AnimatedSection>

        {data.showDirections && (
          <AnimatedSection delay={0.1}>
            <div className="mt-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                style={{ color: 'var(--profile-primary)' }}
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                Get Directions
              </a>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
