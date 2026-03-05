'use client';

import { motion } from 'framer-motion';
import { Container, Section, Badge } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import type { IndustryData } from '@/lib/constants/industries';

type IndustryHeroProps = {
  industry: IndustryData;
};

export function IndustryHero({ industry }: IndustryHeroProps) {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="primary" className="mb-6">
              Built for {industry.namePlural}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight"
          >
            {industry.hero.headline}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto"
          >
            {industry.hero.subheadline}
          </motion.p>

          {/* Trust signals */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500"
          >
            {industry.trustSignals.map((signal) => (
              <span key={signal} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {signal}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl" />
      </div>
    </Section>
  );
}
