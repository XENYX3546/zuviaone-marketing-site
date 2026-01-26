// Lead Management Feature Page

import type { FeaturePageData } from '../types';

export const leadManagement: FeaturePageData = {
  slug: 'lead-management',
  seo: {
    title: 'Lead Management Software | Lead Tracking System',
    description: 'Capture, track, and convert more leads. Never lose another opportunity. Automated follow-ups and pipeline tracking. Free trial.',
    keywords: ['lead management software', 'lead tracking', 'lead capture', 'sales leads', 'lead CRM', 'lead pipeline'],
  },
  hero: {
    badge: 'Lead Management',
    title: 'Every lead.',
    highlight: 'Every follow-up.',
    description: 'Capture leads from every source, nurture them automatically, and convert more into paying customers.',
    stats: [
      { value: '45%', label: 'More conversions' },
      { value: '0', label: 'Leads lost' },
      { value: '2min', label: 'Response time' },
    ],
  },
  problemSolution: {
    title: 'Most leads never become customers',
    description: 'Not because they\'re bad leads — because follow-up fails.',
    items: [
      {
        problem: 'Leads come from website, phone, email — and get scattered everywhere',
        solution: 'Every lead captured in one place automatically, regardless of source',
      },
      {
        problem: 'You forget to follow up and competitors win the business',
        solution: 'Automated follow-up sequences nurture leads until they\'re ready',
      },
      {
        problem: 'No visibility into which leads are hot and which are cold',
        solution: 'Lead scoring highlights your best opportunities automatically',
      },
      {
        problem: 'Spending time on leads that will never convert',
        solution: 'Qualification workflows filter out tyre-kickers early',
      },
    ],
  },
  solution: {
    title: 'Turn more leads into customers',
    description: 'Capture, qualify, nurture, and convert.',
    features: [
      { icon: 'download', title: 'Lead Capture', description: 'Forms, chatbot, phone, email — every lead in one place.' },
      { icon: 'zap', title: 'Auto Follow-up', description: 'Automated emails and SMS keep leads warm.' },
      { icon: 'target', title: 'Lead Scoring', description: 'AI identifies your hottest leads automatically.' },
      { icon: 'filter', title: 'Qualification', description: 'Workflows filter and route leads based on criteria.' },
      { icon: 'git-branch', title: 'Pipeline Tracking', description: 'Visual pipeline shows every lead\'s status.' },
      { icon: 'bar-chart', title: 'Conversion Analytics', description: 'See where leads come from and which convert.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More customers, less effort.',
    items: [
      { title: 'Never lose a lead', description: 'Every enquiry captured and tracked until conversion or closure.' },
      { title: 'Respond instantly', description: 'Automated responses ensure leads never wait.' },
      { title: 'Focus on winners', description: 'Lead scoring tells you where to spend your time.' },
      { title: 'Know what\'s working', description: 'Attribution shows which sources deliver real customers.' },
    ],
  },
  useCases: {
    title: 'Lead management for every business',
    items: [
      { industry: 'Service Businesses', description: 'Capture enquiries from your website, phone, and listings.' },
      { industry: 'Sales Teams', description: 'Manage inbound leads and track pipeline performance.' },
      { industry: 'Marketing', description: 'Nurture leads through the funnel with automated campaigns.' },
    ],
  },
  cta: {
    title: 'Ready to convert more leads?',
    description: 'Start capturing and converting today. Free 14-day trial.',
  },
};
