'use client';

import { transitions } from '@/lib/constants';
import { cn } from '@/lib/utils';

type PricingToggleProps = {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
};

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={cn(
          'text-sm',
          transitions.base,
          !isAnnual ? 'text-neutral-900 font-medium' : 'text-neutral-500'
        )}
      >
        Monthly
      </span>

      <button
        onClick={() => onToggle(!isAnnual)}
        className={cn(
          'relative w-14 h-7 rounded-full',
          transitions.base,
          isAnnual ? 'bg-blue-600' : 'bg-neutral-300'
        )}
        aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
      >
        <span
          className={cn(
            'absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm',
            transitions.base,
            isAnnual ? 'left-8' : 'left-1'
          )}
        />
      </button>

      <span
        className={cn(
          'text-sm',
          transitions.base,
          isAnnual ? 'text-neutral-900 font-medium' : 'text-neutral-500'
        )}
      >
        Annual
        <span className="ml-1 text-xs text-green-600 font-medium">Save 17%</span>
      </span>
    </div>
  );
}
