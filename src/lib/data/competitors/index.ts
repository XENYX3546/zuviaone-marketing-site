// Competitors Index - Aggregates all competitor data

// Re-export types
export type { CompetitorData, ComparisonFeature, AlternativePageData } from '../types';

// Import competitors by category
import { servicetitan } from './field-service/servicetitan';
import { jobber } from './field-service/jobber';
import { housecallPro } from './field-service/housecall-pro';
import { calendly } from './scheduling/calendly';
import { quickbooks } from './invoicing/quickbooks';
import { freshbooks } from './invoicing/freshbooks';
import { mailchimp } from './marketing/mailchimp';
import { hubspot } from './crm/hubspot';

// Aggregate all competitors
export const competitors = {
  // Field Service
  'servicetitan': servicetitan,
  'jobber': jobber,
  'housecall-pro': housecallPro,

  // Scheduling
  'calendly': calendly,

  // Invoicing
  'quickbooks': quickbooks,
  'freshbooks': freshbooks,

  // Marketing
  'mailchimp': mailchimp,

  // CRM
  'hubspot': hubspot,
} as const;

// Export slug list
export const competitorSlugs = Object.keys(competitors) as (keyof typeof competitors)[];

// Type for competitor slugs
export type CompetitorSlug = keyof typeof competitors;

// Helper function to get competitor by slug
export function getCompetitor(slug: string) {
  return competitors[slug as CompetitorSlug];
}

// Group competitors by category
export const competitorsByCategory = {
  'field-service': ['servicetitan', 'jobber', 'housecall-pro'],
  'scheduling': ['calendly'],
  'invoicing': ['quickbooks', 'freshbooks'],
  'marketing': ['mailchimp'],
  'crm': ['hubspot'],
} as const;

// Alternative page data (simpler pages)
export const alternatives = {
  'servicetitan-alternative': {
    slug: 'servicetitan-alternative',
    competitor: 'ServiceTitan',
    seo: {
      title: 'Best ServiceTitan Alternative 2024 | ZuviaOne',
      description: 'Looking for a ServiceTitan alternative? ZuviaOne offers similar features at a fraction of the cost. Perfect for small to mid-size businesses.',
      keywords: ['ServiceTitan alternative', 'cheaper than ServiceTitan', 'ServiceTitan replacement'],
    },
    reasons: [
      { title: 'Affordable pricing', description: 'Starting from £49/month vs $5,000+/month with ServiceTitan.' },
      { title: 'No long contracts', description: 'Month-to-month billing. Cancel anytime.' },
      { title: 'Faster setup', description: 'Get started in days, not months of implementation.' },
      { title: 'UK-focused', description: 'Built for UK businesses with local support.' },
    ],
  },
  'jobber-alternative': {
    slug: 'jobber-alternative',
    competitor: 'Jobber',
    seo: {
      title: 'Best Jobber Alternative 2024 | ZuviaOne',
      description: 'Looking for a Jobber alternative? ZuviaOne includes marketing tools, unlimited users, and more features at similar pricing.',
      keywords: ['Jobber alternative', 'better than Jobber', 'Jobber replacement'],
    },
    reasons: [
      { title: 'Built-in marketing', description: 'Email and SMS marketing included, not extra subscriptions.' },
      { title: 'Unlimited users', description: 'No per-user pricing eating into your budget.' },
      { title: 'AI features', description: 'Chatbot and content generation that Jobber doesn\'t offer.' },
      { title: 'UK-focused', description: 'Designed for UK businesses, not North American.' },
    ],
  },
  'housecall-pro-alternative': {
    slug: 'housecall-pro-alternative',
    competitor: 'Housecall Pro',
    seo: {
      title: 'Best Housecall Pro Alternative 2024 | ZuviaOne',
      description: 'Looking for a Housecall Pro alternative? ZuviaOne offers more features, UK focus, and better value.',
      keywords: ['Housecall Pro alternative', 'better than Housecall Pro', 'Housecall Pro replacement'],
    },
    reasons: [
      { title: 'More complete platform', description: 'Payroll, fleet management, AI — features Housecall Pro lacks.' },
      { title: 'UK-built', description: 'Designed for UK businesses, tax, and compliance.' },
      { title: 'Marketing included', description: 'No add-on costs for email and SMS marketing.' },
      { title: 'Better support', description: 'UK-based support in your timezone.' },
    ],
  },
} as const;

export const alternativeSlugs = Object.keys(alternatives) as (keyof typeof alternatives)[];
export type AlternativeSlug = keyof typeof alternatives;
