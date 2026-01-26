// SMS Marketing Feature Page

import type { FeaturePageData } from '../types';

export const smsMarketing: FeaturePageData = {
  slug: 'sms-marketing',
  seo: {
    title: 'SMS Marketing Software | Text Message Marketing',
    description: 'Reach customers instantly with SMS marketing. 98% open rates, automated campaigns, two-way messaging. Start free trial.',
    keywords: ['SMS marketing', 'text message marketing', 'bulk SMS', 'SMS campaigns', 'business texting', 'SMS automation'],
  },
  hero: {
    badge: 'SMS Marketing',
    title: '98% open rate.',
    highlight: 'Instant delivery.',
    description: 'Text messages get read. Send promotions, reminders, and updates that customers actually see and act on.',
    stats: [
      { value: '98%', label: 'Open rate' },
      { value: '90sec', label: 'Avg read time' },
      { value: '45%', label: 'Response rate' },
    ],
  },
  problemSolution: {
    title: 'Emails get ignored. Texts get read.',
    description: 'Your messages deserve to be seen.',
    items: [
      {
        problem: 'Email open rates are declining — messages sit unread for days',
        solution: 'SMS has 98% open rates with most read within 90 seconds',
      },
      {
        problem: 'Customers miss important reminders and updates',
        solution: 'Text messages cut through the noise and get immediate attention',
      },
      {
        problem: 'One-way messaging means customers can\'t reply',
        solution: 'Two-way SMS lets customers respond directly to your messages',
      },
      {
        problem: 'Sending texts manually is slow and error-prone',
        solution: 'Automated SMS campaigns trigger based on events and schedules',
      },
    ],
  },
  solution: {
    title: 'Text marketing that converts',
    description: 'Powerful SMS marketing with automation.',
    features: [
      { icon: 'message-square', title: 'Bulk SMS Campaigns', description: 'Send promotions to thousands of customers instantly.' },
      { icon: 'message-circle', title: 'Two-Way Messaging', description: 'Customers can reply. Have real conversations via text.' },
      { icon: 'zap', title: 'Automated Sequences', description: 'Trigger texts based on bookings, purchases, or behaviour.' },
      { icon: 'users', title: 'Segmentation', description: 'Target messages based on customer data and preferences.' },
      { icon: 'link', title: 'Shortened Links', description: 'Track clicks with branded short links in your texts.' },
      { icon: 'bar-chart', title: 'Delivery Analytics', description: 'See delivery rates, opens, clicks, and responses.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Messages that get seen and drive action.',
    items: [
      { title: 'Guaranteed visibility', description: '98% of texts get opened. Your message will be seen.' },
      { title: 'Instant engagement', description: 'Messages read in 90 seconds. Perfect for time-sensitive offers.' },
      { title: 'Higher response rates', description: 'Customers reply to texts. Start real conversations.' },
      { title: 'Reduce no-shows', description: 'SMS reminders are 7x more effective than email reminders.' },
    ],
  },
  useCases: {
    title: 'SMS for every business',
    items: [
      { industry: 'Appointments', description: 'Reminders, confirmations, and on-the-way notifications.' },
      { industry: 'Retail & E-commerce', description: 'Flash sales, order updates, and delivery notifications.' },
      { industry: 'Restaurants & Hospitality', description: 'Reservation confirmations and promotional offers.' },
    ],
  },
  cta: {
    title: 'Ready to reach customers instantly?',
    description: 'Start SMS marketing today. Free 14-day trial.',
  },
};
