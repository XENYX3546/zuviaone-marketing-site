'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button } from '@/components/ui';
import { ctaLinks } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { IndustryData } from '@/lib/constants/industries';

type IndustryCTAProps = {
  industry: IndustryData;
};

export function IndustryCTA({ industry: _industry }: IndustryCTAProps) {
  return null;
}
