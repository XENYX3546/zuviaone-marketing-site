'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button, Badge, Breadcrumbs } from '@/components/ui';
import { ctaLinks } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';
import type { FeaturePageData } from '@/lib/constants/feature-pages';
import type { IndustryData } from '@/lib/constants/industries';
import type { IndustryFeatureContent } from '@/lib/constants/industry-features';

type IndustryFeatureHeroProps = {
  industry: IndustryData;
  feature: FeaturePageData;
  content: IndustryFeatureContent;
};

export function IndustryFeatureHero({ industry, feature, content }: IndustryFeatureHeroProps) {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: `For ${industry.namePlural}`, href: `/for/${industry.slug}` },
    { label: feature.hero.badge },
  ];

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          {/* Breadcrumbs for navigation and SEO */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Breadcrumbs items={breadcrumbItems} className="justify-center" />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Badge variant="primary" className="mb-6">
              {feature.hero.badge} for {industry.namePlural}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight"
          >
            {content.headline}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto"
          >
            {content.subheadline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button href={ctaLinks.signUp} size="lg">
              Start Free Trial
            </Button>
            <Button href={ctaLinks.demo} variant="outline" size="lg">
              Book a Demo
            </Button>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-4 text-sm text-neutral-500">
            No credit card required. 14-day free trial.
          </motion.p>

          {/* Stats from feature data */}
          {feature.hero.stats && feature.hero.stats.length > 0 && (
            <motion.div
              variants={fadeInUp}
              className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            >
              {feature.hero.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Container>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl" />
      </div>
    </Section>
  );
}
