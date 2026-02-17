'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatedSection } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { GallerySection as GalleryData } from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type Props = {
  data: GalleryData;
  themeClasses: ThemeClasses;
};

export function GallerySection({ data, themeClasses }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (data.images.length === 0) {return null;}

  const gridClasses =
    data.layout === 'masonry'
      ? 'columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'
      : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';

  return (
    <section
      id="gallery"
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

        {data.layout === 'carousel' ? (
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
            {data.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="flex-shrink-0 snap-center cursor-pointer"
              >
                <Image
                  src={img.url}
                  alt={img.alt ?? ''}
                  width={img.width ?? 400}
                  height={img.height ?? 300}
                  className="h-64 md:h-80 w-auto object-cover"
                  style={{ borderRadius: 'var(--profile-radius)' }}
                />
              </button>
            ))}
          </div>
        ) : (
          <div className={gridClasses}>
            {data.images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className={cn(
                    'overflow-hidden cursor-pointer w-full group',
                    data.layout === 'masonry' ? 'break-inside-avoid' : ''
                  )}
                  style={{ borderRadius: 'var(--profile-radius)' }}
                >
                  <Image
                    src={img.url}
                    alt={img.alt ?? ''}
                    width={img.width ?? 400}
                    height={img.height ?? 300}
                    className={cn(
                      'w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105',
                      data.layout !== 'masonry' && 'aspect-square'
                    )}
                  />
                </button>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex != null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {setLightboxIndex(null);}
            if (e.key === 'ArrowRight')
              {setLightboxIndex((prev) =>
                prev != null ? (prev + 1) % data.images.length : 0
              );}
            if (e.key === 'ArrowLeft')
              {setLightboxIndex((prev) =>
                prev != null
                  ? (prev - 1 + data.images.length) % data.images.length
                  : 0
              );}
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <svg
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Nav arrows */}
          {data.images.length > 1 && (
            <>
              <button
                className="absolute left-4 text-white/80 hover:text-white p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (prev) =>
                      prev != null
                        ? (prev - 1 + data.images.length) %
                          data.images.length
                        : 0
                  );
                }}
                aria-label="Previous image"
              >
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="absolute right-4 text-white/80 hover:text-white p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(
                    (prev) =>
                      prev != null
                        ? (prev + 1) % data.images.length
                        : 0
                  );
                }}
                aria-label="Next image"
              >
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <Image
            src={data.images[lightboxIndex].url}
            alt={data.images[lightboxIndex].alt ?? ''}
            width={data.images[lightboxIndex].width ?? 1200}
            height={data.images[lightboxIndex].height ?? 800}
            className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {data.images[lightboxIndex].alt && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {data.images[lightboxIndex].alt}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
