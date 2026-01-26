// Competitors - Shared Helpers and Templates

import type { CompetitorData, ComparisonFeature } from '../types';

// Standard comparison features
export const standardComparisonFeatures: ComparisonFeature[] = [
  { feature: 'CRM & Contact Management', us: true, them: true },
  { feature: 'Job Scheduling', us: true, them: true },
  { feature: 'Online Booking', us: true, them: true },
  { feature: 'Invoicing', us: true, them: true },
  { feature: 'Online Payments', us: true, them: true },
  { feature: 'Automated Reminders', us: true, them: true },
  { feature: 'Email Marketing', us: true, them: false, note: 'Built-in, no extra cost' },
  { feature: 'SMS Marketing', us: true, them: false, note: 'Included in all plans' },
  { feature: 'AI Chatbot', us: true, them: false, note: 'Capture leads 24/7' },
  { feature: 'AI Content Generation', us: true, them: false },
  { feature: 'Customer Portal', us: true, them: true },
  { feature: 'Fleet Management', us: true, them: false },
  { feature: 'Payroll', us: true, them: false },
  { feature: 'Commission Tracking', us: true, them: false },
  { feature: 'Unlimited Users', us: true, them: false, note: 'Most competitors charge per user' },
  { feature: 'Free Trial (No Credit Card)', us: true, them: true },
];

// Default advantages template
export const defaultAdvantages = {
  title: 'Why businesses choose ZuviaOne',
  items: [
    {
      title: 'All-in-one platform',
      description: 'Everything you need in one place — no switching between tools or paying for multiple subscriptions.',
    },
    {
      title: 'Unlimited users',
      description: 'Invite your whole team without per-seat pricing eating into your budget.',
    },
    {
      title: 'Built-in marketing',
      description: 'Email, SMS, and AI chatbot included — features that cost extra everywhere else.',
    },
    {
      title: 'UK-based support',
      description: 'Real support from real people who understand UK businesses.',
    },
  ],
};

// Default migration CTA template
export const defaultMigrationCta = {
  title: 'Ready to switch?',
  description: 'Migrating is easier than you think. We help you move your data and get set up quickly.',
  benefits: [
    'Free data migration assistance',
    'Import your existing customers and history',
    'Training and onboarding included',
    'Cancel your old subscription with confidence',
  ],
};

// Create a competitor with defaults
export function createCompetitor(
  data: Omit<CompetitorData, 'advantages' | 'migrationCta'> & {
    advantages?: Partial<CompetitorData['advantages']>;
    migrationCta?: Partial<CompetitorData['migrationCta']>;
  }
): CompetitorData {
  return {
    ...data,
    advantages: {
      title: data.advantages?.title || defaultAdvantages.title,
      items: data.advantages?.items || defaultAdvantages.items,
    },
    migrationCta: {
      title: data.migrationCta?.title || defaultMigrationCta.title,
      description: data.migrationCta?.description || defaultMigrationCta.description,
      benefits: data.migrationCta?.benefits || defaultMigrationCta.benefits,
    },
  };
}

// Customize comparison features for a specific competitor
export function customizeComparison(
  base: ComparisonFeature[],
  overrides: Partial<Record<string, { them: boolean | string; note?: string }>>
): ComparisonFeature[] {
  return base.map((feature) => {
    const override = overrides[feature.feature];
    if (override) {
      return { ...feature, ...override };
    }
    return feature;
  });
}
