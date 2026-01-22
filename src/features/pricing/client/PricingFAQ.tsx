'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Container, Section, Icon, AnimatedSection } from '@/components/ui';
import { pricingFAQs, type FAQ } from '@/lib/constants';
import { transitions } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function PricingFAQ() {
  return (
    <Section className="bg-neutral-50">
      <Container>
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Everything you need to know about our pricing.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          {pricingFAQs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center justify-between w-full py-5 text-left',
          transitions.base
        )}
      >
        <span className="font-medium text-neutral-900">{faq.question}</span>
        <Icon
          name="chevron-down"
          size={20}
          className={cn(
            'text-neutral-500',
            transitions.base,
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-neutral-600">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
