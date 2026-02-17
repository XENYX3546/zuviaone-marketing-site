'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { fadeInUp } from '@/lib/utils/animations';
import type { HeroSection as HeroData } from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type Props = {
  data: HeroData;
  themeClasses: ThemeClasses;
};

export function HeroSection({ data, themeClasses }: Props) {
  const hasImages = data.images.length > 0;
  const primaryImage = data.images[0];

  if (!hasImages && !data.overlayText) {return null;}

  return (
    <section
      className={cn(
        'relative overflow-hidden flex items-center',
        themeClasses.heroMinHeight
      )}
    >
      {/* Background image */}
      {hasImages && primaryImage && (
        <div className="absolute inset-0">
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt ?? ''}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div
            className={cn('absolute inset-0', themeClasses.heroOverlay)}
            style={{
              opacity:
                data.overlayOpacity != null ? data.overlayOpacity : 0.5,
            }}
          />
        </div>
      )}

      {/* Fallback gradient background when no image */}
      {!hasImages && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, var(--profile-primary), var(--profile-secondary))`,
          }}
        />
      )}

      {/* Overlay text */}
      {data.overlayText && (
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl max-w-4xl',
              themeClasses.headingStyle,
              'text-white'
            )}
            style={{
              fontFamily: 'var(--profile-heading-font), sans-serif',
            }}
          >
            {data.overlayText}
          </motion.h1>
        </div>
      )}

      {/* Mosaic layout: show multiple images */}
      {data.layout === 'mosaic' && data.images.length > 1 && (
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-40">
          {data.images.slice(0, 6).map((img, i) => (
            <div key={i} className="relative">
              <Image
                src={img.url}
                alt={img.alt ?? ''}
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
