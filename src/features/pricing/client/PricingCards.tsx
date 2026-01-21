'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Section, Button, Icon } from '@/components/ui';
import { pricingPlans, ctaLinks, type PricingPlan } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { cn } from '@/lib/utils';
import { PricingToggle } from './PricingToggle';

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <Section compact className="bg-white">
      <Container>
        <div className="mb-10">
          <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

function PricingCard({
  plan,
  isAnnual,
}: {
  plan: PricingPlan;
  isAnnual: boolean;
}) {
  const price = isAnnual ? plan.price.annually : plan.price.monthly;
  const isEnterprise = plan.id === 'enterprise';

  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        'relative rounded-2xl p-6 border-2',
        plan.highlighted
          ? 'border-blue-600 bg-blue-50/30 shadow-lg'
          : 'border-neutral-200 bg-white'
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-neutral-900">{plan.name}</h3>
        <p className="mt-1 text-sm text-neutral-600">{plan.description}</p>
      </div>

      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-neutral-900">
          {isEnterprise ? 'Custom' : `£${price}`}
        </span>
        {!isEnterprise && (
          <span className="text-neutral-500 ml-1">/month</span>
        )}
        {isAnnual && !isEnterprise && (
          <p className="text-xs text-neutral-500 mt-1">billed annually</p>
        )}
      </div>

      <ul className="space-y-3 mb-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Icon name="check" size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-neutral-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={isEnterprise ? '/contact' : ctaLinks.signUp}
        variant={plan.highlighted ? 'primary' : 'outline'}
        className="w-full"
      >
        {plan.cta}
      </Button>
    </motion.div>
  );
}
