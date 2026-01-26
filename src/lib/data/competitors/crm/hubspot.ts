// HubSpot Comparison Data

import type { CompetitorData } from '../../types';
import { createCompetitor, standardComparisonFeatures, customizeComparison } from '../_base';

export const hubspot: CompetitorData = createCompetitor({
  slug: 'hubspot',
  name: 'HubSpot',
  category: 'crm',
  seo: {
    title: 'ZuviaOne vs HubSpot | CRM Built for Service Businesses',
    description: 'Compare ZuviaOne to HubSpot. Get CRM plus field service, scheduling, and invoicing. Built for service businesses, not enterprise sales.',
    keywords: ['HubSpot alternative', 'HubSpot competitor', 'free HubSpot alternative', 'HubSpot vs', 'simple CRM'],
  },
  hero: {
    badge: 'vs HubSpot',
    title: 'HubSpot is built for sales teams.',
    highlight: 'You run a service business.',
    description: 'HubSpot is powerful enterprise CRM. But service businesses need scheduling, job management, and invoicing too. ZuviaOne is built for how you work.',
  },
  overview: {
    whatTheyDo: 'HubSpot is a comprehensive CRM platform offering marketing, sales, and service tools for businesses of all sizes.',
    targetMarket: 'B2B companies, sales teams, and marketing departments in mid-market to enterprise.',
    founded: '2006',
    headquarters: 'Cambridge, USA',
  },
  comparison: {
    title: 'Feature comparison',
    description: 'HubSpot does enterprise CRM. ZuviaOne does service business.',
    features: customizeComparison(standardComparisonFeatures, {
      'CRM & Contact Management': { them: true },
      'Job Scheduling': { them: false, note: 'Not designed for field service' },
      'Online Booking': { them: 'Add-on' },
      'Invoicing': { them: 'Integration required' },
      'Online Payments': { them: 'Integration required' },
      'Automated Reminders': { them: true },
      'Email Marketing': { them: true },
      'SMS Marketing': { them: 'Add-on' },
      'AI Chatbot': { them: true, note: 'Extra cost on paid plans' },
      'AI Content Generation': { them: true },
      'Customer Portal': { them: 'Enterprise only' },
      'Fleet Management': { them: false },
      'Payroll': { them: false },
      'Commission Tracking': { them: false },
      'Unlimited Users': { them: false, note: 'Per-seat on paid plans' },
    }),
  },
  pricing: {
    ourPrice: 'From £49/month (everything)',
    theirPrice: 'Free CRM, but £600+/month for features',
    savings: 'No hidden upgrade costs',
  },
  limitations: {
    title: 'Where HubSpot falls short',
    items: [
      {
        title: 'Enterprise complexity',
        description: 'Built for large sales teams with complex deals. Overkill for service businesses.',
      },
      {
        title: 'Expensive features',
        description: 'Free CRM is limited. Real functionality requires expensive paid plans.',
      },
      {
        title: 'No field service',
        description: 'Can\'t schedule jobs, track field teams, or manage service delivery.',
      },
      {
        title: 'Integration dependent',
        description: 'Need invoicing? Scheduling? You\'ll be connecting third-party tools.',
      },
    ],
  },
  testimonial: {
    quote: 'HubSpot was way too complicated for what we needed. ZuviaOne has CRM plus everything else we actually use — scheduling, invoicing, marketing. Much simpler.',
    author: 'Rachel Green',
    role: 'Owner',
    company: 'Green Cleaning Services',
    previousTool: 'HubSpot',
  },
});
