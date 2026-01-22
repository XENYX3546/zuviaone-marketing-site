'use client';

import { motion } from 'framer-motion';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

type UseCase = {
  industry: string;
  description: string;
};

type UseCasesSectionProps = {
  title: string;
  items: UseCase[];
};

export function UseCasesSection({ title, items }: UseCasesSectionProps) {
  return (
    <Section className="bg-white">
      <Container>
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{title}</h2>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {items.map((item) => (
            <motion.div
              key={item.industry}
              variants={fadeInUp}
              className="text-center p-6 rounded-xl border border-neutral-200 bg-neutral-50"
            >
              <h3 className="font-semibold text-neutral-900 text-lg">{item.industry}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
