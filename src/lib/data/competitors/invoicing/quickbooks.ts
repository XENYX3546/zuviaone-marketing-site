// QuickBooks Comparison Data

import type { CompetitorData } from '../../types';
import { createCompetitor, standardComparisonFeatures, customizeComparison } from '../_base';

export const quickbooks: CompetitorData = createCompetitor({
  slug: 'quickbooks',
  name: 'QuickBooks',
  category: 'invoicing',
  seo: {
    title: 'ZuviaOne vs QuickBooks | Beyond Accounting',
    description: 'Compare ZuviaOne to QuickBooks. Get invoicing plus scheduling, CRM, and marketing. Complete business platform, not just accounting.',
    keywords: ['QuickBooks alternative', 'QuickBooks competitor', 'more than QuickBooks', 'QuickBooks vs', 'business software'],
  },
  hero: {
    badge: 'vs QuickBooks',
    title: 'QuickBooks does the books.',
    highlight: 'Who does the rest?',
    description: 'QuickBooks is excellent accounting software. But you still need scheduling, CRM, and marketing tools. ZuviaOne includes it all.',
  },
  overview: {
    whatTheyDo: 'QuickBooks is accounting software for small businesses, offering invoicing, expense tracking, and financial reporting.',
    targetMarket: 'Small businesses needing accounting and bookkeeping software.',
    founded: '1983',
    headquarters: 'Mountain View, USA',
  },
  comparison: {
    title: 'Feature comparison',
    description: 'QuickBooks does accounting. ZuviaOne does business.',
    features: customizeComparison(standardComparisonFeatures, {
      'CRM & Contact Management': { them: 'Basic', note: 'Customer list only' },
      'Job Scheduling': { them: false },
      'Online Booking': { them: false },
      'Invoicing': { them: true },
      'Online Payments': { them: true },
      'Automated Reminders': { them: 'Limited' },
      'Email Marketing': { them: false },
      'SMS Marketing': { them: false },
      'AI Chatbot': { them: false },
      'AI Content Generation': { them: false },
      'Customer Portal': { them: 'Limited' },
      'Fleet Management': { them: false },
      'Payroll': { them: 'Add-on', note: 'Significant extra cost' },
      'Commission Tracking': { them: false },
      'Unlimited Users': { them: false, note: 'Extra cost per user' },
    }),
  },
  pricing: {
    ourPrice: 'From £49/month (everything included)',
    theirPrice: 'From £12/month + add-ons',
    savings: 'Everything in one vs piecing together tools',
  },
  limitations: {
    title: 'Where QuickBooks falls short',
    items: [
      {
        title: 'Accounting focus',
        description: 'Great for books, but no scheduling, no CRM, no marketing. You need more tools.',
      },
      {
        title: 'Expensive add-ons',
        description: 'Payroll, advanced features, extra users — costs add up quickly.',
      },
      {
        title: 'No operational tools',
        description: 'Can\'t manage jobs, field teams, or service delivery. It\'s just accounting.',
      },
      {
        title: 'Complex for simple needs',
        description: 'Designed for accountants. Overkill if you just want to invoice and get paid.',
      },
    ],
  },
  testimonial: {
    quote: 'QuickBooks handles our accounting but we needed separate tools for everything else. With ZuviaOne, invoicing connects to scheduling, CRM, and marketing. One system.',
    author: 'Michael Chen',
    role: 'Owner',
    company: 'Chen Property Services',
    previousTool: 'QuickBooks',
  },
});
