'use client';

import { motion } from 'framer-motion';
import { Container, Section, Breadcrumbs } from '@/components/ui';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/utils/animations';
import type { BreadcrumbItem } from '@/components/ui';

type BlogHeroProps = {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
};

export function BlogHero({ title, description, breadcrumbs }: BlogHeroProps) {
  return (
    <Section className="bg-gradient-to-b from-blue-50/50 to-white pt-8 pb-12">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.div variants={fadeInUp} className="mb-6">
              <Breadcrumbs items={breadcrumbs} />
            </motion.div>
          )}

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-neutral-600">
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
