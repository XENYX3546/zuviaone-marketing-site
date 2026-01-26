// FreshBooks Comparison Data

import type { CompetitorData } from '../../types';
import { createCompetitor, standardComparisonFeatures, customizeComparison } from '../_base';

export const freshbooks: CompetitorData = createCompetitor({
  slug: 'freshbooks',
  name: 'FreshBooks',
  category: 'invoicing',
  seo: {
    title: 'ZuviaOne vs FreshBooks | Invoicing Plus Everything Else',
    description: 'Compare ZuviaOne to FreshBooks. Get invoicing plus scheduling, CRM, marketing, and more. Complete business platform.',
    keywords: ['FreshBooks alternative', 'FreshBooks competitor', 'more than FreshBooks', 'FreshBooks vs'],
  },
  hero: {
    badge: 'vs FreshBooks',
    title: 'FreshBooks handles invoices.',
    highlight: 'What handles everything else?',
    description: 'FreshBooks is great invoicing software. But service businesses need scheduling, CRM, and marketing too. ZuviaOne does it all.',
  },
  overview: {
    whatTheyDo: 'FreshBooks is cloud accounting software focused on invoicing, time tracking, and expense management for freelancers and small businesses.',
    targetMarket: 'Freelancers, consultants, and small service businesses needing simple invoicing.',
    founded: '2003',
    headquarters: 'Toronto, Canada',
  },
  comparison: {
    title: 'Feature comparison',
    description: 'FreshBooks invoices. ZuviaOne runs your business.',
    features: customizeComparison(standardComparisonFeatures, {
      'CRM & Contact Management': { them: 'Basic' },
      'Job Scheduling': { them: false },
      'Online Booking': { them: false },
      'Invoicing': { them: true },
      'Online Payments': { them: true },
      'Automated Reminders': { them: true },
      'Email Marketing': { them: false },
      'SMS Marketing': { them: false },
      'AI Chatbot': { them: false },
      'AI Content Generation': { them: false },
      'Customer Portal': { them: true },
      'Fleet Management': { them: false },
      'Payroll': { them: false },
      'Commission Tracking': { them: false },
      'Unlimited Users': { them: false, note: 'Limited clients on lower plans' },
    }),
  },
  pricing: {
    ourPrice: 'From £49/month (unlimited everything)',
    theirPrice: 'From £12/month (limited clients)',
    savings: 'Unlimited clients and complete features',
  },
  limitations: {
    title: 'Where FreshBooks falls short',
    items: [
      {
        title: 'Invoicing only',
        description: 'No scheduling, no job management, no marketing. You need other tools.',
      },
      {
        title: 'Client limits',
        description: 'Lower plans cap the number of billable clients. Growth means upgrading.',
      },
      {
        title: 'No field service features',
        description: 'Can\'t manage jobs, track teams, or handle field operations.',
      },
      {
        title: 'No marketing tools',
        description: 'Want to send a newsletter? Need a separate subscription.',
      },
    ],
  },
  testimonial: {
    quote: 'FreshBooks was fine for invoicing but I was constantly switching between tools. Now ZuviaOne handles invoicing, scheduling, AND my email campaigns.',
    author: 'Lisa Johnson',
    role: 'Founder',
    company: 'Johnson Interior Design',
    previousTool: 'FreshBooks',
  },
});
