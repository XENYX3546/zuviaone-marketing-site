'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ColorSwatch } from './ColorSwatch';

type ColorSwatchBarProps = {
  colors: string[];
  lockedColors: Set<number>;
  onLockToggle: (index: number) => void;
};

export function ColorSwatchBar({
  colors,
  lockedColors,
  onLockToggle,
}: ColorSwatchBarProps) {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[50vh] md:min-h-[60vh]">
      <AnimatePresence mode="popLayout">
        {colors.map((hex, index) => (
          <motion.div
            key={`${hex}-${index}`}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex-1"
          >
            <ColorSwatch
              hex={hex}
              index={index}
              isLocked={lockedColors.has(index)}
              onLockToggle={() => onLockToggle(index)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
