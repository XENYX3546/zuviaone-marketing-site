// Pricing Plans Configuration

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    annually: number;
  };
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams just getting started.',
    price: {
      monthly: 29,
      annually: 24,
    },
    features: [
      'Up to 3 team members',
      'Basic CRM features',
      'Job scheduling',
      'Invoicing',
      'Email support',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses that need more power.',
    price: {
      monthly: 79,
      annually: 66,
    },
    features: [
      'Up to 10 team members',
      'Advanced CRM & pipelines',
      'Route optimization',
      'Automated reminders',
      'Custom fields',
      'Priority support',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large teams with advanced needs.',
    price: {
      monthly: 199,
      annually: 166,
    },
    features: [
      'Unlimited team members',
      'AI-powered automation',
      'Advanced analytics',
      'Custom integrations',
      'Dedicated account manager',
      'SLA & uptime guarantee',
      'Custom training',
    ],
    cta: 'Contact Sales',
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const pricingFAQs: FAQ[] = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes, all plans come with a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and direct debit via Stripe.',
  },
  {
    question: 'Is there a discount for annual billing?',
    answer: 'Yes, you save approximately 17% when you choose annual billing over monthly.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.',
  },
  {
    question: 'Do you offer custom enterprise solutions?',
    answer: 'Yes, we offer tailored solutions for large organizations. Contact our sales team to discuss your needs.',
  },
];
