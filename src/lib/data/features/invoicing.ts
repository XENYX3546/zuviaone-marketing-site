// Invoicing Feature Page

import type { FeaturePageData } from '../types';

export const invoicing: FeaturePageData = {
  slug: 'invoicing',
  seo: {
    title: 'Invoice Software for Small Business | Online Invoicing',
    description: 'Professional invoicing software that gets you paid faster. Create invoices, accept online payments, automate reminders. Free 14-day trial.',
    keywords: ['invoice software', 'invoicing software', 'online invoicing', 'small business invoicing', 'invoice generator', 'billing software'],
  },
  hero: {
    badge: 'Invoicing & Payments',
    title: 'Get paid faster.',
    highlight: 'Chase invoices less.',
    description: 'Professional invoices that get paid on time. Online payments, automatic reminders, and a clear view of what\'s owed.',
    stats: [
      { value: '14 days', label: 'Faster payment' },
      { value: '85%', label: 'Paid online' },
      { value: '£0', label: 'In bad debt' },
    ],
  },
  problemSolution: {
    title: 'Chasing payments is exhausting',
    description: 'Late payments hurt your cash flow and waste your time.',
    items: [
      {
        problem: 'Customers "forget" to pay because your invoices look unprofessional',
        solution: 'Branded, professional invoices that customers take seriously and pay promptly',
      },
      {
        problem: 'You spend hours chasing overdue payments instead of doing real work',
        solution: 'Automatic payment reminders chase invoices for you — professionally and persistently',
      },
      {
        problem: 'No online payment option means customers have excuses to delay',
        solution: 'One-click online payments make it easy for customers to pay instantly',
      },
      {
        problem: 'You lose track of what\'s been paid and what\'s outstanding',
        solution: 'Real-time dashboard shows paid, pending, and overdue invoices at a glance',
      },
    ],
  },
  solution: {
    title: 'Invoicing that gets results',
    description: 'Professional invoices, easy payments, and automated follow-up.',
    features: [
      { icon: 'file-text', title: 'Professional Invoices', description: 'Branded templates that look great on any device. Create and send in under a minute.' },
      { icon: 'credit-card', title: 'Online Payments', description: 'Accept cards, bank transfers, and more. Customers pay with one click.' },
      { icon: 'zap', title: 'Automatic Reminders', description: 'Gentle nudges sent automatically when invoices are due or overdue.' },
      { icon: 'clipboard', title: 'Quotes to Invoices', description: 'Convert accepted quotes to invoices instantly. No re-typing required.' },
      { icon: 'pie-chart', title: 'Payment Tracking', description: 'See what\'s paid, pending, and overdue at a glance. Full payment history.' },
      { icon: 'bar-chart', title: 'Financial Reports', description: 'Revenue reports, tax summaries, and cash flow visibility when you need it.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Better cash flow, less stress, more time.',
    items: [
      { title: 'Get paid 14 days faster', description: 'Online payments and automatic reminders mean money hits your account sooner.' },
      { title: 'Stop chasing payments', description: 'Automated reminders do the awkward follow-up for you. Professional and persistent.' },
      { title: 'Look professional', description: 'Branded invoices build trust and credibility. Customers take you seriously.' },
      { title: 'Know your numbers', description: 'Real-time visibility into revenue, outstanding amounts, and cash flow.' },
    ],
  },
  useCases: {
    title: 'Perfect for service businesses',
    items: [
      { industry: 'Trades & Contractors', description: 'Invoice on-site, take deposits, and manage progress payments for larger jobs.' },
      { industry: 'Consultants & Freelancers', description: 'Track billable hours, create retainer invoices, and manage multiple clients.' },
      { industry: 'Service Companies', description: 'Recurring invoices for contracts, one-off billing for projects, all in one place.' },
    ],
  },
  cta: {
    title: 'Ready to improve your cash flow?',
    description: 'Join thousands of businesses getting paid faster with ZuviaOne.',
  },
};
