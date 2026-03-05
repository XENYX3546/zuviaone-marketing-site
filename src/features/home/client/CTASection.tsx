'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button } from '@/components/ui';
import { ctaLinks } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export function CTASection() {
  return null;
}

function CTABackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-700 rounded-full opacity-50" />
    </div>
  );
}
