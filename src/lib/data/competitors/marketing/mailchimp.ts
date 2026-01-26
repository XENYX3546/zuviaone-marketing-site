// Mailchimp Comparison Data

import type { CompetitorData } from '../../types';
import { createCompetitor, standardComparisonFeatures, customizeComparison } from '../_base';

export const mailchimp: CompetitorData = createCompetitor({
  slug: 'mailchimp',
  name: 'Mailchimp',
  category: 'marketing',
  seo: {
    title: 'ZuviaOne vs Mailchimp | Marketing Built Into Your Business',
    description: 'Compare ZuviaOne to Mailchimp. Get email marketing plus CRM, scheduling, and invoicing. Marketing connected to your operations.',
    keywords: ['Mailchimp alternative', 'Mailchimp competitor', 'free Mailchimp alternative', 'Mailchimp vs'],
  },
  hero: {
    badge: 'vs Mailchimp',
    title: 'Mailchimp sends emails.',
    highlight: 'Emails need context.',
    description: 'Mailchimp is powerful email marketing. But your emails work better when connected to your CRM, bookings, and customer data. ZuviaOne connects everything.',
  },
  overview: {
    whatTheyDo: 'Mailchimp is an email marketing and automation platform offering newsletters, campaigns, and marketing automation.',
    targetMarket: 'Businesses of all sizes needing email marketing and automation.',
    founded: '2001',
    headquarters: 'Atlanta, USA',
  },
  comparison: {
    title: 'Feature comparison',
    description: 'Mailchimp markets. ZuviaOne runs your business.',
    features: customizeComparison(standardComparisonFeatures, {
      'CRM & Contact Management': { them: 'Basic', note: 'Marketing contacts only' },
      'Job Scheduling': { them: false },
      'Online Booking': { them: false },
      'Invoicing': { them: false },
      'Online Payments': { them: false },
      'Automated Reminders': { them: true, note: 'Email only' },
      'Email Marketing': { them: true },
      'SMS Marketing': { them: 'Add-on' },
      'AI Chatbot': { them: false },
      'AI Content Generation': { them: 'Limited' },
      'Customer Portal': { them: false },
      'Fleet Management': { them: false },
      'Payroll': { them: false },
      'Commission Tracking': { them: false },
      'Unlimited Users': { them: false },
    }),
  },
  pricing: {
    ourPrice: 'From £49/month (marketing included)',
    theirPrice: 'From free (limited) to £250+/month',
    savings: 'Marketing built-in, no separate cost',
  },
  limitations: {
    title: 'Where Mailchimp falls short',
    items: [
      {
        title: 'Marketing only',
        description: 'No CRM, no scheduling, no invoicing. You need other business tools.',
      },
      {
        title: 'Disconnected from operations',
        description: 'Mailchimp doesn\'t know about your bookings, jobs, or invoices.',
      },
      {
        title: 'Expensive at scale',
        description: 'Pricing based on contacts. Growing your list gets expensive fast.',
      },
      {
        title: 'Another system to manage',
        description: 'One more login, one more subscription, one more data silo.',
      },
    ],
  },
  testimonial: {
    quote: 'Mailchimp was a separate world from my business. Now my marketing in ZuviaOne automatically segments based on booking history and job types. Much smarter.',
    author: 'Tom Baker',
    role: 'Director',
    company: 'Baker Landscaping',
    previousTool: 'Mailchimp',
  },
});
