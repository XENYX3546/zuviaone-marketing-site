// Templates Index - Automation and email templates

import type { TemplateData } from '../types';

export const templates: Record<string, TemplateData> = {
  // Automation Templates
  'new-lead-follow-up': {
    slug: 'new-lead-follow-up',
    name: 'New Lead Follow-Up',
    category: 'automation',
    seo: {
      title: 'New Lead Follow-Up Template | Automated Sequences',
      description: 'Automated follow-up sequence for new leads. Email and SMS nurture until they book or go cold.',
      keywords: ['lead follow-up', 'lead nurture', 'automated follow-up', 'lead sequence'],
    },
    hero: {
      badge: 'Automation Template',
      title: 'New Lead',
      highlight: 'Follow-Up',
      description: 'Automated email and SMS sequence that nurtures new leads until they book or go cold. Never forget a follow-up again.',
    },
    overview: {
      title: 'What this template does',
      description: 'When a new lead comes in, this workflow automatically sends a series of follow-up messages over 14 days.',
      useCases: [
        'Website form submissions',
        'Phone enquiries',
        'Quote requests',
        'Chat conversations',
      ],
    },
    features: {
      title: 'Sequence steps',
      items: [
        { title: 'Instant acknowledgment', description: 'Email within 5 minutes thanking them for getting in touch.' },
        { title: 'Day 1 SMS', description: 'Personal text message introducing yourself.' },
        { title: 'Day 3 email', description: 'Value-add email with helpful information.' },
        { title: 'Day 7 check-in', description: 'Friendly follow-up asking if they have questions.' },
        { title: 'Day 14 last chance', description: 'Final message before marking cold.' },
      ],
    },
    customization: {
      title: 'Make it yours',
      options: [
        { label: 'Timing', description: 'Adjust delays between messages.' },
        { label: 'Content', description: 'Edit message copy to match your voice.' },
        { label: 'Channels', description: 'Choose email, SMS, or both.' },
        { label: 'Conditions', description: 'Stop sequence when they reply or book.' },
      ],
    },
    howToUse: {
      title: 'How to use this template',
      steps: [
        { step: 1, title: 'Install template', description: 'One click to add to your automations.' },
        { step: 2, title: 'Customize messages', description: 'Edit copy to match your brand.' },
        { step: 3, title: 'Activate', description: 'Turn on and watch leads get followed up.' },
      ],
    },
    industries: ['All industries'],
    relatedTemplates: ['quote-follow-up', 'customer-onboarding'],
    cta: {
      title: 'Ready to automate lead follow-up?',
      description: 'Start your free trial to access this template.',
    },
  },

  'booking-confirmation': {
    slug: 'booking-confirmation',
    name: 'Booking Confirmation',
    category: 'automation',
    seo: {
      title: 'Booking Confirmation Template | Automated Messages',
      description: 'Automatic booking confirmation with all the details. Professional email and SMS sent instantly.',
      keywords: ['booking confirmation', 'appointment confirmation', 'booking email', 'confirmation template'],
    },
    hero: {
      badge: 'Automation Template',
      title: 'Booking',
      highlight: 'Confirmation',
      description: 'Professional confirmation messages sent instantly when bookings are made. Email with full details, SMS for quick reference.',
    },
    overview: {
      title: 'What this template does',
      description: 'Automatically sends professional confirmation when any booking is created, with all the details customers need.',
      useCases: [
        'Service appointments',
        'Consultation bookings',
        'Job scheduling',
        'Recurring appointments',
      ],
    },
    features: {
      title: 'What\'s included',
      items: [
        { title: 'Instant email', description: 'Detailed confirmation with date, time, address, and what to expect.' },
        { title: 'SMS summary', description: 'Quick text with essential details.' },
        { title: 'Calendar invite', description: 'ICS file for easy calendar addition.' },
        { title: 'Reschedule link', description: 'Easy way to change the appointment if needed.' },
      ],
    },
    customization: {
      title: 'Make it yours',
      options: [
        { label: 'Branding', description: 'Your logo, colours, and contact details.' },
        { label: 'Instructions', description: 'Add preparation instructions for customers.' },
        { label: 'Attachments', description: 'Include forms or documents.' },
        { label: 'Timing', description: 'Send immediately or with a delay.' },
      ],
    },
    howToUse: {
      title: 'How to use this template',
      steps: [
        { step: 1, title: 'Install template', description: 'Add to your booking confirmations.' },
        { step: 2, title: 'Add your details', description: 'Customize with your business info.' },
        { step: 3, title: 'Activate', description: 'Every booking triggers confirmation.' },
      ],
    },
    industries: ['All service businesses'],
    relatedTemplates: ['appointment-reminder', 'post-service-review'],
    cta: {
      title: 'Ready for professional confirmations?',
      description: 'Start your free trial to access this template.',
    },
  },

  'invoice-reminder': {
    slug: 'invoice-reminder',
    name: 'Invoice Payment Reminder',
    category: 'automation',
    seo: {
      title: 'Invoice Reminder Template | Automated Payment Chasing',
      description: 'Automatic payment reminders at 7, 14, and 30 days. Professional, persistent, effective.',
      keywords: ['invoice reminder', 'payment reminder', 'overdue invoice', 'payment chasing'],
    },
    hero: {
      badge: 'Automation Template',
      title: 'Invoice',
      highlight: 'Reminders',
      description: 'Automated payment reminders that chase professionally for you. Sent at 7, 14, and 30 days overdue.',
    },
    overview: {
      title: 'What this template does',
      description: 'When invoices go overdue, this workflow sends increasingly urgent reminders until paid.',
      useCases: [
        'All invoice types',
        'Recurring invoices',
        'Large projects',
        'Regular customers',
      ],
    },
    features: {
      title: 'Reminder sequence',
      items: [
        { title: 'Day 7 gentle nudge', description: 'Friendly reminder that payment is due.' },
        { title: 'Day 14 firmer reminder', description: 'Clear request for payment.' },
        { title: 'Day 30 urgent notice', description: 'Final reminder before further action.' },
        { title: 'Payment link', description: 'One-click payment in every message.' },
      ],
    },
    customization: {
      title: 'Make it yours',
      options: [
        { label: 'Timing', description: 'Adjust reminder schedule.' },
        { label: 'Tone', description: 'Match your relationship style.' },
        { label: 'Escalation', description: 'Add phone call tasks for late payments.' },
        { label: 'Exclusions', description: 'Skip reminders for VIP customers.' },
      ],
    },
    howToUse: {
      title: 'How to use this template',
      steps: [
        { step: 1, title: 'Install template', description: 'Add to your invoice workflows.' },
        { step: 2, title: 'Set thresholds', description: 'Define when reminders trigger.' },
        { step: 3, title: 'Let it run', description: 'Automatic chasing, professional tone.' },
      ],
    },
    industries: ['All industries'],
    relatedTemplates: ['new-lead-follow-up', 'quote-follow-up'],
    cta: {
      title: 'Ready to automate payment chasing?',
      description: 'Start your free trial to access this template.',
    },
  },

  'review-request': {
    slug: 'review-request',
    name: 'Post-Service Review Request',
    category: 'automation',
    seo: {
      title: 'Review Request Template | Get More 5-Star Reviews',
      description: 'Automated review requests sent after every job. Smart routing sends happy customers to Google.',
      keywords: ['review request', 'Google reviews', 'review automation', 'customer reviews'],
    },
    hero: {
      badge: 'Automation Template',
      title: 'Review',
      highlight: 'Requests',
      description: 'Automated review requests sent at the perfect moment after every job. Smart routing catches unhappy customers privately.',
    },
    overview: {
      title: 'What this template does',
      description: 'After a job is marked complete, this workflow requests feedback and routes to Google reviews.',
      useCases: [
        'After service completion',
        'Post-installation',
        'After repairs',
        'Any customer interaction',
      ],
    },
    features: {
      title: 'How it works',
      items: [
        { title: 'Timing', description: 'Request sent 2 hours after job completion.' },
        { title: 'Satisfaction check', description: 'Quick question to gauge happiness.' },
        { title: 'Smart routing', description: 'Happy customers → Google, unhappy → private.' },
        { title: 'Follow-up', description: 'Second request if no response.' },
      ],
    },
    customization: {
      title: 'Make it yours',
      options: [
        { label: 'Delay', description: 'When to send after job completion.' },
        { label: 'Platform', description: 'Google, Facebook, or industry-specific.' },
        { label: 'Message', description: 'Your tone and ask.' },
        { label: 'Threshold', description: 'What rating triggers public review request.' },
      ],
    },
    howToUse: {
      title: 'How to use this template',
      steps: [
        { step: 1, title: 'Install template', description: 'Add to your job completion workflow.' },
        { step: 2, title: 'Connect Google', description: 'Link your Google Business Profile.' },
        { step: 3, title: 'Watch reviews grow', description: 'Consistent requests = consistent reviews.' },
      ],
    },
    industries: ['All service businesses'],
    relatedTemplates: ['booking-confirmation', 'customer-onboarding'],
    cta: {
      title: 'Ready for more 5-star reviews?',
      description: 'Start your free trial to access this template.',
    },
  },

  'appointment-reminder': {
    slug: 'appointment-reminder',
    name: 'Appointment Reminder Sequence',
    category: 'automation',
    seo: {
      title: 'Appointment Reminder Template | Reduce No-Shows',
      description: 'Automated reminder sequence at 24hrs, 2hrs, and 30mins before appointments. Reduce no-shows by 90%.',
      keywords: ['appointment reminder', 'booking reminder', 'reduce no-shows', 'reminder automation'],
    },
    hero: {
      badge: 'Automation Template',
      title: 'Appointment',
      highlight: 'Reminders',
      description: 'Strategic reminder sequence that reduces no-shows by 90%. SMS and email at key moments before appointments.',
    },
    overview: {
      title: 'What this template does',
      description: 'Automatically reminds customers at 24 hours, 2 hours, and 30 minutes before their appointment.',
      useCases: [
        'Service appointments',
        'Consultations',
        'Installations',
        'Any scheduled visit',
      ],
    },
    features: {
      title: 'Reminder sequence',
      items: [
        { title: '24hr email', description: 'Detailed reminder with preparation instructions.' },
        { title: '2hr SMS', description: 'Quick reminder with arrival time.' },
        { title: '30min on-the-way', description: 'Technician en route notification.' },
        { title: 'Easy reschedule', description: 'Link to change if needed.' },
      ],
    },
    customization: {
      title: 'Make it yours',
      options: [
        { label: 'Timing', description: 'Adjust reminder intervals.' },
        { label: 'Content', description: 'Add specific instructions.' },
        { label: 'Channels', description: 'Email, SMS, or both.' },
        { label: 'Confirmation', description: 'Require reply to confirm.' },
      ],
    },
    howToUse: {
      title: 'How to use this template',
      steps: [
        { step: 1, title: 'Install template', description: 'Add to your appointment workflow.' },
        { step: 2, title: 'Customize timing', description: 'Set your preferred intervals.' },
        { step: 3, title: 'Reduce no-shows', description: 'Customers actually show up.' },
      ],
    },
    industries: ['All appointment-based businesses'],
    relatedTemplates: ['booking-confirmation', 'review-request'],
    cta: {
      title: 'Ready to reduce no-shows?',
      description: 'Start your free trial to access this template.',
    },
  },

  'quote-follow-up': {
    slug: 'quote-follow-up',
    name: 'Quote Follow-Up Automation',
    category: 'automation',
    seo: {
      title: 'Quote Follow-Up Template | Win More Quotes',
      description: 'Automated follow-up sequence for quotes. Increases conversion with timely, persistent follow-up.',
      keywords: ['quote follow-up', 'estimate follow-up', 'quote conversion', 'win more quotes'],
    },
    hero: {
      badge: 'Automation Template',
      title: 'Quote',
      highlight: 'Follow-Up',
      description: 'Automated sequence that follows up on sent quotes. Increase conversion with timely, professional persistence.',
    },
    overview: {
      title: 'What this template does',
      description: 'After a quote is sent, this workflow follows up until the customer accepts, declines, or goes cold.',
      useCases: [
        'All quote types',
        'Project proposals',
        'Service estimates',
        'Large jobs',
      ],
    },
    features: {
      title: 'Follow-up sequence',
      items: [
        { title: 'Day 1 check', description: 'Did you receive the quote? Any questions?' },
        { title: 'Day 3 value add', description: 'Helpful information related to their project.' },
        { title: 'Day 7 decision', description: 'Checking if they\'re ready to proceed.' },
        { title: 'Day 14 last touch', description: 'Final follow-up before marking lost.' },
      ],
    },
    customization: {
      title: 'Make it yours',
      options: [
        { label: 'Timing', description: 'Adjust follow-up intervals.' },
        { label: 'Content', description: 'Match your sales approach.' },
        { label: 'Exclusions', description: 'Skip for certain quote types.' },
        { label: 'Escalation', description: 'Add call tasks for large quotes.' },
      ],
    },
    howToUse: {
      title: 'How to use this template',
      steps: [
        { step: 1, title: 'Install template', description: 'Add to your quote workflow.' },
        { step: 2, title: 'Customize messages', description: 'Match your sales style.' },
        { step: 3, title: 'Win more quotes', description: 'Consistent follow-up converts.' },
      ],
    },
    industries: ['All quoting businesses'],
    relatedTemplates: ['new-lead-follow-up', 'invoice-reminder'],
    cta: {
      title: 'Ready to win more quotes?',
      description: 'Start your free trial to access this template.',
    },
  },

  'customer-onboarding': {
    slug: 'customer-onboarding',
    name: 'New Customer Onboarding',
    category: 'automation',
    seo: {
      title: 'Customer Onboarding Template | Welcome Sequence',
      description: 'Automated welcome sequence for new customers. Set expectations, build relationship, ensure satisfaction.',
      keywords: ['customer onboarding', 'welcome sequence', 'new customer', 'customer welcome'],
    },
    hero: {
      badge: 'Automation Template',
      title: 'Customer',
      highlight: 'Onboarding',
      description: 'Welcome new customers with a professional sequence that sets expectations and builds the relationship from day one.',
    },
    overview: {
      title: 'What this template does',
      description: 'When a customer makes their first booking, this workflow welcomes them and sets them up for success.',
      useCases: [
        'First-time customers',
        'New contract starts',
        'Subscription onboarding',
        'Service introductions',
      ],
    },
    features: {
      title: 'Onboarding sequence',
      items: [
        { title: 'Welcome email', description: 'Introduction to your business and what to expect.' },
        { title: 'Helpful resources', description: 'FAQs, guides, and useful information.' },
        { title: 'Satisfaction check', description: 'Quick check after first service.' },
        { title: 'Referral request', description: 'Ask for referrals once satisfied.' },
      ],
    },
    customization: {
      title: 'Make it yours',
      options: [
        { label: 'Content', description: 'Share your unique value and approach.' },
        { label: 'Resources', description: 'Add helpful guides and FAQs.' },
        { label: 'Timing', description: 'Space messages appropriately.' },
        { label: 'Personal touch', description: 'Add personalization tokens.' },
      ],
    },
    howToUse: {
      title: 'How to use this template',
      steps: [
        { step: 1, title: 'Install template', description: 'Add to new customer workflow.' },
        { step: 2, title: 'Add your content', description: 'Include your resources and info.' },
        { step: 3, title: 'Impress customers', description: 'Professional onboarding from day one.' },
      ],
    },
    industries: ['All customer-facing businesses'],
    relatedTemplates: ['review-request', 'win-back-campaign'],
    cta: {
      title: 'Ready to impress new customers?',
      description: 'Start your free trial to access this template.',
    },
  },

  'win-back-campaign': {
    slug: 'win-back-campaign',
    name: 'Customer Win-Back Campaign',
    category: 'automation',
    seo: {
      title: 'Win-Back Campaign Template | Re-Engage Lost Customers',
      description: 'Automated campaign to re-engage inactive customers. Special offers and gentle reminders bring them back.',
      keywords: ['win-back campaign', 'customer reactivation', 'inactive customers', 're-engagement'],
    },
    hero: {
      badge: 'Automation Template',
      title: 'Win-Back',
      highlight: 'Campaign',
      description: 'Automated campaign that re-engages customers who haven\'t booked in a while. Special offers and gentle reminders bring them back.',
    },
    overview: {
      title: 'What this template does',
      description: 'Identifies customers who haven\'t booked in 90 days and runs a win-back campaign.',
      useCases: [
        'Lapsed customers',
        'Cancelled subscriptions',
        'One-time buyers',
        'Seasonal customers',
      ],
    },
    features: {
      title: 'Campaign sequence',
      items: [
        { title: 'We miss you', description: 'Friendly check-in after 90 days.' },
        { title: 'Special offer', description: 'Discount or incentive to return.' },
        { title: 'Last chance', description: 'Final offer before marking inactive.' },
        { title: 'Feedback request', description: 'Ask why they haven\'t returned.' },
      ],
    },
    customization: {
      title: 'Make it yours',
      options: [
        { label: 'Trigger', description: 'Define inactivity period.' },
        { label: 'Offer', description: 'Discount amount or incentive.' },
        { label: 'Exclusions', description: 'Skip certain customer types.' },
        { label: 'Tone', description: 'Match your brand voice.' },
      ],
    },
    howToUse: {
      title: 'How to use this template',
      steps: [
        { step: 1, title: 'Install template', description: 'Add to your customer workflows.' },
        { step: 2, title: 'Set trigger', description: 'Define what counts as inactive.' },
        { step: 3, title: 'Win them back', description: 'Automatic re-engagement.' },
      ],
    },
    industries: ['All repeat-service businesses'],
    relatedTemplates: ['customer-onboarding', 'review-request'],
    cta: {
      title: 'Ready to win back customers?',
      description: 'Start your free trial to access this template.',
    },
  },
};

// Export helpers
export const templateSlugs = Object.keys(templates) as (keyof typeof templates)[];
export type TemplateSlug = keyof typeof templates;

export function getTemplate(slug: string) {
  return templates[slug as TemplateSlug];
}

// Group by category
export const templatesByCategory = {
  automation: [
    'new-lead-follow-up',
    'booking-confirmation',
    'invoice-reminder',
    'review-request',
    'appointment-reminder',
    'quote-follow-up',
    'customer-onboarding',
    'win-back-campaign',
  ],
} as const;
