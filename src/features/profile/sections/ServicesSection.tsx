'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/components/ui';
import { formatPrice, formatDuration } from '@/lib/profiles/utils';
import { cn } from '@/lib/utils';
import type {
  ServicesSection as ServicesData,
  BusinessInfo,
} from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type Props = {
  data: ServicesData;
  themeClasses: ThemeClasses;
  business: BusinessInfo;
};

export function ServicesSection({ data, themeClasses, business }: Props) {
  if (data.groups.length === 0) {return null;}

  return (
    <section
      id="services"
      className={cn(themeClasses.sectionSpacing, themeClasses.sectionDivider)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {data.heading && (
          <AnimatedSection>
            <h2
              className={cn(
                'text-3xl md:text-4xl mb-12',
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

        {data.groups.map((group) => (
          <div key={group.id} className="mb-12 last:mb-0">
            <AnimatedSection>
              <div className="flex items-start gap-4 mb-6">
                {group.imageUrl && (
                  <Image
                    src={group.imageUrl}
                    alt={group.title}
                    width={64}
                    height={64}
                    className="rounded-lg object-cover flex-shrink-0"
                  />
                )}
                <div>
                  <h3
                    className={cn(
                      'text-2xl',
                      themeClasses.headingStyle
                    )}
                    style={{
                      fontFamily:
                        'var(--profile-heading-font), sans-serif',
                    }}
                  >
                    {group.title}
                  </h3>
                  {group.description && (
                    <p className="mt-1 opacity-60">{group.description}</p>
                  )}
                </div>
              </div>
            </AnimatedSection>

            {data.layout === 'grid' ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item, i) => (
                  <AnimatedSection key={item.id} delay={i * 0.05}>
                    <div
                      className={cn(
                        themeClasses.cardStyle,
                        'p-5 h-full flex flex-col'
                      )}
                    >
                      <h4 className="font-semibold mb-1">{item.name}</h4>
                      {item.description && (
                        <p className="text-sm opacity-60 mb-3 flex-1">
                          {item.description}
                        </p>
                      )}
                      <div className="flex items-center gap-3 mt-auto pt-2">
                        {data.showPricing && (
                          <span
                            className="text-lg font-bold"
                            style={{ color: 'var(--profile-primary)' }}
                          >
                            {item.priceCents != null
                              ? formatPrice(
                                  item.priceCents,
                                  business.currency
                                )
                              : 'Price on request'}
                          </span>
                        )}
                        {data.showDuration && item.durationMinutes != null && (
                          <span className="text-sm opacity-50">
                            {formatDuration(item.durationMinutes)}
                          </span>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {group.items.map((item, i) => (
                  <AnimatedSection key={item.id} delay={i * 0.05}>
                    <div
                      className={cn(
                        themeClasses.cardStyle,
                        'p-4 flex items-center justify-between gap-4'
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        {item.description && (
                          <p className="text-sm opacity-60 mt-0.5 truncate">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {data.showDuration && item.durationMinutes != null && (
                          <span className="text-sm opacity-50">
                            {formatDuration(item.durationMinutes)}
                          </span>
                        )}
                        {data.showPricing && (
                          <span
                            className="text-lg font-bold whitespace-nowrap"
                            style={{ color: 'var(--profile-primary)' }}
                          >
                            {item.priceCents != null
                              ? formatPrice(
                                  item.priceCents,
                                  business.currency
                                )
                              : 'Price on request'}
                          </span>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
