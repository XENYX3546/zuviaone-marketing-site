'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button, Badge } from '@/components/ui';
import { ctaLinks } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

type Stat = { value: string; label: string };

type FeatureLandingHeroProps = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  stats?: Stat[];
};

export function FeatureLandingHero({
  badge,
  title,
  highlight,
  description,
  stats,
}: FeatureLandingHeroProps) {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="primary" className="mb-6">
              {badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight"
          >
            {title}
            <span className="text-blue-600"> {highlight}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto"
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

          <motion.p variants={fadeInUp} className="mt-4 text-sm text-neutral-500">
            No credit card required. 14-day free trial.
          </motion.p>

          {stats && stats.length > 0 && (
            <motion.div
              variants={fadeInUp}
              className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            >
              {stats.map((stat) => (
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
