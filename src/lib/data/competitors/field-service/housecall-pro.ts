// Housecall Pro Comparison Data

import type { CompetitorData } from '../../types';
import { createCompetitor, standardComparisonFeatures, customizeComparison } from '../_base';

export const housecallPro: CompetitorData = createCompetitor({
  slug: 'housecall-pro',
  name: 'Housecall Pro',
  category: 'field-service',
  seo: {
    title: 'ZuviaOne vs Housecall Pro | Complete Business Platform',
    description: 'Compare ZuviaOne to Housecall Pro. More features, UK-focused, better value. See why UK businesses choose ZuviaOne.',
    keywords: ['Housecall Pro alternative', 'Housecall Pro competitor', 'Housecall Pro vs', 'better than Housecall Pro'],
  },
  hero: {
    badge: 'vs Housecall Pro',
    title: 'Housecall Pro is good.',
    highlight: 'ZuviaOne is better.',
    description: 'Housecall Pro handles the basics well, but ZuviaOne goes further with AI, marketing, and features built for UK businesses.',
  },
  overview: {
    whatTheyDo: 'Housecall Pro is a field service management app for home service businesses, offering scheduling, invoicing, and payment processing.',
    targetMarket: 'Small home service businesses primarily in the United States.',
    founded: '2013',
    headquarters: 'San Diego, USA',
  },
  comparison: {
    title: 'Feature comparison',
    description: 'See how ZuviaOne compares to Housecall Pro.',
    features: customizeComparison(standardComparisonFeatures, {
      'CRM & Contact Management': { them: true },
      'Job Scheduling': { them: true },
      'Online Booking': { them: true },
      'Invoicing': { them: true },
      'Online Payments': { them: true },
      'Automated Reminders': { them: true },
      'Email Marketing': { them: 'Add-on', note: 'Extra monthly cost' },
      'SMS Marketing': { them: 'Add-on' },
      'AI Chatbot': { them: false },
      'AI Content Generation': { them: false },
      'Customer Portal': { them: true },
      'Fleet Management': { them: false },
      'Payroll': { them: false },
      'Commission Tracking': { them: false },
      'Unlimited Users': { them: false },
    }),
  },
  pricing: {
    ourPrice: 'From £49/month',
    theirPrice: 'From $65/month + add-ons',
    savings: 'Save on add-ons you get free',
  },
  limitations: {
    title: 'Where Housecall Pro falls short',
    items: [
      {
        title: 'Add-on heavy pricing',
        description: 'Marketing tools, additional features — everything beyond basics costs extra.',
      },
      {
        title: 'US-focused platform',
        description: 'Built for American businesses. UK tax, compliance, and support are afterthoughts.',
      },
      {
        title: 'No AI capabilities',
        description: 'No AI chatbot, no AI content generation. Miss out on automation that saves hours.',
      },
      {
        title: 'Limited marketing tools',
        description: 'Basic email at best. No comprehensive marketing suite like ZuviaOne offers.',
      },
    ],
  },
  testimonial: {
    quote: 'Housecall Pro worked okay but felt very American. ZuviaOne understands UK businesses and the support is actually in our timezone.',
    author: 'David Williams',
    role: 'Director',
    company: 'Williams Electrical',
    previousTool: 'Housecall Pro',
  },
});
