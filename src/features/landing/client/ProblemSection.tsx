'use client';

import { motion } from 'framer-motion';
import { Container, Section, Icon, AnimatedSection } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

type ProblemSectionProps = {
  title: string;
  description: string;
  painPoints: string[];
};

export function ProblemSection({ title, description, painPoints }: ProblemSectionProps) {
  return (
    <Section className="bg-neutral-900 text-white">
      <Container>
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="mt-4 text-lg text-neutral-400">{description}</p>
          </div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {painPoints.map((point, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 bg-neutral-800/50 rounded-lg p-4 border border-neutral-700"
              >
                <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="x" size={14} className="text-red-400" />
                </div>
                <span className="text-neutral-300">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
