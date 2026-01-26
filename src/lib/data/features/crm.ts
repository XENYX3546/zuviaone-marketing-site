// CRM Feature Page

import type { FeaturePageData } from '../types';

export const crm: FeaturePageData = {
  slug: 'crm',
  seo: {
    title: 'CRM Software for Small Business | Customer Management',
    description: 'Powerful CRM software built for small businesses. Manage contacts, track leads, and close more deals. Free 14-day trial. No credit card required.',
    keywords: ['CRM software', 'customer relationship management', 'small business CRM', 'contact management', 'lead tracking', 'sales CRM'],
  },
  hero: {
    badge: 'Customer Relationship Management',
    title: 'Stop losing leads.',
    highlight: 'Start closing deals.',
    description: 'The CRM that actually helps you sell. Track every interaction, never miss a follow-up, and turn more leads into paying customers.',
    stats: [
      { value: '35%', label: 'More deals closed' },
      { value: '50%', label: 'Less admin time' },
      { value: '2x', label: 'Faster follow-ups' },
    ],
  },
  problemSolution: {
    title: 'Sound familiar?',
    description: 'Most businesses lose deals not because of bad products, but bad follow-up.',
    items: [
      {
        problem: 'Leads slip through the cracks because they\'re scattered across spreadsheets and sticky notes',
        solution: 'Every lead captured in one place with automatic reminders so nothing gets forgotten',
      },
      {
        problem: 'You forget to follow up and lose deals to competitors who responded faster',
        solution: 'Automated follow-up sequences that nurture leads while you focus on closing',
      },
      {
        problem: 'No visibility into your sales pipeline means you can\'t forecast revenue',
        solution: 'Visual pipeline shows exactly where every deal stands and projected revenue',
      },
      {
        problem: 'Your team wastes hours on manual data entry instead of selling',
        solution: 'Smart automation captures data automatically, giving your team time back to sell',
      },
    ],
  },
  solution: {
    title: 'Everything you need to manage customers',
    description: 'One place for all your customer data, conversations, and deals.',
    features: [
      { icon: 'users', title: 'Contact Management', description: 'Store every detail about your customers with custom fields, tags, and complete interaction history.' },
      { icon: 'target', title: 'Visual Pipelines', description: 'Drag-and-drop deals through your sales stages. See exactly where every opportunity stands.' },
      { icon: 'zap', title: 'Automated Follow-ups', description: 'Never forget a follow-up. Set reminders and automated sequences that run on autopilot.' },
      { icon: 'filter', title: 'Smart Segmentation', description: 'Group customers by value, behavior, or any criteria. Target the right people with the right message.' },
      { icon: 'inbox', title: 'Unified Inbox', description: 'Every email, call, and message in one timeline. Full context for every conversation.' },
      { icon: 'bar-chart', title: 'Sales Analytics', description: 'Track win rates, deal velocity, and team performance. Make decisions based on data.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Real results from real businesses using ZuviaOne CRM.',
    items: [
      { title: 'Close more deals', description: 'With every lead tracked and every follow-up scheduled, you\'ll convert more prospects into customers.' },
      { title: 'Save hours every week', description: 'Automated data entry and smart workflows mean your team spends time selling, not typing.' },
      { title: 'Never lose a lead again', description: 'Every enquiry captured, every interaction logged. Nothing falls through the cracks.' },
      { title: 'Forecast with confidence', description: 'See your pipeline value, win rates, and projected revenue at a glance.' },
    ],
  },
  useCases: {
    title: 'Built for businesses like yours',
    items: [
      { industry: 'Trade & Construction', description: 'Track quotes, manage repeat customers, and follow up on estimates automatically.' },
      { industry: 'Professional Services', description: 'Manage client relationships, track project opportunities, and nurture referrals.' },
      { industry: 'Home Services', description: 'Convert enquiries to bookings, manage customer history, and build loyalty.' },
    ],
  },
  cta: {
    title: 'Ready to close more deals?',
    description: 'Join thousands of businesses using ZuviaOne to grow their customer base.',
  },
};
