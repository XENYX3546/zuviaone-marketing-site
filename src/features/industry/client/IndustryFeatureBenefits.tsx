'use client';

import { motion } from 'framer-motion';
import { Container, Section, Icon } from '@/components/ui';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { IndustryData } from '@/lib/constants/industries';
import type { IndustryFeatureContent } from '@/lib/constants/industry-features';

type IndustryFeatureBenefitsProps = {
  industry: IndustryData;
  content: IndustryFeatureContent;
};

export function IndustryFeatureBenefits({ industry, content }: IndustryFeatureBenefitsProps) {
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
              What this means for your {industry.seo.industry} business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-neutral-200"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon name="check" size={18} className="text-green-600" />
                </div>
                <p className="text-neutral-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
