'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ProfileCTA } from './ProfileCTA';
import type { BusinessInfo, ProfileConfig } from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type ProfileHeaderProps = {
  business: BusinessInfo;
  profile: ProfileConfig;
  themeClasses: ThemeClasses;
};

const SOCIAL_ICONS: Record<string, string> = {
  facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  instagram:
    'M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM17.5 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
  twitter:
    'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  linkedin:
    'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  youtube:
    'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z',
  tiktok:
    'M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5',
  google:
    'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
  yelp: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
};

function SocialIcon({ platform, size = 18 }: { platform: string; size?: number }) {
  const path = SOCIAL_ICONS[platform.toLowerCase()];
  if (!path) {
    // Fallback: globe icon
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

export function ProfileHeader({ business, profile, themeClasses }: ProfileHeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b border-black/5"
      style={{ backgroundColor: 'color-mix(in srgb, var(--profile-bg, white) 90%, transparent)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <div className="flex items-center gap-3 min-w-0">
            {business.logoUrl && (
              <Image
                src={business.logoUrl}
                alt={`${business.name} logo`}
                width={36}
                height={36}
                className="object-contain flex-shrink-0"
                style={{ borderRadius: 'var(--profile-radius)' }}
              />
            )}
            <span
              className={cn(
                'text-lg truncate',
                themeClasses.headingStyle
              )}
              style={{ fontFamily: 'var(--profile-heading-font), sans-serif' }}
            >
              {business.name}
            </span>
          </div>

          {/* Social links + CTA */}
          <div className="flex items-center gap-2">
            {profile.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex p-2 opacity-60 hover:opacity-100 transition-opacity"
                aria-label={`Visit us on ${link.platform}`}
              >
                <SocialIcon platform={link.platform} />
              </a>
            ))}

            {(profile.ctaConfig.position === 'top' ||
              profile.ctaConfig.position === 'both') && (
              <ProfileCTA
                config={profile.ctaConfig}
                profileId={profile.id}
                variant="header"
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
