'use client';

import { Icon } from '@/components/ui';
import { siteConfig } from '@/lib/constants';

type BlogShareButtonsProps = {
  title: string;
  slug: string;
  variant?: 'horizontal' | 'vertical';
};

export function BlogShareButtons({ title, slug, variant = 'horizontal' }: BlogShareButtonsProps) {
  const url = `${siteConfig.url}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: 'twitter' as const,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin' as const,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    },
    {
      name: 'Facebook',
      icon: 'facebook' as const,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // Could add toast notification here
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  };

  return (
    <div
      className={`flex items-center gap-2 ${
        variant === 'vertical' ? 'flex-col' : 'flex-row'
      }`}
    >
      <span className="text-sm text-neutral-500 mr-1">Share:</span>

      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all ${link.color}`}
          aria-label={`Share on ${link.name}`}
        >
          <Icon name={link.icon} size={18} />
        </a>
      ))}

      <button
        onClick={handleCopyLink}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 transition-all"
        aria-label="Copy link"
      >
        <Icon name="link" size={18} />
      </button>
    </div>
  );
}
