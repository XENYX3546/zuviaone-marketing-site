'use client';

import { motion } from 'framer-motion';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';

const stats = [
  { value: '1,000+', label: 'Businesses' },
  { value: '50,000+', label: 'Jobs Completed' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9/5', label: 'Rating' },
];

const testimonials = [
  {
    quote: "ZuviaOne transformed how we manage our field operations. Everything is now in one place.",
    author: 'Sarah Johnson',
    role: 'Operations Manager',
    company: 'Premier Services Ltd',
  },
  {
    quote: "The scheduling and invoicing features alone have saved us hours every week.",
    author: 'Michael Chen',
    role: 'Business Owner',
    company: 'Chen Electrical',
  },
  {
    quote: "Best investment we've made. Our team loves how easy it is to use.",
    author: 'Emma Williams',
    role: 'CEO',
    company: 'Williams Plumbing',
  },
];

export function SocialProofSection() {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <StatsGrid />
        <TestimonialsGrid />
      </Container>
    </Section>
  );
}

function StatsGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeInUp} className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
          <div className="mt-1 text-sm text-neutral-600">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function TestimonialsGrid() {
  return (
    <div>
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
          Loved by businesses everywhere
        </h2>
      </AnimatedSection>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: typeof testimonials[0];
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-xl p-6 border border-neutral-200"
    >
      <p className="text-neutral-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-4 pt-4 border-t border-neutral-100">
        <div className="font-medium text-neutral-900">{testimonial.author}</div>
        <div className="text-sm text-neutral-500">
          {testimonial.role}, {testimonial.company}
        </div>
      </div>
    </motion.div>
  );
}
