'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui';
import { Icon } from '@/components/ui';
import { cn } from '@/lib/utils';

type ExportFormat = 'css' | 'scss' | 'json' | 'png' | 'svg';

type ColorExportModalProps = {
  isOpen: boolean;
  onClose: () => void;
  colors: string[];
  harmony: string;
};

const exportFormats: { id: ExportFormat; label: string; description: string }[] = [
  { id: 'css', label: 'CSS Variables', description: ':root { --color-1: #FF5733; }' },
  { id: 'scss', label: 'SCSS Variables', description: '$color-1: #FF5733;' },
  { id: 'json', label: 'JSON', description: '{ "colors": ["#FF5733", ...] }' },
  { id: 'png', label: 'PNG Image', description: 'Download palette as image' },
  { id: 'svg', label: 'SVG', description: 'Scalable vector graphic' },
];

function generateCSS(colors: string[], format: 'css' | 'scss'): string {
  const prefix = format === 'scss' ? '$' : '--';
  const lines = colors.map((color, i) => `${prefix}color-${i + 1}: ${color};`);

  if (format === 'css') {
    return `:root {\n  ${lines.join('\n  ')}\n}`;
  }
  return lines.join('\n');
}

function generateJSON(colors: string[], harmony: string): string {
  return JSON.stringify(
    {
      harmony,
      colors: colors.map((hex) => ({
        hex,
        rgb: hexToRgb(hex),
      })),
    },
    null,
    2
  );
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleanHex = hex.replace('#', '');
  return {
    r: parseInt(cleanHex.substring(0, 2), 16),
    g: parseInt(cleanHex.substring(2, 4), 16),
    b: parseInt(cleanHex.substring(4, 6), 16),
  };
}

function getContrastColor(hex: string): string {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

async function generateImage(
  colors: string[],
  format: 'png' | 'svg',
  harmony: string
): Promise<void> {
  const width = 1200;
  const height = 400;
  const swatchWidth = width / colors.length;

  if (format === 'svg') {
    const rects = colors
      .map(
        (color, i) =>
          `<rect x="${i * swatchWidth}" y="0" width="${swatchWidth}" height="${height}" fill="${color}"/>`
      )
      .join('\n    ');

    const texts = colors
      .map((color, i) => {
        const contrast = getContrastColor(color);
        const x = i * swatchWidth + swatchWidth / 2;
        return `<text x="${x}" y="${height / 2}" fill="${contrast}" font-family="monospace" font-size="24" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${color.toUpperCase()}</text>`;
      })
      .join('\n    ');

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    ${rects}
    ${texts}
</svg>`;

    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `palette-${harmony}.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
    return;
  }

  // PNG generation
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  colors.forEach((color, i) => {
    ctx.fillStyle = color;
    ctx.fillRect(i * swatchWidth, 0, swatchWidth, height);

    // Add hex code text
    ctx.fillStyle = getContrastColor(color);
    ctx.font = 'bold 24px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(color.toUpperCase(), i * swatchWidth + swatchWidth / 2, height / 2);
  });

  const link = document.createElement('a');
  link.download = `palette-${harmony}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

export function ColorExportModal({
  isOpen,
  onClose,
  colors,
  harmony,
}: ColorExportModalProps) {
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('css');
  const [copied, setCopied] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleExport = useCallback(async () => {
    switch (selectedFormat) {
      case 'css':
      case 'scss': {
        const code = generateCSS(colors, selectedFormat);
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      }
      case 'json': {
        const json = generateJSON(colors, harmony);
        await navigator.clipboard.writeText(json);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      }
      case 'png':
      case 'svg':
        await generateImage(colors, selectedFormat, harmony);
        break;
    }
  }, [selectedFormat, colors, harmony]);

  const isDownload = selectedFormat === 'png' || selectedFormat === 'svg';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="export-modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-100">
              <h2
                id="export-modal-title"
                className="text-xl font-semibold text-neutral-900"
              >
                Export Palette
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors"
                aria-label="Close modal"
              >
                <Icon name="x" size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Preview */}
              <div className="flex h-12 rounded-lg overflow-hidden mb-6">
                {colors.map((color, i) => (
                  <div
                    key={i}
                    className="flex-1"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Format selection */}
              <div className="space-y-2">
                {exportFormats.map((format) => (
                  <button
                    key={format.id}
                    onClick={() => setSelectedFormat(format.id)}
                    className={cn(
                      'w-full p-3 rounded-lg border text-left transition-colors',
                      selectedFormat === format.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                    )}
                  >
                    <span className="font-medium text-neutral-900">
                      {format.label}
                    </span>
                    <span className="block text-sm text-neutral-500 font-mono mt-0.5">
                      {format.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 p-6 border-t border-neutral-100">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button onClick={handleExport} className="flex-1">
                {copied
                  ? 'Copied!'
                  : isDownload
                    ? 'Download'
                    : 'Copy to Clipboard'}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
