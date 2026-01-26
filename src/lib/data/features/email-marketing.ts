// Email Marketing Feature Page

import type { FeaturePageData } from '../types';

export const emailMarketing: FeaturePageData = {
  slug: 'email-marketing',
  seo: {
    title: 'Email Marketing Software | Email Campaigns & Automation',
    description: 'Send beautiful email campaigns that convert. Built-in templates, automation, and analytics. No design skills needed. Free trial.',
    keywords: ['email marketing software', 'email campaigns', 'newsletter software', 'email automation', 'marketing emails', 'email templates'],
  },
  hero: {
    badge: 'Email Marketing',
    title: 'Emails that convert.',
    highlight: 'Campaigns that work.',
    description: 'Beautiful email campaigns with drag-and-drop simplicity. Automated sequences that nurture leads into customers.',
    stats: [
      { value: '42x', label: 'ROI on email' },
      { value: '25%', label: 'Open rate avg' },
      { value: '0', label: 'Design skills needed' },
    ],
  },
  problemSolution: {
    title: 'Email marketing shouldn\'t be complicated',
    description: 'Most tools are built for enterprises, not small businesses.',
    items: [
      {
        problem: 'Complex email tools require a marketing degree to use',
        solution: 'Drag-and-drop builder anyone can use. No training needed.',
      },
      {
        problem: 'Designing emails from scratch takes forever',
        solution: 'Professional templates customise with your brand in seconds',
      },
      {
        problem: 'You forget to send follow-ups and lose potential customers',
        solution: 'Automated email sequences run in the background, always',
      },
      {
        problem: 'No idea if your emails are actually working',
        solution: 'Real-time analytics show opens, clicks, and conversions',
      },
    ],
  },
  solution: {
    title: 'Email marketing that drives revenue',
    description: 'Everything you need to grow with email.',
    features: [
      { icon: 'layout', title: 'Drag-Drop Builder', description: 'Create beautiful emails without coding. Just drag, drop, done.' },
      { icon: 'file-text', title: 'Template Library', description: 'Professional templates for every occasion. Customise with your brand.' },
      { icon: 'zap', title: 'Automation', description: 'Welcome sequences, follow-ups, and nurture campaigns on autopilot.' },
      { icon: 'users', title: 'Segmentation', description: 'Send the right message to the right people based on behaviour.' },
      { icon: 'bar-chart', title: 'Analytics', description: 'Track opens, clicks, and conversions. Know what\'s working.' },
      { icon: 'check-circle', title: 'Deliverability', description: 'Emails land in inboxes, not spam folders. Built-in best practices.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More engagement, more conversions, less effort.',
    items: [
      { title: 'Turn leads into customers', description: 'Automated nurture sequences convert leads while you focus on delivery.' },
      { title: 'Stay top of mind', description: 'Regular newsletters keep you in front of customers when they\'re ready to buy.' },
      { title: 'Save hours every week', description: 'Templates and automation mean email marketing takes minutes, not hours.' },
      { title: 'Measure what matters', description: 'Know exactly which emails drive revenue and double down.' },
    ],
  },
  useCases: {
    title: 'Email that grows your business',
    items: [
      { industry: 'Service Businesses', description: 'Booking confirmations, review requests, and seasonal promotions.' },
      { industry: 'E-commerce', description: 'Abandoned cart emails, product recommendations, and sales campaigns.' },
      { industry: 'B2B', description: 'Lead nurturing, newsletters, and event invitations.' },
    ],
  },
  cta: {
    title: 'Ready to grow with email?',
    description: 'Start sending emails that convert. Free 14-day trial.',
  },
};
