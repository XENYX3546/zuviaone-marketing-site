'use client';

import { useEffect } from 'react';
import { ProfileCTA } from './ProfileCTA';
import { ProfileFooter } from './ProfileFooter';
import { ProfileHeader } from './ProfileHeader';
import { SectionRenderer } from './SectionRenderer';
import type {
  BusinessInfo,
  ProfileConfig,
  ProfileSections,
} from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

const API_BASE_URL = 'https://app.zuviaone.com/api/public/pages';

type ProfilePageProps = {
  business: BusinessInfo;
  profile: ProfileConfig;
  sections: ProfileSections;
  themeClasses: ThemeClasses;
};

export function ProfilePage({
  business,
  profile,
  sections,
  themeClasses,
}: ProfilePageProps) {
  // Fire-and-forget view tracking
  useEffect(() => {
    fetch(
      `${API_BASE_URL}/${encodeURIComponent(profile.id)}/view`,
      { method: 'POST' }
    ).catch(() => {});
  }, [profile.id]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to content */}
      <a
        href="#profile-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>

      <ProfileHeader
        business={business}
        profile={profile}
        themeClasses={themeClasses}
      />

      <main id="profile-content" className="flex-1">
        <SectionRenderer
          business={business}
          profile={profile}
          sections={sections}
          themeClasses={themeClasses}
        />
      </main>

      <ProfileFooter business={business} profile={profile} />

      {/* Floating CTA */}
      {profile.ctaConfig.enabled &&
        (profile.ctaConfig.position === 'bottom' ||
          profile.ctaConfig.position === 'both') && (
          <ProfileCTA
            config={profile.ctaConfig}
            profileId={profile.id}
            variant="floating"
          />
        )}
    </div>
  );
}
