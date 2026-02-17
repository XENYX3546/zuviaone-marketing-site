'use client';

import type { BusinessInfo, ProfileConfig } from '@/lib/profiles/types';

type ProfileFooterProps = {
  business: BusinessInfo;
  profile: ProfileConfig;
};

export function ProfileFooter({ business, profile }: ProfileFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <p>
            &copy; {currentYear} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social links in footer for mobile */}
            <div className="flex sm:hidden items-center gap-3">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity capitalize text-xs"
                >
                  {link.platform}
                </a>
              ))}
            </div>
            <a
              href="https://zuviaone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              Powered by ZuviaOne
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
