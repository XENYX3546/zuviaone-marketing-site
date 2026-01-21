import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { spacing } from '@/lib/constants';

type SectionProps = {
  children: ReactNode;
  className?: string;
  compact?: boolean;
  id?: string;
};

export function Section({ children, className, compact, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        compact ? spacing.sectionCompact : spacing.section,
        className
      )}
    >
      {children}
    </section>
  );
}
