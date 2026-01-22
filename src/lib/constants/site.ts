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
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
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
