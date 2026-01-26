// Bulk Invoicing Feature Page

import type { FeaturePageData } from '../types';

export const bulkInvoicing: FeaturePageData = {
  slug: 'bulk-invoicing',
  seo: {
    title: 'Bulk Invoice Generator | Batch Invoicing',
    description: 'Generate and send hundreds of invoices at once. Perfect for recurring billing and end-of-month invoicing. Save hours every month.',
    keywords: ['bulk invoicing', 'batch invoicing', 'invoice generator', 'mass invoicing', 'bulk invoice', 'multiple invoices'],
  },
  hero: {
    badge: 'Bulk Invoicing',
    title: 'Hundreds of invoices.',
    highlight: 'One click.',
    description: 'Generate and send invoices in bulk. Perfect for end-of-month billing or recurring contracts.',
    stats: [
      { value: '100s', label: 'At once' },
      { value: '2min', label: 'Total time' },
      { value: '10hrs', label: 'Saved monthly' },
    ],
  },
  problemSolution: {
    title: 'Month-end invoicing is a nightmare',
    description: 'Stop creating invoices one at a time.',
    items: [
      {
        problem: 'Creating dozens or hundreds of invoices one by one',
        solution: 'Generate all invoices in one batch with one click',
      },
      {
        problem: 'Sending invoices individually takes forever',
        solution: 'Send all invoices at once or schedule delivery',
      },
      {
        problem: 'Easy to miss customers who should be invoiced',
        solution: 'Filter and select exactly who gets invoiced',
      },
      {
        problem: 'Manual invoicing introduces errors',
        solution: 'Template-based generation ensures consistency',
      },
    ],
  },
  solution: {
    title: 'Invoice at scale',
    description: 'Bulk invoicing that saves hours.',
    features: [
      { icon: 'layers', title: 'Batch Generation', description: 'Generate hundreds of invoices at once.' },
      { icon: 'send', title: 'Bulk Send', description: 'Send all invoices with one click.' },
      { icon: 'filter', title: 'Smart Selection', description: 'Filter which customers to invoice.' },
      { icon: 'file-text', title: 'Templates', description: 'Consistent invoices from templates.' },
      { icon: 'calendar', title: 'Schedule Delivery', description: 'Set when invoices go out.' },
      { icon: 'eye', title: 'Preview', description: 'Review before sending.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Month-end in minutes, not hours.',
    items: [
      { title: 'Save 10+ hours monthly', description: 'Bulk processing replaces one-by-one work.' },
      { title: 'Never miss anyone', description: 'Systematic invoicing ensures everyone is billed.' },
      { title: 'Consistent invoices', description: 'Templates mean professional, error-free invoices.' },
      { title: 'Better cash flow', description: 'Invoice faster, get paid sooner.' },
    ],
  },
  useCases: {
    title: 'Bulk invoicing for any business',
    items: [
      { industry: 'Recurring Services', description: 'Monthly invoices for contract customers.' },
      { industry: 'Property Management', description: 'Rent invoices for all properties at once.' },
      { industry: 'Agencies', description: 'Monthly retainer invoices for all clients.' },
    ],
  },
  cta: {
    title: 'Ready to invoice faster?',
    description: 'Start bulk invoicing today. Free 14-day trial.',
  },
};
