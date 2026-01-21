'use client';

import { motion } from 'framer-motion';
import { Container, Section, Button } from '@/components/ui';
import { ctaLinks } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/utils/animations';

export function CTASection() {
  return (
    <Section className="bg-blue-600 relative overflow-hidden">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Ready to streamline your business?
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-4 text-lg text-blue-100">
            Join thousands of businesses already using ZuviaOne to save time and grow.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button
              href={ctaLinks.signUp}
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Start Free Trial
            </Button>
            <Button
              href={ctaLinks.demo}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Talk to Sales
            </Button>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-4 text-sm text-blue-200">
            No credit card required. 14-day free trial.
          </motion.p>
        </motion.div>
      </Container>

      <CTABackground />
    </Section>
  );
}

function CTABackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-700 rounded-full opacity-50" />
    </div>
  );
}
