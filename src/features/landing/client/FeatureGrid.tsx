'use client';

import { motion } from 'framer-motion';
import { Container, Section, Card, Icon, AnimatedSection } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

type FeatureGridProps = {
  title: string;
  description: string;
  items: FeatureItem[];
};

export function FeatureGrid({ title, description, items }: FeatureGridProps) {
  return (
    <Section className="bg-white">
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <Card hover className="h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon
                    name={item.icon as Parameters<typeof Icon>[0]['name']}
                    size={24}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="font-semibold text-neutral-900 text-lg">{item.title}</h3>
                <p className="mt-2 text-neutral-600">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
