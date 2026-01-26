// Calendly Comparison Data

import type { CompetitorData } from '../../types';
import { createCompetitor, standardComparisonFeatures, customizeComparison } from '../_base';

export const calendly: CompetitorData = createCompetitor({
  slug: 'calendly',
  name: 'Calendly',
  category: 'scheduling',
  seo: {
    title: 'ZuviaOne vs Calendly | Booking Plus Complete Business Suite',
    description: 'Compare ZuviaOne to Calendly. Get booking plus CRM, invoicing, and marketing in one platform. More than just scheduling.',
    keywords: ['Calendly alternative', 'Calendly competitor', 'more than Calendly', 'Calendly vs', 'business scheduling'],
  },
  hero: {
    badge: 'vs Calendly',
    title: 'Calendly does scheduling.',
    highlight: 'You need a business.',
    description: 'Calendly is great for booking meetings. But you also need CRM, invoicing, and marketing. Why pay for five tools when one does it all?',
  },
  overview: {
    whatTheyDo: 'Calendly is a scheduling automation platform that simplifies booking meetings and appointments.',
    targetMarket: 'Professionals, sales teams, and businesses needing simple meeting scheduling.',
    founded: '2013',
    headquarters: 'Atlanta, USA',
  },
  comparison: {
    title: 'Feature comparison',
    description: 'Calendly does one thing. ZuviaOne does everything.',
    features: customizeComparison(standardComparisonFeatures, {
      'CRM & Contact Management': { them: false, note: 'Calendly is just scheduling' },
      'Job Scheduling': { them: true },
      'Online Booking': { them: true },
      'Invoicing': { them: false },
      'Online Payments': { them: 'Basic' },
      'Automated Reminders': { them: true },
      'Email Marketing': { them: false },
      'SMS Marketing': { them: 'Add-on' },
      'AI Chatbot': { them: false },
      'AI Content Generation': { them: false },
      'Customer Portal': { them: false },
      'Fleet Management': { them: false },
      'Payroll': { them: false },
      'Commission Tracking': { them: false },
      'Unlimited Users': { them: false, note: 'Per-seat pricing' },
    }),
  },
  pricing: {
    ourPrice: 'From £49/month (complete platform)',
    theirPrice: 'From $10/user/month (scheduling only)',
    savings: 'One platform vs multiple tools',
  },
  limitations: {
    title: 'Where Calendly falls short',
    items: [
      {
        title: 'Just scheduling',
        description: 'No CRM, no invoicing, no marketing. You need other tools for a complete business.',
      },
      {
        title: 'Per-seat pricing',
        description: 'Every team member costs extra. Teams get expensive fast.',
      },
      {
        title: 'No customer records',
        description: 'Calendly doesn\'t track customer history. Every booking is isolated.',
      },
      {
        title: 'No business workflows',
        description: 'Can\'t connect scheduling to invoicing, jobs, or customer management.',
      },
    ],
  },
  testimonial: {
    quote: 'I was using Calendly, FreshBooks, and Mailchimp. Three subscriptions, nothing connected. ZuviaOne replaced all three and everything just works together.',
    author: 'Emma Roberts',
    role: 'Consultant',
    company: 'Roberts Consulting',
    previousTool: 'Calendly',
  },
});
