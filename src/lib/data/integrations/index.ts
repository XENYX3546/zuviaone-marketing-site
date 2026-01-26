// Integrations Index - All integration pages

import type { IntegrationData } from '../types';

export const integrations: Record<string, IntegrationData> = {
  'quickbooks': {
    slug: 'quickbooks',
    name: 'QuickBooks',
    category: 'accounting',
    color: '#2CA01C',
    seo: {
      title: 'QuickBooks Integration | Sync Invoices & Payments',
      description: 'Connect ZuviaOne to QuickBooks. Sync invoices, payments, and customers automatically. No double entry.',
      keywords: ['QuickBooks integration', 'QuickBooks sync', 'QuickBooks API', 'accounting integration'],
    },
    hero: {
      badge: 'Accounting Integration',
      title: 'QuickBooks',
      highlight: 'connected.',
      description: 'Invoices and payments sync to QuickBooks automatically. Your accountant gets clean data without any double entry.',
    },
    overview: {
      title: 'Why integrate with QuickBooks?',
      description: 'ZuviaOne handles operations, QuickBooks handles accounting. Together, they give you complete visibility.',
      benefits: [
        'Invoices sync automatically to QuickBooks',
        'Payments reconcile without manual matching',
        'Customer records stay in sync',
        'Your accountant loves you',
      ],
    },
    features: {
      title: 'What syncs',
      items: [
        { icon: 'file-text', title: 'Invoice sync', description: 'Invoices created in ZuviaOne appear in QuickBooks automatically.' },
        { icon: 'credit-card', title: 'Payment sync', description: 'Payments recorded in ZuviaOne reconcile in QuickBooks.' },
        { icon: 'users', title: 'Customer sync', description: 'Customer records stay consistent across both systems.' },
        { icon: 'tag', title: 'Category mapping', description: 'Map your services to QuickBooks chart of accounts.' },
      ],
    },
    sync: {
      title: 'How data flows',
      description: 'Two-way sync keeps everything current.',
      dataPoints: [
        { direction: 'push', label: 'Invoices', description: 'New invoices push to QuickBooks' },
        { direction: 'push', label: 'Payments', description: 'Payment confirmations push to QuickBooks' },
        { direction: 'sync', label: 'Customers', description: 'Customer data syncs both ways' },
        { direction: 'pull', label: 'Tax codes', description: 'Tax settings pull from QuickBooks' },
      ],
    },
    setup: {
      title: 'Setup in 5 minutes',
      steps: [
        { step: 1, title: 'Connect account', description: 'Authorize with your QuickBooks credentials.' },
        { step: 2, title: 'Map accounts', description: 'Choose which accounts invoices go to.' },
        { step: 3, title: 'Enable sync', description: 'Turn on automatic syncing.' },
      ],
      time: '5 minutes',
    },
    useCases: [
      { title: 'Clean books', description: 'Accountant sees accurate data without chasing paperwork.' },
      { title: 'Tax time ready', description: 'All income properly categorized for tax returns.' },
      { title: 'Real-time visibility', description: 'Financial reports include the latest transactions.' },
    ],
    cta: {
      title: 'Ready to connect QuickBooks?',
      description: 'Start your free trial and set up the integration.',
    },
  },

  'xero': {
    slug: 'xero',
    name: 'Xero',
    category: 'accounting',
    color: '#13B5EA',
    seo: {
      title: 'Xero Integration | Automatic Invoice Sync',
      description: 'Connect ZuviaOne to Xero. Sync invoices, payments, and contacts automatically. Beautiful cloud accounting.',
      keywords: ['Xero integration', 'Xero sync', 'Xero API', 'accounting sync'],
    },
    hero: {
      badge: 'Accounting Integration',
      title: 'Xero',
      highlight: 'in sync.',
      description: 'Your favourite cloud accounting software, automatically fed with invoice and payment data from ZuviaOne.',
    },
    overview: {
      title: 'Why integrate with Xero?',
      description: 'Xero is beautiful accounting software. ZuviaOne feeds it the data it needs automatically.',
      benefits: [
        'Invoices flow to Xero automatically',
        'Payments reconcile hands-free',
        'Contacts stay synchronized',
        'Reports always up to date',
      ],
    },
    features: {
      title: 'What syncs',
      items: [
        { icon: 'file-text', title: 'Invoice sync', description: 'Invoices appear in Xero as they\'re created.' },
        { icon: 'credit-card', title: 'Payment sync', description: 'Payments match to invoices automatically.' },
        { icon: 'users', title: 'Contact sync', description: 'Customer details stay consistent.' },
        { icon: 'percent', title: 'Tax handling', description: 'VAT calculated and categorized correctly.' },
      ],
    },
    sync: {
      title: 'How data flows',
      description: 'Real-time sync keeps Xero current.',
      dataPoints: [
        { direction: 'push', label: 'Invoices', description: 'Created invoices sync to Xero' },
        { direction: 'push', label: 'Payments', description: 'Payment records sync to Xero' },
        { direction: 'sync', label: 'Contacts', description: 'Contact data syncs both ways' },
        { direction: 'pull', label: 'Tax rates', description: 'Tax configuration from Xero' },
      ],
    },
    setup: {
      title: 'Quick setup',
      steps: [
        { step: 1, title: 'Authorize', description: 'Connect with your Xero credentials.' },
        { step: 2, title: 'Configure', description: 'Map accounts and tax settings.' },
        { step: 3, title: 'Activate', description: 'Turn on automatic sync.' },
      ],
      time: '5 minutes',
    },
    useCases: [
      { title: 'Streamlined accounting', description: 'No manual data entry for accountants.' },
      { title: 'Accurate VAT', description: 'VAT returns based on real transaction data.' },
      { title: 'Cash flow visibility', description: 'Real-time view of receivables.' },
    ],
    cta: {
      title: 'Ready to connect Xero?',
      description: 'Start your free trial and connect in minutes.',
    },
  },

  'stripe': {
    slug: 'stripe',
    name: 'Stripe',
    category: 'payments',
    color: '#635BFF',
    seo: {
      title: 'Stripe Integration | Accept Payments Online',
      description: 'Accept credit cards, bank transfers, and more with Stripe. Professional checkout, low fees, instant setup.',
      keywords: ['Stripe integration', 'Stripe payments', 'credit card payments', 'online payments'],
    },
    hero: {
      badge: 'Payment Integration',
      title: 'Stripe',
      highlight: 'payments.',
      description: 'Accept every payment method your customers want. Credit cards, bank transfers, Apple Pay, and more.',
    },
    overview: {
      title: 'Why Stripe?',
      description: 'Stripe powers millions of businesses worldwide. Reliable, secure, and packed with features.',
      benefits: [
        'All major cards accepted',
        'Bank transfers via Open Banking',
        'Apple Pay and Google Pay',
        'Instant payment confirmation',
      ],
    },
    features: {
      title: 'Payment features',
      items: [
        { icon: 'credit-card', title: 'Card payments', description: 'Visa, Mastercard, Amex, and more.' },
        { icon: 'building', title: 'Bank transfers', description: 'Open Banking for direct payments.' },
        { icon: 'smartphone', title: 'Mobile wallets', description: 'Apple Pay and Google Pay.' },
        { icon: 'repeat', title: 'Recurring billing', description: 'Automatic subscription payments.' },
      ],
    },
    sync: {
      title: 'How it works',
      description: 'Seamless payment flow.',
      dataPoints: [
        { direction: 'push', label: 'Payment requests', description: 'Invoice triggers payment link' },
        { direction: 'pull', label: 'Payment confirmation', description: 'Stripe confirms success' },
        { direction: 'sync', label: 'Refunds', description: 'Refunds processed and recorded' },
        { direction: 'push', label: 'Payouts', description: 'Money transferred to your bank' },
      ],
    },
    setup: {
      title: 'Get paid today',
      steps: [
        { step: 1, title: 'Connect Stripe', description: 'Link your Stripe account.' },
        { step: 2, title: 'Configure payouts', description: 'Set up your bank details.' },
        { step: 3, title: 'Start accepting', description: 'Payment links in every invoice.' },
      ],
      time: '10 minutes',
    },
    useCases: [
      { title: 'Invoice payments', description: 'One-click payment from invoice emails.' },
      { title: 'Deposits', description: 'Collect booking deposits automatically.' },
      { title: 'Subscriptions', description: 'Recurring payments for contracts.' },
    ],
    cta: {
      title: 'Ready to accept payments?',
      description: 'Connect Stripe and start getting paid.',
    },
  },

  'google-calendar': {
    slug: 'google-calendar',
    name: 'Google Calendar',
    category: 'calendar',
    color: '#4285F4',
    seo: {
      title: 'Google Calendar Integration | Two-Way Sync',
      description: 'Sync your ZuviaOne schedule with Google Calendar. See all appointments in one place, prevent double bookings.',
      keywords: ['Google Calendar integration', 'calendar sync', 'Google sync', 'appointment sync'],
    },
    hero: {
      badge: 'Calendar Integration',
      title: 'Google Calendar',
      highlight: 'synced.',
      description: 'Your ZuviaOne appointments appear in Google Calendar. Your Google events block availability in ZuviaOne.',
    },
    overview: {
      title: 'Why sync calendars?',
      description: 'See everything in one view. Block time across systems. Never double-book again.',
      benefits: [
        'All appointments in one calendar',
        'Personal events block business availability',
        'Team calendars stay coordinated',
        'Works on all your devices',
      ],
    },
    features: {
      title: 'Sync features',
      items: [
        { icon: 'refresh-cw', title: 'Two-way sync', description: 'Changes flow both directions.' },
        { icon: 'shield', title: 'Conflict prevention', description: 'Events block availability.' },
        { icon: 'users', title: 'Team calendars', description: 'Sync individual team members.' },
        { icon: 'smartphone', title: 'Mobile access', description: 'See appointments on any device.' },
      ],
    },
    sync: {
      title: 'How sync works',
      description: 'Real-time, two-way synchronization.',
      dataPoints: [
        { direction: 'push', label: 'Jobs', description: 'ZuviaOne jobs push to Google' },
        { direction: 'pull', label: 'Busy time', description: 'Google events block ZuviaOne' },
        { direction: 'sync', label: 'Changes', description: 'Updates sync both ways' },
        { direction: 'sync', label: 'Cancellations', description: 'Deletions sync both ways' },
      ],
    },
    setup: {
      title: 'Connect in seconds',
      steps: [
        { step: 1, title: 'Sign in to Google', description: 'Authorize with your Google account.' },
        { step: 2, title: 'Select calendars', description: 'Choose which calendars to sync.' },
        { step: 3, title: 'Enable sync', description: 'Appointments start syncing.' },
      ],
      time: '2 minutes',
    },
    useCases: [
      { title: 'Unified view', description: 'All appointments visible in Google Calendar.' },
      { title: 'Personal time', description: 'Block off personal events without sharing details.' },
      { title: 'Team coordination', description: 'Everyone sees the same schedule.' },
    ],
    cta: {
      title: 'Ready to sync?',
      description: 'Connect Google Calendar in your free trial.',
    },
  },

  'twilio': {
    slug: 'twilio',
    name: 'Twilio',
    category: 'communication',
    color: '#F22F46',
    seo: {
      title: 'Twilio Integration | SMS & Voice',
      description: 'Power SMS reminders and VoIP calling with Twilio. Reliable delivery, global reach, competitive rates.',
      keywords: ['Twilio integration', 'SMS integration', 'VoIP integration', 'business SMS'],
    },
    hero: {
      badge: 'Communication Integration',
      title: 'Twilio',
      highlight: 'powered.',
      description: 'Enterprise-grade SMS and voice powered by Twilio. Reliable delivery, global reach, used by the world\'s biggest companies.',
    },
    overview: {
      title: 'Why Twilio?',
      description: 'Twilio powers communication for the world\'s biggest companies. Rock-solid reliability.',
      benefits: [
        '98% SMS delivery rate',
        'HD voice quality',
        'Global reach to 180+ countries',
        'Enterprise reliability',
      ],
    },
    features: {
      title: 'Communication features',
      items: [
        { icon: 'message-square', title: 'SMS messaging', description: 'Send and receive text messages.' },
        { icon: 'phone', title: 'VoIP calling', description: 'Make and receive calls.' },
        { icon: 'voicemail', title: 'Voicemail', description: 'Professional voicemail system.' },
        { icon: 'globe', title: 'Global numbers', description: 'Local numbers in 100+ countries.' },
      ],
    },
    sync: {
      title: 'How it works',
      description: 'Twilio handles delivery, ZuviaOne handles workflow.',
      dataPoints: [
        { direction: 'push', label: 'Outbound SMS', description: 'Messages sent via Twilio' },
        { direction: 'pull', label: 'Inbound SMS', description: 'Replies received in ZuviaOne' },
        { direction: 'push', label: 'Outbound calls', description: 'Calls placed via Twilio' },
        { direction: 'pull', label: 'Call recordings', description: 'Recordings stored in ZuviaOne' },
      ],
    },
    setup: {
      title: 'Built-in',
      steps: [
        { step: 1, title: 'Choose your plan', description: 'SMS and voice included.' },
        { step: 2, title: 'Get your number', description: 'Local business number assigned.' },
        { step: 3, title: 'Start communicating', description: 'SMS and calls work immediately.' },
      ],
      time: 'Instant',
    },
    useCases: [
      { title: 'Appointment reminders', description: 'SMS reminders reduce no-shows.' },
      { title: 'Customer updates', description: 'On-the-way notifications.' },
      { title: 'Professional calls', description: 'VoIP from your business number.' },
    ],
    cta: {
      title: 'Ready for reliable communication?',
      description: 'Start your free trial with SMS and voice included.',
    },
  },

  'zapier': {
    slug: 'zapier',
    name: 'Zapier',
    category: 'automation',
    color: '#FF4A00',
    seo: {
      title: 'Zapier Integration | Connect to 5000+ Apps',
      description: 'Connect ZuviaOne to 5000+ apps with Zapier. Automate workflows across your entire tech stack.',
      keywords: ['Zapier integration', 'app integration', 'workflow automation', 'Zapier connection'],
    },
    hero: {
      badge: 'Automation Integration',
      title: 'Connect to',
      highlight: '5000+ apps.',
      description: 'Zapier connects ZuviaOne to thousands of other apps. Automate workflows across your entire tech stack.',
    },
    overview: {
      title: 'Why Zapier?',
      description: 'Connect ZuviaOne to virtually any other software. No coding required.',
      benefits: [
        '5000+ app connections',
        'No coding required',
        'Multi-step workflows',
        'Trigger on any event',
      ],
    },
    features: {
      title: 'Automation possibilities',
      items: [
        { icon: 'zap', title: 'Triggers', description: 'New bookings, customers, or invoices trigger actions.' },
        { icon: 'layers', title: 'Actions', description: 'Create records in other apps.' },
        { icon: 'git-branch', title: 'Multi-step', description: 'Chain multiple actions together.' },
        { icon: 'filter', title: 'Filters', description: 'Only trigger on matching conditions.' },
      ],
    },
    sync: {
      title: 'How it works',
      description: 'Events in ZuviaOne trigger actions elsewhere.',
      dataPoints: [
        { direction: 'push', label: 'New booking', description: 'Triggers actions in other apps' },
        { direction: 'push', label: 'New customer', description: 'Syncs to CRM, spreadsheets, etc.' },
        { direction: 'push', label: 'Invoice paid', description: 'Updates accounting, alerts, etc.' },
        { direction: 'pull', label: 'Form submissions', description: 'Create ZuviaOne records' },
      ],
    },
    setup: {
      title: 'Easy setup',
      steps: [
        { step: 1, title: 'Connect ZuviaOne', description: 'Add ZuviaOne to your Zapier account.' },
        { step: 2, title: 'Choose trigger', description: 'Select what starts the automation.' },
        { step: 3, title: 'Add actions', description: 'Define what happens in other apps.' },
      ],
      time: '5 minutes',
    },
    useCases: [
      { title: 'Spreadsheet sync', description: 'New bookings added to Google Sheets.' },
      { title: 'Slack notifications', description: 'Team alerted on new leads.' },
      { title: 'CRM updates', description: 'Customer data syncs to other CRMs.' },
    ],
    cta: {
      title: 'Ready to connect everything?',
      description: 'Start your free trial and connect via Zapier.',
    },
  },

  'google-my-business': {
    slug: 'google-my-business',
    name: 'Google Business Profile',
    category: 'marketing',
    color: '#4285F4',
    seo: {
      title: 'Google Business Profile Integration | Reviews & Booking',
      description: 'Connect your Google Business Profile for review collection and direct booking. Boost your local SEO.',
      keywords: ['Google Business integration', 'GMB integration', 'Google reviews', 'local SEO'],
    },
    hero: {
      badge: 'Marketing Integration',
      title: 'Google Business',
      highlight: 'connected.',
      description: 'Request reviews automatically, respond from one place, and let customers book directly from Google.',
    },
    overview: {
      title: 'Why integrate?',
      description: 'Your Google Business Profile is often the first thing customers see. Make it work harder.',
      benefits: [
        'More Google reviews automatically',
        'Respond to reviews from ZuviaOne',
        'Book directly from Google',
        'Boost local search ranking',
      ],
    },
    features: {
      title: 'Integration features',
      items: [
        { icon: 'star', title: 'Review requests', description: 'Automatically ask happy customers for reviews.' },
        { icon: 'message-square', title: 'Review responses', description: 'Respond to reviews from one place.' },
        { icon: 'calendar', title: 'Reserve with Google', description: 'Direct booking from search results.' },
        { icon: 'trending-up', title: 'Insights', description: 'Track views, clicks, and calls.' },
      ],
    },
    sync: {
      title: 'How it works',
      description: 'Your online presence, managed centrally.',
      dataPoints: [
        { direction: 'push', label: 'Review requests', description: 'Send review links to customers' },
        { direction: 'pull', label: 'Reviews', description: 'New reviews appear in ZuviaOne' },
        { direction: 'push', label: 'Responses', description: 'Reply to reviews from ZuviaOne' },
        { direction: 'pull', label: 'Bookings', description: 'Reserve with Google bookings' },
      ],
    },
    setup: {
      title: 'Connect your profile',
      steps: [
        { step: 1, title: 'Authorize', description: 'Connect your Google account.' },
        { step: 2, title: 'Select location', description: 'Choose your business profile.' },
        { step: 3, title: 'Enable features', description: 'Turn on reviews and booking.' },
      ],
      time: '3 minutes',
    },
    useCases: [
      { title: 'Reputation building', description: 'Systematic review collection.' },
      { title: 'Faster responses', description: 'Never miss a review.' },
      { title: 'Direct bookings', description: 'Customers book from Google.' },
    ],
    cta: {
      title: 'Ready to boost your Google presence?',
      description: 'Start your free trial and connect today.',
    },
  },
};

// Export helpers
export const integrationSlugs = Object.keys(integrations) as (keyof typeof integrations)[];
export type IntegrationSlug = keyof typeof integrations;

export function getIntegration(slug: string) {
  return integrations[slug as IntegrationSlug];
}

// Group by category
export const integrationsByCategory = {
  accounting: ['quickbooks', 'xero'],
  payments: ['stripe'],
  calendar: ['google-calendar'],
  communication: ['twilio'],
  automation: ['zapier'],
  marketing: ['google-my-business'],
} as const;
