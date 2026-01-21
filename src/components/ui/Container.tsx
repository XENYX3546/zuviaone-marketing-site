import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { spacing } from '@/lib/constants';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
};

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn(spacing.container, className)}>
      {children}
    </Component>
  );
}
