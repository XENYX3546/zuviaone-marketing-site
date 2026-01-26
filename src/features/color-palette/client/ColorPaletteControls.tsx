'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { Icon } from '@/components/ui';
import { cn } from '@/lib/utils';

type ColorPaletteControlsProps = {
  onRegenerate: () => void;
  onExport: () => void;
  onShare: () => void;
  isRegenerating: boolean;
  baseColor?: string;
  onBaseColorChange?: (color: string) => void;
};

export function ColorPaletteControls({
  onRegenerate,
  onExport,
  onShare,
  isRegenerating,
  baseColor,
  onBaseColorChange,
}: ColorPaletteControlsProps) {
  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShareSuccess(true);
    onShare();
    setTimeout(() => setShareSuccess(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-neutral-200 px-3 py-2">
        {/* Base Color Picker */}
        {onBaseColorChange && (
          <div className="relative flex items-center">
            <label className="sr-only" htmlFor="base-color-picker">
              Choose base color
            </label>
            <input
              id="base-color-picker"
              type="color"
              value={`#${baseColor || '3B82F6'}`}
              onChange={(e) => onBaseColorChange(e.target.value)}
              className="w-9 h-9 rounded-full cursor-pointer border-2 border-neutral-200 hover:border-neutral-300 transition-colors"
              style={{ padding: 0 }}
            />
          </div>
        )}

        {/* Regenerate Button */}
        <Button
          onClick={onRegenerate}
          disabled={isRegenerating}
          variant="primary"
          className="rounded-full gap-2"
        >
          {isRegenerating ? (
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </motion.svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 4v6h-6" />
              <path d="M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          )}
          <span className="hidden sm:inline">Generate</span>
        </Button>

        {/* Spacebar hint - desktop only */}
        <span className="hidden lg:flex items-center text-xs text-neutral-400 px-1">
          <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono border border-neutral-200">
            Space
          </kbd>
        </span>

        {/* Export Button */}
        <Button
          onClick={onExport}
          variant="outline"
          className="rounded-full gap-2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className="hidden sm:inline">Export</span>
        </Button>

        {/* Share Button */}
        <Button
          onClick={handleShare}
          variant="ghost"
          className={cn(
            'rounded-full px-3',
            shareSuccess && 'text-green-600'
          )}
          aria-label="Copy link to clipboard"
        >
          {shareSuccess ? (
            <Icon name="check" size={16} />
          ) : (
            <Icon name="share" size={16} />
          )}
        </Button>
      </div>
    </motion.div>
  );
}
