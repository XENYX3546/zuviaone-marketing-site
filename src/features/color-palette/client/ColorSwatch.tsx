'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui';

type ColorSwatchProps = {
  hex: string;
  index: number;
  isLocked: boolean;
  onLockToggle: () => void;
};

function getContrastColor(hex: string): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
}

export function ColorSwatch({
  hex,
  index,
  isLocked,
  onLockToggle,
}: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const contrastColor = getContrastColor(hex);

  const handleCopy = useCallback(async () => {
    await copyToClipboard(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [hex]);

  return (
    <motion.div
      className="relative w-full h-full min-h-[120px] md:min-h-0 flex flex-col items-center justify-center cursor-pointer group"
      style={{ backgroundColor: hex }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCopy}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      {/* Lock indicator - top right */}
      {isLocked && (
        <div
          className="absolute top-4 right-4 opacity-60"
          style={{ color: contrastColor }}
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
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      )}

      {/* Hex code - always visible */}
      <motion.button
        className={cn(
          'text-lg md:text-2xl font-mono font-semibold tracking-wider uppercase',
          'transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-2 py-1',
          isHovered && 'scale-105'
        )}
        style={{
          color: contrastColor,
          // @ts-expect-error CSS custom property
          '--tw-ring-color': contrastColor,
        }}
        aria-label={`Copy ${hex}`}
      >
        {copied ? 'Copied!' : hex.replace('#', '').toUpperCase()}
      </motion.button>

      {/* Controls - visible on hover */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-4 flex items-center gap-2"
      >
        {/* Lock button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLockToggle();
          }}
          className={cn(
            'p-2 rounded-lg transition-colors focus:outline-none focus:ring-2',
            isLocked
              ? 'bg-black/20 hover:bg-black/30'
              : 'bg-white/20 hover:bg-white/30'
          )}
          style={{ color: contrastColor }}
          aria-label={isLocked ? 'Unlock color' : 'Lock color'}
        >
          {isLocked ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 9.9-1" />
            </svg>
          )}
        </button>

        {/* Copy button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
          className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2"
          style={{ color: contrastColor }}
          aria-label="Copy hex code"
        >
          <Icon name="clipboard" size={18} />
        </button>
      </motion.div>

      {/* Keyboard shortcut hint */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        className="absolute top-4 left-4 text-xs font-mono"
        style={{ color: contrastColor }}
      >
        {index + 1}
      </motion.span>
    </motion.div>
  );
}
