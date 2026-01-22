'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Section, Icon } from '@/components/ui';
import { industries, industrySlugs } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { FeaturePageData } from '@/lib/constants/feature-pages';
import type { IndustryData } from '@/lib/constants/industries';

type IndustryFeatureSameFeatureProps = {
  currentIndustry: IndustryData;
  feature: FeaturePageData;
};

export function IndustryFeatureSameFeature({ currentIndustry, feature }: IndustryFeatureSameFeatureProps) {
  // Get other industries (excluding current)
  const otherIndustries = industrySlugs
    .filter((slug) => slug !== currentIndustry.slug)
    .map((slug) => industries[slug]);

  return (
    <Section className="bg-white border-t border-neutral-100">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900">
              {feature.hero.badge} for other industries
            </h2>
            <p className="mt-2 text-neutral-600">
              See how other service businesses use our {feature.hero.badge.toLowerCase()}.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-2"
          >
            {otherIndustries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/for/${industry.slug}/${feature.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-blue-100 rounded-full text-sm text-neutral-700 hover:text-blue-700 transition-colors"
              >
                {industry.namePlural}
              </Link>
            ))}
          </motion.div>

          {/* Link to main feature page */}
          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <Link
              href={`/features/${feature.slug}`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn more about {feature.hero.badge}
              <Icon name="arrow-right" size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
