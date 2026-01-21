'use client';

import { motion } from 'framer-motion';
import { Container, Section, Badge } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export function PricingHero() {
  return (
    <Section compact className="bg-gradient-to-b from-blue-50/50 to-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="primary" className="mb-4">
              Simple, transparent pricing
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-neutral-900"
          >
            Plans that grow with you
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-neutral-600"
          >
            Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
