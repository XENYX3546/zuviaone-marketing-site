// Jobber Comparison Data

import type { CompetitorData } from '../../types';
import { createCompetitor, standardComparisonFeatures, customizeComparison } from '../_base';

export const jobber: CompetitorData = createCompetitor({
  slug: 'jobber',
  name: 'Jobber',
  category: 'field-service',
  seo: {
    title: 'ZuviaOne vs Jobber | More Features, Better Value',
    description: 'Compare ZuviaOne to Jobber. More built-in features including marketing tools. See why businesses are switching from Jobber to ZuviaOne.',
    keywords: ['Jobber alternative', 'Jobber competitor', 'Jobber vs', 'better than Jobber', 'Jobber comparison'],
  },
  hero: {
    badge: 'vs Jobber',
    title: 'Jobber covers the basics.',
    highlight: 'You need more than basics.',
    description: 'Jobber is a solid field service tool, but it leaves marketing, payroll, and AI to other subscriptions. ZuviaOne includes everything.',
  },
  overview: {
    whatTheyDo: 'Jobber is a field service management platform for small to mid-sized home service businesses, focusing on scheduling, invoicing, and customer management.',
    targetMarket: 'Small home service businesses in North America looking for straightforward job management.',
    founded: '2011',
    headquarters: 'Edmonton, Canada',
  },
  comparison: {
    title: 'Feature comparison',
    description: 'See how ZuviaOne compares to Jobber.',
    features: customizeComparison(standardComparisonFeatures, {
      'CRM & Contact Management': { them: true },
      'Job Scheduling': { them: true },
      'Online Booking': { them: true },
      'Invoicing': { them: true },
      'Online Payments': { them: true },
      'Automated Reminders': { them: true },
      'Email Marketing': { them: false, note: 'Requires Mailchimp integration' },
      'SMS Marketing': { them: 'Limited' },
      'AI Chatbot': { them: false },
      'AI Content Generation': { them: false },
      'Customer Portal': { them: true },
      'Fleet Management': { them: false },
      'Payroll': { them: false },
      'Commission Tracking': { them: false },
      'Unlimited Users': { them: false, note: 'Per-user pricing on all plans' },
    }),
  },
  pricing: {
    ourPrice: 'From £49/month (unlimited users)',
    theirPrice: 'From $69/month (limited users)',
    savings: 'Better value with more features',
  },
  limitations: {
    title: 'Where Jobber falls short',
    items: [
      {
        title: 'No built-in marketing',
        description: 'Email campaigns, SMS marketing — you need separate tools and subscriptions.',
      },
      {
        title: 'Per-user pricing',
        description: 'Every team member adds to your monthly bill. Unlimited users? Not with Jobber.',
      },
      {
        title: 'No AI features',
        description: 'No AI chatbot for lead capture, no AI content generation. You\'re on your own.',
      },
      {
        title: 'North American focus',
        description: 'Currency, tax, and feature priorities skew toward US and Canadian businesses.',
      },
    ],
  },
  testimonial: {
    quote: 'We used Jobber for two years but kept needing other tools. ZuviaOne replaced Jobber plus Mailchimp plus our SMS tool. One bill, everything works together.',
    author: 'Sarah Thompson',
    role: 'Operations Manager',
    company: 'Thompson Cleaning Co',
    previousTool: 'Jobber',
  },
});
