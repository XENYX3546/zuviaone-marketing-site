'use client';

import { motion } from 'framer-motion';
import { Container, Section, Icon, AnimatedSection } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

type Benefit = {
  title: string;
  description: string;
};

type BenefitsSectionProps = {
  title: string;
  description: string;
  items: Benefit[];
};

export function BenefitsSection({ title, description, items }: BenefitsSectionProps) {
  return (
    <Section className="bg-blue-50/50">
      <Container>
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{title}</h2>
          <p className="mt-4 text-lg text-neutral-600">{description}</p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="flex gap-4 bg-white rounded-xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="check" size={20} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-1 text-neutral-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
