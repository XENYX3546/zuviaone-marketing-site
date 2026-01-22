'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container, Section, Icon } from '@/components/ui';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { IndustryData } from '@/lib/constants/industries';
import type { FeaturePageData } from '@/lib/constants/feature-pages';

type IndustryFeatureOtherFeaturesProps = {
  industry: IndustryData;
  features: (FeaturePageData & { slug: string })[];
};

const featureIcons: Record<string, 'users' | 'calendar' | 'map-pin' | 'file-text' | 'message-square' | 'zap' | 'eye' | 'bar-chart'> = {
  crm: 'users',
  scheduling: 'calendar',
  'field-service': 'map-pin',
  invoicing: 'file-text',
  communication: 'message-square',
  automation: 'zap',
  'customer-portal': 'eye',
  analytics: 'bar-chart',
};

export function IndustryFeatureOtherFeatures({ industry, features }: IndustryFeatureOtherFeaturesProps) {
  return (
    <Section>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              More tools for {industry.namePlural.toLowerCase()}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <motion.div key={feature.slug} variants={fadeInUp}>
                <Link
                  href={`/for/${industry.slug}/${feature.slug}`}
                  className="flex items-center gap-3 bg-neutral-50 rounded-lg p-4 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:bg-blue-100 transition-colors">
                    <Icon
                      name={featureIcons[feature.slug] || 'check'}
                      size={20}
                      className="text-neutral-600 group-hover:text-blue-600 transition-colors"
                    />
                  </div>
                  <div>
                    <span className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                      {feature.hero.badge}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
