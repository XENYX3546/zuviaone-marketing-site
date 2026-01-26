// Feature Pages - Shared Defaults and Helpers

import type { FeaturePageData } from '../types';

// Default CTA templates
export const defaultCtas = {
  trial: {
    title: 'Ready to get started?',
    description: 'Join thousands of businesses already using ZuviaOne.',
  },
  demo: {
    title: 'See it in action',
    description: 'Book a free demo and see how ZuviaOne can transform your business.',
  },
  growth: {
    title: 'Ready to grow your business?',
    description: 'Start your free trial today. No credit card required.',
  },
};

// Create a feature with sensible defaults
export function createFeature(
  data: Omit<FeaturePageData, 'cta'> & { cta?: Partial<FeaturePageData['cta']> }
): FeaturePageData {
  return {
    ...data,
    cta: {
      title: data.cta?.title || defaultCtas.trial.title,
      description: data.cta?.description || defaultCtas.trial.description,
    },
  };
}

// Standard benefit templates that can be customized
export const benefitTemplates = {
  timeSaving: (hours: string) => ({
    title: `Save ${hours} every week`,
    description: 'Automation handles repetitive tasks so you can focus on growing your business.',
  }),
  revenue: (percent: string) => ({
    title: `Increase revenue by ${percent}`,
    description: 'Convert more leads and retain more customers with streamlined operations.',
  }),
  efficiency: {
    title: 'Boost team efficiency',
    description: 'Your team completes more work in less time with the right tools.',
  },
  customerExperience: {
    title: 'Delight your customers',
    description: 'Deliver a professional, consistent experience that builds loyalty.',
  },
  visibility: {
    title: 'Complete visibility',
    description: 'See exactly what\'s happening across your business in real-time.',
  },
  scalability: {
    title: 'Scale without chaos',
    description: 'Handle more customers and jobs without adding headcount.',
  },
};

// Standard problem templates
export const problemTemplates = {
  manualProcess: (process: string) => ({
    problem: `${process} is done manually, wasting hours every week`,
    solution: `Automated ${process.toLowerCase()} runs in the background while you focus on growth`,
  }),
  noVisibility: (area: string) => ({
    problem: `No visibility into ${area} means you\'re flying blind`,
    solution: `Real-time dashboard shows ${area.toLowerCase()} at a glance`,
  }),
  droppedBalls: (task: string) => ({
    problem: `${task} gets forgotten when things get busy`,
    solution: `Automated reminders ensure ${task.toLowerCase()} never falls through the cracks`,
  }),
};
