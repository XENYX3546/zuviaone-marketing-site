// Recurring Billing Feature Page

import type { FeaturePageData } from '../types';

export const recurringBilling: FeaturePageData = {
  slug: 'recurring-billing',
  seo: {
    title: 'Recurring Billing Software | Subscription Billing',
    description: 'Automate recurring invoices and subscription billing. Get paid on time, every time. Reduce churn and improve cash flow. Free trial.',
    keywords: ['recurring billing', 'subscription billing', 'recurring invoices', 'automated billing', 'subscription management', 'recurring payments'],
  },
  hero: {
    badge: 'Recurring Billing',
    title: 'Set it once.',
    highlight: 'Get paid forever.',
    description: 'Recurring invoices and automatic payments. Build predictable revenue without chasing payments.',
    stats: [
      { value: '95%', label: 'Collection rate' },
      { value: '0', label: 'Invoices forgotten' },
      { value: '10hrs', label: 'Saved monthly' },
    ],
  },
  problemSolution: {
    title: 'Manual billing kills cash flow',
    description: 'If you\'re sending the same invoice every month, you\'re wasting time.',
    items: [
      {
        problem: 'Creating the same invoices every month is tedious and error-prone',
        solution: 'Set up once and invoices go out automatically on schedule',
      },
      {
        problem: 'Customers forget to pay and you chase payments every month',
        solution: 'Automatic card payments mean money arrives without chasing',
      },
      {
        problem: 'Price changes require updating every single recurring invoice',
        solution: 'Update pricing once and all future invoices reflect the change',
      },
      {
        problem: 'No visibility into upcoming recurring revenue',
        solution: 'MRR dashboard shows predictable revenue and upcoming renewals',
      },
    ],
  },
  solution: {
    title: 'Recurring revenue on autopilot',
    description: 'Bill customers automatically, forever.',
    features: [
      { icon: 'repeat', title: 'Automatic Invoicing', description: 'Invoices generated and sent on your schedule.' },
      { icon: 'credit-card', title: 'Auto-Payments', description: 'Charge cards automatically. No manual collection.' },
      { icon: 'calendar', title: 'Flexible Schedules', description: 'Weekly, monthly, quarterly, or custom billing cycles.' },
      { icon: 'edit', title: 'Easy Updates', description: 'Change pricing or schedules without recreating.' },
      { icon: 'bell', title: 'Payment Failures', description: 'Automatic retries and notifications for failed payments.' },
      { icon: 'bar-chart', title: 'Revenue Analytics', description: 'MRR, churn, and lifetime value at a glance.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Predictable revenue, zero effort.',
    items: [
      { title: 'Stop chasing payments', description: 'Automatic payments mean money arrives on time, every time.' },
      { title: 'Predictable cash flow', description: 'Know exactly what revenue is coming and when.' },
      { title: 'Save hours every month', description: 'No more creating the same invoices repeatedly.' },
      { title: 'Reduce failed payments', description: 'Smart retries recover revenue that would otherwise be lost.' },
    ],
  },
  useCases: {
    title: 'Recurring billing for any model',
    items: [
      { industry: 'Subscription Services', description: 'SaaS, memberships, and subscription boxes.' },
      { industry: 'Service Contracts', description: 'Maintenance agreements and retainer clients.' },
      { industry: 'Recurring Services', description: 'Cleaning, landscaping, and regular service visits.' },
    ],
  },
  cta: {
    title: 'Ready for predictable revenue?',
    description: 'Start automating recurring billing. Free 14-day trial.',
  },
};
