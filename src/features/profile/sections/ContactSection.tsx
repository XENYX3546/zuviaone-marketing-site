'use client';

import { useEffect, useRef } from 'react';
import { AnimatedSection } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { ContactSection as ContactData } from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type Props = {
  data: ContactData;
  themeClasses: ThemeClasses;
};

function formatAddress(address: ContactData['address']): string | null {
  if (!address) {return null;}
  const parts = [
    address.line1,
    address.line2,
    address.city,
    address.state,
    address.postalCode,
  ].filter(Boolean);
  return parts.length > 0 ? parts.join(', ') : null;
}

function ContactWidget({ widgetId }: { widgetId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.zuviaone.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div data-zuvia-embed-id={widgetId} />
    </div>
  );
}

export function ContactSection({ data, themeClasses }: Props) {
  const hasContactInfo = data.phone || data.email || data.website || data.address;

  if (!hasContactInfo && !data.contactFormWidgetId) {return null;}

  const formattedAddress = formatAddress(data.address);

  return (
    <section
      id="contact"
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

        <div
          className={cn(
            data.contactFormWidgetId
              ? 'lg:grid lg:grid-cols-2 lg:gap-12'
              : ''
          )}
        >
          {/* Contact details */}
          {hasContactInfo && (
            <AnimatedSection>
              <div className="space-y-4">
                {data.phone && (
                  <div className="flex items-center gap-3">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--profile-primary, currentColor)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a
                      href={`tel:${data.phone}`}
                      className="hover:underline"
                    >
                      {data.phone}
                    </a>
                  </div>
                )}

                {data.email && (
                  <div className="flex items-center gap-3">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--profile-primary, currentColor)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />
                    </svg>
                    <a
                      href={`mailto:${data.email}`}
                      className="hover:underline"
                    >
                      {data.email}
                    </a>
                  </div>
                )}

                {data.website && (
                  <div className="flex items-center gap-3">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--profile-primary, currentColor)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20" />
                    </svg>
                    <a
                      href={data.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {data.website.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                )}

                {formattedAddress && (
                  <div className="flex items-start gap-3">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--profile-primary, currentColor)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 mt-0.5"
                      aria-hidden
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <span>{formattedAddress}</span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          )}

          {/* Contact form widget */}
          {data.contactFormWidgetId && (
            <AnimatedSection delay={0.2}>
              <ContactWidget widgetId={data.contactFormWidgetId} />
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
}
