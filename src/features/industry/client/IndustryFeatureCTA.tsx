'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button } from '@/components/ui';
import { ctaLinks } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { FeaturePageData } from '@/lib/constants/feature-pages';
import type { IndustryData } from '@/lib/constants/industries';

type IndustryFeatureCTAProps = {
  industry: IndustryData;
  feature: FeaturePageData;
};

export function IndustryFeatureCTA({ industry: _industry, feature: _feature }: IndustryFeatureCTAProps) {
  return null;
}
