'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button } from '@/components/ui';
import { ctaLinks } from '@/lib/constants';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { IndustryData } from '@/lib/constants/industries';
import type { FeaturePageData } from '@/lib/constants/feature-pages';

type IndustryFeatureCTAProps = {
  industry: IndustryData;
  feature: FeaturePageData;
};

export function IndustryFeatureCTA({ industry, feature }: IndustryFeatureCTAProps) {
  return (
    <Section className="bg-blue-600">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            {feature.cta.title}
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-4 text-lg text-blue-100">
            {feature.cta.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button href={ctaLinks.signUp} variant="secondary" size="lg">
              Start Free Trial
            </Button>
            <Button
              href={ctaLinks.demo}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Book a Demo
            </Button>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-4 text-sm text-blue-200">
            14-day free trial. No credit card required. Cancel anytime.
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
