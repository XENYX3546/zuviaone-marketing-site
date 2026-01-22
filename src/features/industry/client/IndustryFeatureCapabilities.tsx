'use client';

import { motion } from 'framer-motion';
import { Container, Section, Icon } from '@/components/ui';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { FeaturePageData } from '@/lib/constants/feature-pages';
import type { IndustryData } from '@/lib/constants/industries';

type IconName = 'users' | 'target' | 'filter' | 'calendar' | 'map-pin' | 'check-square'
  | 'inbox' | 'message-square' | 'phone' | 'file-text' | 'clipboard' | 'credit-card'
  | 'cpu' | 'zap' | 'message-circle' | 'bar-chart' | 'pie-chart' | 'eye' | 'check';

type IndustryFeatureCapabilitiesProps = {
  industry: IndustryData;
  feature: FeaturePageData;
};

export function IndustryFeatureCapabilities({ industry: _industry, feature }: IndustryFeatureCapabilitiesProps) {
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
              {feature.solution.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              {feature.solution.description}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {feature.solution.features.map((capability, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Icon
                    name={capability.icon as IconName}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="font-semibold text-neutral-900">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
