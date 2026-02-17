'use client';

import { AnimatedSection } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { ReviewsSection as ReviewsData } from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type Props = {
  data: ReviewsData;
  themeClasses: ThemeClasses;
};

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div
      className="flex gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={
            star <= rating
              ? 'var(--profile-accent, #f59e0b)'
              : 'none'
          }
          stroke={
            star <= rating
              ? 'var(--profile-accent, #f59e0b)'
              : 'currentColor'
          }
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={star > rating ? 'opacity-30' : ''}
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const PLATFORM_ICONS: Record<string, string> = {
  google:
    'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
  trustpilot:
    'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
};

export function ReviewsSection({ data, themeClasses }: Props) {
  if (data.testimonials.length === 0 && data.platformLinks.length === 0) {
    return null;
  }

  return (
    <section
      id="reviews"
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

        {/* Platform links */}
        {data.platformLinks.length > 0 && (
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 mb-8">
              {data.platformLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors',
                    themeClasses.cardStyle
                  )}
                >
                  {link.platform && PLATFORM_ICONS[link.platform] && (
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden
                    >
                      <path d={PLATFORM_ICONS[link.platform]} />
                    </svg>
                  )}
                  {link.name}
                </a>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Testimonials */}
        {data.testimonials.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.id} delay={i * 0.1}>
                <div className={cn(themeClasses.cardStyle, 'p-6 h-full flex flex-col')}>
                  {testimonial.rating != null && (
                    <StarRating rating={testimonial.rating} />
                  )}
                  <p className="mt-3 leading-relaxed flex-1">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm opacity-60">
                    <span className="font-medium">{testimonial.name}</span>
                    {testimonial.date != null && (
                      <time dateTime={testimonial.date}>
                        {new Date(testimonial.date).toLocaleDateString()}
                      </time>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
