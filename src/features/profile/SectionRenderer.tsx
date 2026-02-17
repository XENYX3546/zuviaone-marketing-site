'use client';

import { cn } from '@/lib/utils';
import { ProfileCTA } from './ProfileCTA';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  GallerySection,
  HoursSection,
  ContactSection,
  MapSection,
  ReviewsSection,
  TeamSection,
  WidgetsSection,
} from './sections';
import type {
  BusinessInfo,
  ProfileConfig,
  ProfileSections,
} from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type SectionRendererProps = {
  business: BusinessInfo;
  profile: ProfileConfig;
  sections: ProfileSections;
  themeClasses: ThemeClasses;
};

export function SectionRenderer({
  business,
  profile,
  sections,
  themeClasses,
}: SectionRendererProps) {
  return (
    <>
      {profile.sectionsOrder.map((sectionKey) => {
        // CTA is special — data lives at profile.ctaConfig, not in sections
        if (sectionKey === 'cta') {
          if (!profile.ctaConfig.enabled) {return null;}
          return (
            <div
              key="cta"
              className={cn(themeClasses.sectionSpacing, 'text-center')}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ProfileCTA
                  config={profile.ctaConfig}
                  profileId={profile.id}
                  variant="inline"
                />
              </div>
            </div>
          );
        }

        const sectionData = sections[sectionKey as keyof ProfileSections];
        if (sectionData == null) {return null;}

        switch (sectionKey) {
          case 'hero':
            return (
              <HeroSection
                key={sectionKey}
                data={sections.hero!}
                themeClasses={themeClasses}
              />
            );
          case 'about':
            return (
              <AboutSection
                key={sectionKey}
                data={sections.about!}
                themeClasses={themeClasses}
              />
            );
          case 'services':
            return (
              <ServicesSection
                key={sectionKey}
                data={sections.services!}
                themeClasses={themeClasses}
                business={business}
              />
            );
          case 'gallery':
            return (
              <GallerySection
                key={sectionKey}
                data={sections.gallery!}
                themeClasses={themeClasses}
              />
            );
          case 'hours':
            return (
              <HoursSection
                key={sectionKey}
                data={sections.hours!}
                themeClasses={themeClasses}
                business={business}
              />
            );
          case 'contact':
            return (
              <ContactSection
                key={sectionKey}
                data={sections.contact!}
                themeClasses={themeClasses}
              />
            );
          case 'map':
            return (
              <MapSection
                key={sectionKey}
                data={sections.map!}
                themeClasses={themeClasses}
              />
            );
          case 'reviews':
            return (
              <ReviewsSection
                key={sectionKey}
                data={sections.reviews!}
                themeClasses={themeClasses}
              />
            );
          case 'team':
            return (
              <TeamSection
                key={sectionKey}
                data={sections.team!}
                themeClasses={themeClasses}
              />
            );
          case 'widgets':
            return (
              <WidgetsSection
                key={sectionKey}
                data={sections.widgets!}
                themeClasses={themeClasses}
                profileId={profile.id}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
