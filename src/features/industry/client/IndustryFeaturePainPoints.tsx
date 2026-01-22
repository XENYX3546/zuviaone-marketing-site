'use client';

import { motion } from 'framer-motion';
import { Container, Section, Icon } from '@/components/ui';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { IndustryData } from '@/lib/constants/industries';
import type { FeaturePageData } from '@/lib/constants/feature-pages';

type IndustryFeaturePainPointsProps = {
  industry: IndustryData;
  feature: FeaturePageData;
};

export function IndustryFeaturePainPoints({ industry, feature }: IndustryFeaturePainPointsProps) {
  // Use feature-specific problem/solution items
  const items = feature.problemSolution.items.slice(0, 4);

  return (
    <Section>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              {feature.problemSolution.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              {feature.problemSolution.description}
            </p>
          </motion.div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-4"
              >
                {/* Problem */}
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <Icon name="x" size={14} className="text-red-600" />
                    </div>
                    <p className="text-neutral-700">{item.problem}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Icon name="check" size={14} className="text-green-600" />
                    </div>
                    <p className="text-neutral-700">{item.solution}</p>
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
