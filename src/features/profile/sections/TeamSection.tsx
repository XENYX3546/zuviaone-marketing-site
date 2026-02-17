'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { TeamSection as TeamData } from '@/lib/profiles/types';
import type { ThemeClasses } from '@/lib/profiles/utils';

type Props = {
  data: TeamData;
  themeClasses: ThemeClasses;
};

export function TeamSection({ data, themeClasses }: Props) {
  if (data.members.length === 0) {return null;}

  return (
    <section
      id="team"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.members.map((member, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="text-center">
                {member.photoUrl ? (
                  <Image
                    src={member.photoUrl}
                    alt={member.name ?? 'Team member'}
                    width={200}
                    height={200}
                    className="w-32 h-32 mx-auto object-cover rounded-full mb-4"
                  />
                ) : (
                  <div className="w-32 h-32 mx-auto rounded-full mb-4 bg-black/5 flex items-center justify-center">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="opacity-30"
                      aria-hidden
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    </svg>
                  </div>
                )}
                {member.name && (
                  <h3
                    className="font-semibold"
                    style={{
                      fontFamily:
                        'var(--profile-heading-font), sans-serif',
                    }}
                  >
                    {member.name}
                  </h3>
                )}
                {member.jobTitle && (
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: 'var(--profile-primary)' }}
                  >
                    {member.jobTitle}
                  </p>
                )}
                {member.bio && (
                  <p className="text-sm opacity-60 mt-2 line-clamp-3">
                    {member.bio}
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
