'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { IndustryData } from '@/lib/constants/industries';

type IndustryStatsProps = {
  industry: IndustryData;
};

export function IndustryStats({ industry }: IndustryStatsProps) {
  return (
    <Section compact className="bg-blue-600">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {industry.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-lg font-medium text-blue-100">
                {stat.label}
              </div>
              <div className="mt-1 text-sm text-blue-200">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
