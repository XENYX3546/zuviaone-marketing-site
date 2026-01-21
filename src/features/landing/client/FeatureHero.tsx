'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button, Badge } from '@/components/ui';
import { ctaLinks } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

type FeatureHeroProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
};

export function FeatureHero({ badge, title, highlight, description }: FeatureHeroProps) {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          {badge && (
            <motion.div variants={fadeInUp}>
              <Badge variant="primary" className="mb-6">
                {badge}
              </Badge>
            </motion.div>
          )}

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight"
          >
            {title}
            {highlight && <span className="text-blue-600"> {highlight}</span>}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            {description}
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
        </motion.div>
      </Container>
    </Section>
  );
}
