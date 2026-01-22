'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container, Section, Icon } from '@/components/ui';
import { industries, industrySlugs } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';

type FeatureIndustriesProps = {
  featureSlug: string;
  featureName: string;
};

export function FeatureIndustries({ featureSlug, featureName }: FeatureIndustriesProps) {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
              {featureName} for your industry
            </h2>
            <p className="mt-3 text-neutral-600">
              See how {featureName.toLowerCase()} works for businesses like yours.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          >
            {industrySlugs.map((slug) => {
              const industry = industries[slug];
              return (
                <Link
                  key={slug}
                  href={`/for/${slug}/${featureSlug}`}
                  className="group flex items-center justify-center gap-2 bg-white rounded-lg px-4 py-3 border border-neutral-200 hover:border-blue-300 hover:shadow-sm transition-all text-center"
                >
                  <span className="text-sm font-medium text-neutral-700 group-hover:text-blue-600 transition-colors">
                    {industry.namePlural}
                  </span>
                  <Icon
                    name="arrow-right"
                    size={14}
                    className="text-neutral-400 group-hover:text-blue-600 transition-colors"
                  />
                </Link>
              );
            })}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-center text-sm text-neutral-500"
          >
            Don&apos;t see your industry?{' '}
            <Link href="/pricing" className="text-blue-600 hover:underline">
              ZuviaOne works for all service businesses
            </Link>
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
