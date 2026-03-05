'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button } from '@/components/ui';
import { ctaLinks } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

type FeatureCTAProps = {
  title: string;
  description: string;
};

export function FeatureCTA({ title: _title, description: _description }: FeatureCTAProps) {
  return null;
}
