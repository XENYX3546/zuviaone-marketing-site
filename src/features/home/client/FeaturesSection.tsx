'use client';

import { motion } from 'framer-motion';
import { Container, Section, Card, Icon, AnimatedSection } from '@/components/ui';
import { featureCategories, type Feature } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

export function FeaturesSection() {
  return (
    <Section id="features" className="bg-white">
      <Container>
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Everything you need to run your business
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            From customer management to field operations, ZuviaOne brings all your tools together.
          </p>
        </AnimatedSection>

        <div className="space-y-20">
          {featureCategories.slice(0, 4).map((category, index) => (
            <FeatureCategory
              key={category.id}
              category={category}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FeatureCategory({
  category,
  reverse,
}: {
  category: typeof featureCategories[0];
  reverse: boolean;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
    >
      <motion.div variants={fadeInUp} className="lg:w-1/3">
        <h3 className="text-2xl font-bold text-neutral-900">{category.title}</h3>
        <p className="mt-2 text-neutral-600">{category.tagline}</p>
      </motion.div>

      <div className="lg:w-2/3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card hover className="h-full">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon
          name={feature.icon as Parameters<typeof Icon>[0]['name']}
          size={20}
          className="text-blue-600"
        />
      </div>
      <h4 className="font-semibold text-neutral-900">{feature.title}</h4>
      <p className="mt-2 text-sm text-neutral-600">{feature.description}</p>
      <ul className="mt-4 space-y-1">
        {feature.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-2 text-sm text-neutral-500">
            <Icon name="check" size={14} className="text-blue-600" />
            {highlight}
          </li>
        ))}
      </ul>
    </Card>
  );
}
