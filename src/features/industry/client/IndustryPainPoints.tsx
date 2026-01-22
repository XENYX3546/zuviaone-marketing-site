'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { IndustryData } from '@/lib/constants/industries';

type IndustryPainPointsProps = {
  industry: IndustryData;
};

export function IndustryPainPoints({ industry }: IndustryPainPointsProps) {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Sound familiar?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              These are the challenges {industry.namePlural.toLowerCase()} face every day.
              We built ZuviaOne to solve them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.painPoints.map((painPoint, index) => (
              <motion.div
                key={painPoint.title}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      {painPoint.title}
                    </h3>
                    <p className="mt-2 text-neutral-600">
                      {painPoint.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
