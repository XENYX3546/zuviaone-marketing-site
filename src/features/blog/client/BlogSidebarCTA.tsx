'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui';
import { getCTAForCategories, DEFAULT_CTA } from '../shared';
import type { PublicCategory } from '@/lib/blog';

type BlogSidebarCTAProps = {
  categories?: PublicCategory[];
};

export function BlogSidebarCTA({ categories: _categories = [] }: BlogSidebarCTAProps) {
  return null;
}
