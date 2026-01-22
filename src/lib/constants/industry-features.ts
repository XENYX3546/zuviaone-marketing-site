// Industry + Feature Content Matrix
// Provides customized messaging for each industry/feature combination

import { featurePageSlugs } from './feature-pages';
import { industrySlugs } from './industries';

export type IndustryFeatureContent = {
  headline: string;
  subheadline: string;
  benefits: string[];
  // Optional overrides for specific pain points
  painPoints?: Array<{
    problem: string;
    solution: string;
  }>;
};

// Feature keys mapped to URL slugs
export type FeatureKey = 'crm' | 'scheduling' | 'field-service' | 'invoicing' | 'communication' | 'automation' | 'customer-portal' | 'analytics';

// Default templates for each feature (used if no industry-specific content)
export const featureDefaults: Record<FeatureKey, { headlineTemplate: string; subheadlineTemplate: string; benefitTemplates: string[] }> = {
  crm: {
    headlineTemplate: 'CRM Software for {industry}',
    subheadlineTemplate: 'Manage your {customers}, track leads, and close more deals with a CRM built for {industryName}.',
    benefitTemplates: [
      'Never lose a lead again with automatic capture and follow-up',
      'See complete {customer} history at a glance',
      'Track every {job} from enquiry to completion',
      'Build lasting relationships that drive repeat business',
    ],
  },
  scheduling: {
    headlineTemplate: 'Scheduling Software for {industry}',
    subheadlineTemplate: 'Book more {jobs}, reduce no-shows, and keep your {team} organised with scheduling built for {industryName}.',
    benefitTemplates: [
      'Eliminate double bookings and scheduling conflicts',
      'Let {customers} book online 24/7',
      'Reduce no-shows by 90% with automatic reminders',
      'Optimise routes for your {team}',
    ],
  },
  'field-service': {
    headlineTemplate: 'Field Service Software for {industry}',
    subheadlineTemplate: 'Track your {team} in real-time, complete {jobs} faster, and deliver exceptional service every time.',
    benefitTemplates: [
      'Know where your {team} is and what they\'re working on',
      'Complete digital {job} cards with photos and signatures',
      'Reduce drive time with smart routing',
      'Delight {customers} with real-time arrival updates',
    ],
  },
  invoicing: {
    headlineTemplate: 'Invoicing Software for {industry}',
    subheadlineTemplate: 'Get paid faster with professional invoices, online payments, and automatic reminders built for {industryName}.',
    benefitTemplates: [
      'Create professional invoices in seconds',
      'Get paid 14 days faster with online payments',
      'Stop chasing payments with automatic reminders',
      'See exactly what\'s owed at a glance',
    ],
  },
  communication: {
    headlineTemplate: 'Communication Tools for {industry}',
    subheadlineTemplate: 'Never miss a {customer} message with email, SMS, and calls unified in one inbox.',
    benefitTemplates: [
      'Respond to enquiries faster than competitors',
      'Send automatic {appointment} confirmations and reminders',
      'Keep {customers} updated with on-the-way notifications',
      'Build trust with professional, consistent communication',
    ],
  },
  automation: {
    headlineTemplate: 'Automation for {industry}',
    subheadlineTemplate: 'Save hours every week by automating follow-ups, reminders, and repetitive tasks.',
    benefitTemplates: [
      'Automatically follow up with every lead',
      'Send review requests after completed {jobs}',
      'Trigger reminders for recurring {services}',
      'Scale your business without adding admin staff',
    ],
  },
  'customer-portal': {
    headlineTemplate: 'Customer Portal for {industry}',
    subheadlineTemplate: 'Let your {customers} book, pay, and communicate online — without calling you.',
    benefitTemplates: [
      'Cut phone calls in half with self-service',
      'Let {customers} book and pay 24/7',
      'Look more professional with a branded portal',
      'Reduce admin time and focus on {jobs}',
    ],
  },
  analytics: {
    headlineTemplate: 'Analytics for {industry}',
    subheadlineTemplate: 'See exactly how your {industryLower} business is performing with real-time dashboards and reports.',
    benefitTemplates: [
      'Know which {services} are most profitable',
      'Track {team} performance and productivity',
      'Forecast revenue and plan for busy periods',
      'Make data-driven decisions with confidence',
    ],
  },
};

// Industry-specific overrides for high-value combinations
// Only define these for combinations that need truly unique messaging
export const industryFeatureOverrides: Partial<Record<string, Partial<Record<FeatureKey, IndustryFeatureContent>>>> = {
  'carpet-cleaners': {
    crm: {
      headline: 'CRM Built for Carpet Cleaning Businesses',
      subheadline: 'Stop losing leads to voicemail. Capture every enquiry, follow up automatically, and turn more quotes into booked cleaning jobs.',
      benefits: [
        'Capture leads from your website, phone, and ads in one place',
        'Never forget a follow-up with automated sequences',
        'See full cleaning history for every customer',
        'Track which marketing channels bring the best jobs',
      ],
    },
    scheduling: {
      headline: 'Scheduling Software for Carpet Cleaners',
      subheadline: 'Book more cleaning jobs without the back-and-forth. Let customers book online and keep your team\'s calendar organised.',
      benefits: [
        'Let customers book carpet cleaning online 24/7',
        'Optimise routes so your team cleans more homes per day',
        'Send automatic appointment reminders via SMS',
        'Manage multiple technicians from one calendar',
      ],
    },
  },
  'plumbers': {
    crm: {
      headline: 'CRM Software for Plumbers',
      subheadline: 'From emergency callouts to planned work, track every customer and never miss a follow-up opportunity.',
      benefits: [
        'Log every customer interaction and job history',
        'Set follow-up reminders for annual boiler services',
        'Track quotes and convert more enquiries',
        'Build repeat business with relationship tracking',
      ],
    },
    'field-service': {
      headline: 'Field Service Software for Plumbers',
      subheadline: 'Dispatch emergency callouts instantly, track your plumbers in real-time, and complete jobs paperlessly.',
      benefits: [
        'Dispatch the nearest available plumber for emergencies',
        'Digital job cards with photos of completed work',
        'Track parts used and update stock automatically',
        'Send customers ETA updates and completion notifications',
      ],
    },
  },
  'electricians': {
    crm: {
      headline: 'CRM for Electrical Contractors',
      subheadline: 'Manage customer relationships, track job history, and never forget a certification renewal date.',
      benefits: [
        'Complete customer and property history at your fingertips',
        'Track EICR due dates and send automatic reminders',
        'Log all certificates and documentation per property',
        'Convert more quotes with timely follow-ups',
      ],
    },
    invoicing: {
      headline: 'Invoicing for Electricians',
      subheadline: 'Invoice on completion, attach certificates, and get paid faster with professional invoices your customers trust.',
      benefits: [
        'Attach EICR and compliance certificates to invoices',
        'Create professional quotes that convert',
        'Accept card payments on-site',
        'Track parts and labour costs accurately',
      ],
    },
  },
  'hvac': {
    scheduling: {
      headline: 'Scheduling for HVAC Contractors',
      subheadline: 'Manage seasonal demand, track maintenance contracts, and keep your technicians productive year-round.',
      benefits: [
        'Schedule annual boiler services automatically',
        'Handle seasonal rush with capacity planning',
        'Track maintenance contract renewals',
        'Balance emergency callouts with planned work',
      ],
    },
    automation: {
      headline: 'Automation for HVAC Businesses',
      subheadline: 'Automate service reminders, follow-ups, and contract renewals to maximise recurring revenue.',
      benefits: [
        'Send annual service reminders automatically',
        'Follow up on quotes without manual effort',
        'Trigger contract renewal notices before expiry',
        'Automate customer feedback collection',
      ],
    },
  },
  'cleaning-services': {
    scheduling: {
      headline: 'Scheduling for Cleaning Companies',
      subheadline: 'Manage weekly, fortnightly, and one-off cleans across hundreds of clients without the spreadsheet chaos.',
      benefits: [
        'Handle recurring schedules for hundreds of clients',
        'Reassign cleans instantly when staff call in sick',
        'Plan efficient routes to reduce travel time',
        'Let clients reschedule themselves via the portal',
      ],
    },
    'customer-portal': {
      headline: 'Customer Portal for Cleaning Services',
      subheadline: 'Let your clients book cleans, manage their schedule, and pay invoices — all without phoning you.',
      benefits: [
        'Clients can book, reschedule, and skip cleans online',
        'Reduce phone calls by 50% or more',
        'Collect payments automatically on a recurring basis',
        'Share cleaning checklists and completion photos',
      ],
    },
  },
  'landscapers': {
    crm: {
      headline: 'CRM for Landscaping Businesses',
      subheadline: 'Track every property, project, and client relationship so you never lose a maintenance contract.',
      benefits: [
        'Log property details, access codes, and preferences',
        'Track project history and photos over time',
        'Set renewal reminders for annual contracts',
        'Identify upsell opportunities at each property',
      ],
    },
    'field-service': {
      headline: 'Field Service for Landscaping Crews',
      subheadline: 'Manage multiple crews across dozens of sites with real-time visibility and digital job completion.',
      benefits: [
        'Track crew locations across multiple sites',
        'Complete digital job sheets with before/after photos',
        'Log materials used at each property',
        'Handle weather cancellations and rescheduling easily',
      ],
    },
  },
};

// Helper function to get content for an industry + feature combination
export function getIndustryFeatureContent(
  industrySlug: string,
  featureSlug: string,
  industryData: { name: string; terminology: Record<string, string> }
): IndustryFeatureContent {
  const featureKey = featureSlug as FeatureKey;

  // Check for override first
  const override = industryFeatureOverrides[industrySlug]?.[featureKey];
  if (override) {
    return override;
  }

  // Fall back to templates
  const template = featureDefaults[featureKey];
  if (!template) {
    return {
      headline: `${featureSlug} for ${industryData.name}s`,
      subheadline: `Powerful ${featureSlug} tools built for your business.`,
      benefits: [],
    };
  }

  // Replace placeholders with industry-specific terms
  const replacePlaceholders = (text: string): string => {
    return text
      .replace(/{industry}/g, `${industryData.name  }s`)
      .replace(/{industryName}/g, `${industryData.name.toLowerCase()  }s`)
      .replace(/{industryLower}/g, industryData.name.toLowerCase())
      .replace(/{customer}/g, industryData.terminology.customer)
      .replace(/{customers}/g, industryData.terminology.customers)
      .replace(/{job}/g, industryData.terminology.job)
      .replace(/{jobs}/g, industryData.terminology.jobs)
      .replace(/{service}/g, industryData.terminology.service)
      .replace(/{services}/g, industryData.terminology.services)
      .replace(/{appointment}/g, industryData.terminology.appointment)
      .replace(/{team}/g, industryData.terminology.team)
      .replace(/{technician}/g, industryData.terminology.technician);
  };

  return {
    headline: replacePlaceholders(template.headlineTemplate),
    subheadline: replacePlaceholders(template.subheadlineTemplate),
    benefits: template.benefitTemplates.map(replacePlaceholders),
  };
}

// Get all valid industry + feature combinations for static generation
export function getAllIndustryFeatureCombinations(): Array<{ industry: string; feature: string }> {
  const combinations: Array<{ industry: string; feature: string }> = [];

  for (const industry of industrySlugs) {
    for (const feature of featurePageSlugs) {
      combinations.push({ industry, feature });
    }
  }

  return combinations;
}
