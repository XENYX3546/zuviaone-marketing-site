'use client';

import { motion } from 'framer-motion';
import { Container, Section, Icon, AnimatedSection } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

type ProblemSolutionItem = {
  problem: string;
  solution: string;
};

type ProblemSolutionSectionProps = {
  title: string;
  description: string;
  items: ProblemSolutionItem[];
};

export function ProblemSolutionSection({
  title,
  description,
  items,
}: ProblemSolutionSectionProps) {
  return (
    <Section className="bg-neutral-900 text-white">
      <Container>
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <p className="mt-4 text-lg text-neutral-400">{description}</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-4 bg-neutral-800/50 rounded-xl p-5 border border-neutral-700"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="x" size={14} className="text-red-400" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-red-400 uppercase tracking-wide">
                      The Problem
                    </span>
                    <p className="mt-1 text-neutral-300">{item.problem}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:border-l md:border-neutral-700 md:pl-4">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="check" size={14} className="text-green-400" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-green-400 uppercase tracking-wide">
                      With ZuviaOne
                    </span>
                    <p className="mt-1 text-neutral-300">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
