'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button, Badge } from '@/components/ui';
import { ctaLinks, siteConfig } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export function HeroSection() {
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
              Trusted by 1,000+ businesses
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight"
          >
            The everything app
            <span className="text-blue-600"> for your business</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            {siteConfig.description}
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
        </motion.div>
      </Container>

      <HeroBackground />
    </Section>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl" />
    </div>
  );
}
