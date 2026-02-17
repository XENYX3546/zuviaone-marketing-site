'use client';

import { cn } from '@/lib/utils';
import type { CTAConfig } from '@/lib/profiles/types';

const API_BASE_URL = 'https://app.zuviaone.com/api/public/pages';

type ProfileCTAProps = {
  config: CTAConfig;
  profileId: string;
  variant?: 'inline' | 'floating' | 'header';
};

export function ProfileCTA({ config, profileId, variant = 'inline' }: ProfileCTAProps) {
  if (!config.enabled) {return null;}

  const handleClick = () => {
    fetch(`${API_BASE_URL}/${encodeURIComponent(profileId)}/interaction`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'cta_click' }),
    }).catch(() => {});
  };

  const text = config.text ?? 'Contact Us';
  const {url} = config;
  const {widgetId} = config;

  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-200';

  const styleMap: Record<CTAConfig['style'], string> = {
    outline: 'bg-transparent border-2',
    secondary: 'opacity-90 hover:opacity-100',
    primary: 'text-white shadow-sm hover:shadow-md',
  };
  const styleClasses = styleMap[config.style];

  const sizeClasses =
    variant === 'header'
      ? 'px-4 py-2 text-sm'
      : 'px-8 py-3 text-base';

  const ctaStyleMap: Record<CTAConfig['style'], React.CSSProperties> = {
    primary: { backgroundColor: 'var(--profile-primary)' },
    outline: {
      borderColor: 'var(--profile-primary)',
      color: 'var(--profile-primary)',
    },
    secondary: {
      backgroundColor: 'var(--profile-secondary)',
      color: 'white',
    },
  };

  const ctaStyle: React.CSSProperties = {
    borderRadius: 'var(--profile-radius)',
    ...ctaStyleMap[config.style],
  };

  // If there's a widgetId, scroll to the widget section
  if (widgetId && !url) {
    return (
      <CtaWrapper variant={variant}>
        <button
          onClick={() => {
            handleClick();
            const el = document.querySelector(
              `[data-zuvia-embed-id="${widgetId}"]`
            );
            el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
          className={cn(baseClasses, styleClasses, sizeClasses)}
          style={ctaStyle}
        >
          {text}
        </button>
      </CtaWrapper>
    );
  }

  return (
    <CtaWrapper variant={variant}>
      <a
        href={url ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(baseClasses, styleClasses, sizeClasses)}
        style={ctaStyle}
      >
        {text}
      </a>
    </CtaWrapper>
  );
}

function CtaWrapper({
  variant,
  children,
}: {
  variant: 'inline' | 'floating' | 'header';
  children: React.ReactNode;
}) {
  if (variant === 'floating') {
    return (
      <div className="fixed bottom-6 right-6 z-40 shadow-xl rounded-full">
        {children}
      </div>
    );
  }
  return <>{children}</>;
}
