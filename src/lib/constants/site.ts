// Site Configuration - Business info and external links

export const siteConfig = {
  name: 'ZuviaOne',
  legalName: 'Zuvia Software Solutions Limited',
  description: 'The everything app for business. CRM, field service management, scheduling, invoicing, and more — all in one powerful platform.',
  url: 'https://zuviaone.com',
  appUrl: 'https://app.zuviaone.com',
  contact: {
    phone: '0333 360 8963',
    email: 'support@zuviaone.com',
  },
  social: {
    twitter: 'https://twitter.com/zuviaone',
    linkedin: 'https://linkedin.com/company/zuviaone',
  },
} as const;

export const navigation = {
  main: [
    { label: 'Features', href: '/features' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
  ],
  features: [
    { label: 'CRM', href: '/features/crm' },
    { label: 'Scheduling', href: '/features/scheduling' },
    { label: 'Field Service', href: '/features/field-service' },
    { label: 'Invoicing', href: '/features/invoicing' },
    { label: 'Communication', href: '/features/communication' },
    { label: 'Automation', href: '/features/automation' },
    { label: 'Customer Portal', href: '/features/customer-portal' },
    { label: 'Analytics', href: '/features/analytics' },
  ],
  solutions: [
    { label: 'Stop Double Bookings', href: '/solutions/stop-double-bookings' },
    { label: 'Reduce No-Shows', href: '/solutions/reduce-no-shows' },
    { label: 'Get Paid Faster', href: '/solutions/get-paid-faster' },
    { label: 'Stop Missing Calls', href: '/solutions/stop-missing-calls' },
    { label: 'Automate Follow-Ups', href: '/solutions/automate-follow-ups' },
    { label: 'Capture More Leads', href: '/solutions/capture-more-leads' },
    { label: 'Eliminate Paperwork', href: '/solutions/eliminate-paperwork' },
    { label: 'Track Your Team', href: '/solutions/track-your-team' },
    { label: 'Scale Your Business', href: '/solutions/scale-your-business' },
    { label: 'Fix Cash Flow', href: '/solutions/fix-cash-flow' },
  ],
  integrations: [
    { label: 'QuickBooks', href: '/integrations/quickbooks' },
    { label: 'Xero', href: '/integrations/xero' },
    { label: 'Stripe', href: '/integrations/stripe' },
    { label: 'Google Calendar', href: '/integrations/google-calendar' },
    { label: 'Twilio', href: '/integrations/twilio' },
    { label: 'Zapier', href: '/integrations/zapier' },
    { label: 'Google My Business', href: '/integrations/google-my-business' },
  ],
  compare: [
    { label: 'vs ServiceTitan', href: '/vs/servicetitan' },
    { label: 'vs Jobber', href: '/vs/jobber' },
    { label: 'vs Housecall Pro', href: '/vs/housecall-pro' },
    { label: 'vs Calendly', href: '/vs/calendly' },
    { label: 'vs QuickBooks', href: '/vs/quickbooks' },
    { label: 'vs FreshBooks', href: '/vs/freshbooks' },
    { label: 'vs Mailchimp', href: '/vs/mailchimp' },
    { label: 'vs HubSpot', href: '/vs/hubspot' },
  ],
  templates: [
    { label: 'New Lead Follow-Up', href: '/templates/new-lead-follow-up' },
    { label: 'Booking Confirmation', href: '/templates/booking-confirmation' },
    { label: 'Invoice Reminder', href: '/templates/invoice-reminder' },
    { label: 'Review Request', href: '/templates/review-request' },
    { label: 'Appointment Reminder', href: '/templates/appointment-reminder' },
    { label: 'Quote Follow-Up', href: '/templates/quote-follow-up' },
    { label: 'Customer Onboarding', href: '/templates/customer-onboarding' },
    { label: 'Win-Back Campaign', href: '/templates/win-back-campaign' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
  ],
} as const;

export const ctaLinks = {
  signUp: `${siteConfig.appUrl}/auth/signup`,
  login: `${siteConfig.appUrl}/auth/login`,
  demo: `${siteConfig.appUrl}/auth/signup?demo=true`,
} as const;
