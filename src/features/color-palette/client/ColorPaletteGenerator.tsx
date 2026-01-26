'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ColorSwatchBar } from './ColorSwatchBar';
import { ColorPaletteControls } from './ColorPaletteControls';
import { ColorExportModal } from './ColorExportModal';
import type { ColorHarmonyType } from '@/lib/color-palette';

type ColorPaletteGeneratorProps = {
  initialColors: string[];
  harmony: ColorHarmonyType;
  baseColor?: string;
  showBaseColorPicker?: boolean;
};

export function ColorPaletteGenerator({
  initialColors,
  harmony,
  baseColor,
  showBaseColorPicker = false,
}: ColorPaletteGeneratorProps) {
  const router = useRouter();
  const [colors, setColors] = useState<string[]>(initialColors);
  const [lockedColors, setLockedColors] = useState<Set<number>>(new Set());
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  // Update colors when initial colors change (e.g., navigation)
  useEffect(() => {
    setColors(initialColors);
  }, [initialColors]);

  const handleLockToggle = useCallback((index: number) => {
    setLockedColors((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const handleRegenerate = useCallback(async () => {
    setIsRegenerating(true);
    try {
      const params = new URLSearchParams({
        harmony,
        count: String(colors.length),
      });
      if (baseColor) {
        params.set('base', `#${baseColor}`);
      }

      const response = await fetch(
        `https://app.zuviaone.com/api/public/color-palette/generate?${params}`
      );
      const data = await response.json();

      if (data.data?.colors) {
        // Merge locked colors with new palette
        const newColors = data.data.colors.map((color: string, index: number) =>
          lockedColors.has(index) ? colors[index] : color
        );
        setColors(newColors);
      }
    } catch (error) {
      console.error('Failed to regenerate palette:', error);
    } finally {
      setIsRegenerating(false);
    }
  }, [harmony, baseColor, colors, lockedColors]);

  const handleBaseColorChange = useCallback(
    (newColor: string) => {
      const cleanHex = newColor.replace('#', '').toUpperCase();
      router.push(`/tools/color-palette/${harmony}/${cleanHex}`);
    },
    [harmony, router]
  );

  const handleShare = useCallback(() => {
    // URL is already copied in ColorPaletteControls
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case ' ':
          e.preventDefault();
          handleRegenerate();
          break;
        case 'e':
          if (e.metaKey || e.ctrlKey) {
            e.preventDefault();
            setIsExportOpen(true);
          }
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0': {
          const index = e.key === '0' ? 9 : parseInt(e.key) - 1;
          if (index < colors.length) {
            handleLockToggle(index);
          }
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleRegenerate, handleLockToggle, colors.length]);

  return (
    <div className="relative">
      {/* Main Swatch Bar */}
      <ColorSwatchBar
        colors={colors}
        lockedColors={lockedColors}
        onLockToggle={handleLockToggle}
      />

      {/* Floating Controls */}
      <ColorPaletteControls
        onRegenerate={handleRegenerate}
        onExport={() => setIsExportOpen(true)}
        onShare={handleShare}
        isRegenerating={isRegenerating}
        baseColor={baseColor}
        onBaseColorChange={showBaseColorPicker ? handleBaseColorChange : undefined}
      />

      {/* Export Modal */}
      <ColorExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        colors={colors}
        harmony={harmony}
      />
    </div>
  );
}
