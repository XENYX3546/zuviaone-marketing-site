// Automated Reminders Feature Page

import type { FeaturePageData } from '../types';

export const automatedReminders: FeaturePageData = {
  slug: 'automated-reminders',
  seo: {
    title: 'Automated Reminder System | Appointment Reminders',
    description: 'Send SMS and email reminders automatically. Reduce no-shows, improve collection, never forget a follow-up. Free trial.',
    keywords: ['automated reminders', 'appointment reminders', 'SMS reminders', 'email reminders', 'reminder system', 'automatic reminders'],
  },
  hero: {
    badge: 'Automated Reminders',
    title: 'Never forget.',
    highlight: 'Never remind manually.',
    description: 'Automated reminders for appointments, payments, and follow-ups. Set once, run forever.',
    stats: [
      { value: '90%', label: 'Fewer no-shows' },
      { value: '0', label: 'Manual reminders' },
      { value: '24/7', label: 'Running' },
    ],
  },
  problemSolution: {
    title: 'Manual reminders don\'t scale',
    description: 'Automate what should never be forgotten.',
    items: [
      {
        problem: 'Customers forget appointments and don\'t show up',
        solution: 'Automatic reminders at the right times reduce no-shows by 90%',
      },
      {
        problem: 'Chasing payments manually is awkward and time-consuming',
        solution: 'Automated payment reminders chase professionally for you',
      },
      {
        problem: 'Follow-ups get forgotten when things get busy',
        solution: 'Scheduled reminders ensure follow-ups happen on time',
      },
      {
        problem: 'Sending reminders one by one takes forever',
        solution: 'Set rules once and reminders send automatically forever',
      },
    ],
  },
  solution: {
    title: 'Reminders on autopilot',
    description: 'Set once, run automatically.',
    features: [
      { icon: 'bell', title: 'Appointment Reminders', description: 'SMS and email before appointments.' },
      { icon: 'credit-card', title: 'Payment Reminders', description: 'Automatic nudges for overdue invoices.' },
      { icon: 'calendar', title: 'Follow-up Reminders', description: 'Scheduled reminders for follow-up tasks.' },
      { icon: 'message-square', title: 'Multi-Channel', description: 'SMS, email, or both — your choice.' },
      { icon: 'sliders', title: 'Custom Timing', description: 'Set exactly when reminders go out.' },
      { icon: 'file-text', title: 'Templates', description: 'Professional messages you customise.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More show-ups, more payments, less work.',
    items: [
      { title: 'Reduce no-shows by 90%', description: 'Customers remember when they\'re reminded.' },
      { title: 'Get paid faster', description: 'Automatic nudges improve payment rates.' },
      { title: 'Never forget a follow-up', description: 'Scheduled reminders ensure nothing slips.' },
      { title: 'Save hours weekly', description: 'No manual reminder work ever again.' },
    ],
  },
  useCases: {
    title: 'Reminders for every business',
    items: [
      { industry: 'Appointments', description: 'Pre-appointment reminders to reduce no-shows.' },
      { industry: 'Billing', description: 'Payment reminders for overdue invoices.' },
      { industry: 'Sales', description: 'Follow-up reminders to nurture leads.' },
    ],
  },
  cta: {
    title: 'Ready to automate reminders?',
    description: 'Start sending reminders automatically. Free 14-day trial.',
  },
};
