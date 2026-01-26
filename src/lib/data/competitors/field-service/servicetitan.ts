// ServiceTitan Comparison Data

import type { CompetitorData } from '../../types';
import { createCompetitor, standardComparisonFeatures, customizeComparison } from '../_base';

export const servicetitan: CompetitorData = createCompetitor({
  slug: 'servicetitan',
  name: 'ServiceTitan',
  category: 'field-service',
  seo: {
    title: 'ZuviaOne vs ServiceTitan | Better Alternative for Small Business',
    description: 'Compare ZuviaOne to ServiceTitan. More features, lower cost, easier to use. See why growing businesses choose ZuviaOne over ServiceTitan.',
    keywords: ['ServiceTitan alternative', 'ServiceTitan competitor', 'ServiceTitan vs', 'cheaper than ServiceTitan', 'ServiceTitan comparison'],
  },
  hero: {
    badge: 'vs ServiceTitan',
    title: 'ServiceTitan is built for enterprise.',
    highlight: 'You\'re not enterprise.',
    description: 'ServiceTitan is powerful but complex and expensive. ZuviaOne delivers the features you need at a price that makes sense.',
  },
  overview: {
    whatTheyDo: 'ServiceTitan is an enterprise field service management platform targeting large HVAC, plumbing, and electrical contractors with complex operations.',
    targetMarket: 'Large contractors with 50+ employees and significant software budgets. Minimum contracts often start at $5,000+/month.',
    founded: '2012',
    headquarters: 'Los Angeles, USA',
  },
  comparison: {
    title: 'Feature comparison',
    description: 'See how ZuviaOne stacks up against ServiceTitan.',
    features: customizeComparison(standardComparisonFeatures, {
      'CRM & Contact Management': { them: true },
      'Job Scheduling': { them: true },
      'Online Booking': { them: true },
      'Invoicing': { them: true },
      'Online Payments': { them: true },
      'Automated Reminders': { them: true },
      'Email Marketing': { them: 'Add-on', note: 'We include it free' },
      'SMS Marketing': { them: 'Add-on' },
      'AI Chatbot': { them: false },
      'Customer Portal': { them: true },
      'Fleet Management': { them: true },
      'Payroll': { them: false },
      'Unlimited Users': { them: false, note: 'Per-user pricing adds up fast' },
    }),
  },
  pricing: {
    ourPrice: 'From £49/month',
    theirPrice: 'From $5,000+/month',
    savings: 'Save £4,000+/month',
  },
  limitations: {
    title: 'Where ServiceTitan falls short',
    items: [
      {
        title: 'Enterprise pricing',
        description: 'Minimum contracts often exceed $5,000/month with long-term commitments required.',
      },
      {
        title: 'Complex implementation',
        description: 'Typical implementation takes 3-6 months and requires dedicated project management.',
      },
      {
        title: 'Per-user pricing',
        description: 'Every additional user adds significant cost. Office staff, field techs — they all cost extra.',
      },
      {
        title: 'US-focused',
        description: 'Built primarily for the US market with limited UK-specific features and support.',
      },
    ],
  },
  testimonial: {
    quote: 'We looked at ServiceTitan but the price was insane for a business our size. ZuviaOne does everything we need at a tenth of the cost.',
    author: 'James Mitchell',
    role: 'Owner',
    company: 'Mitchell Plumbing Services',
    previousTool: 'ServiceTitan',
  },
});
