'use client';

import { motion } from 'framer-motion';
import { Container, Section, Icon, AnimatedSection } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

type BenefitsListProps = {
  title: string;
  items: string[];
};

export function BenefitsList({ title, items }: BenefitsListProps) {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{title}</h2>
          </AnimatedSection>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {items.map((item) => (
              <motion.li
                key={item}
                variants={fadeInUp}
                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-neutral-200"
              >
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="check" size={14} className="text-blue-600" />
                </div>
                <span className="text-neutral-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </Section>
  );
}
