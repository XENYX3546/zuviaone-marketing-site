'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Section, Icon } from '@/components/ui';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { FeaturePageData } from '@/lib/constants/feature-pages';
import type { IndustryData } from '@/lib/constants/industries';

type IndustryFeaturesProps = {
  industry: IndustryData;
  features: Array<FeaturePageData & { slug: string }>;
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

export function IndustryFeatures({ industry, features }: IndustryFeaturesProps) {
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
              Everything you need to run your {industry.seo.industry} business
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              One platform that handles it all — from first enquiry to final payment.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <motion.div key={feature.slug} variants={fadeInUp}>
                <Link
                  href={`/for/${industry.slug}/${feature.slug}`}
                  className="block h-full bg-white rounded-xl p-6 border border-neutral-200 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon
                      name={featureIcons[feature.slug] || 'check'}
                      className="text-blue-600 group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {feature.hero.badge}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                    {feature.seo.description.split('.')[0]}.
                  </p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more
                    <Icon name="arrow-right" size={16} className="ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
