// Unified Email Inbox Feature Page

import type { FeaturePageData } from '../types';

export const emailInbox: FeaturePageData = {
  slug: 'email-inbox',
  seo: {
    title: 'Unified Email Inbox | Business Email Management',
    description: 'All your emails in one inbox. Team collaboration, customer context, and email tracking. Never miss an important email again.',
    keywords: ['unified inbox', 'email management', 'shared inbox', 'team inbox', 'business email', 'email collaboration'],
  },
  hero: {
    badge: 'Unified Inbox',
    title: 'One inbox.',
    highlight: 'Zero chaos.',
    description: 'All your business emails in one place. Team collaboration, customer context, and nothing falling through the cracks.',
    stats: [
      { value: '100%', label: 'Emails captured' },
      { value: '5min', label: 'Response time' },
      { value: '0', label: 'Missed emails' },
    ],
  },
  problemSolution: {
    title: 'Email chaos is killing productivity',
    description: 'When emails are scattered, things get missed.',
    items: [
      {
        problem: 'Team emails scattered across different inboxes and accounts',
        solution: 'All business emails unified in one shared inbox',
      },
      {
        problem: 'No context when replying — who is this customer again?',
        solution: 'Full customer history visible next to every email',
      },
      {
        problem: 'Emails fall through the cracks when nobody takes ownership',
        solution: 'Assign emails to team members and track until resolved',
      },
      {
        problem: 'No way to know if emails were opened or responded to',
        solution: 'Email tracking shows opens, clicks, and response status',
      },
    ],
  },
  solution: {
    title: 'Email that works for teams',
    description: 'Unified, contextual, collaborative.',
    features: [
      { icon: 'inbox', title: 'Unified Inbox', description: 'All business emails in one place.' },
      { icon: 'users', title: 'Team Collaboration', description: 'Assign emails, leave notes, hand off seamlessly.' },
      { icon: 'user', title: 'Customer Context', description: 'Full customer history visible with every email.' },
      { icon: 'eye', title: 'Email Tracking', description: 'Know when emails are opened and clicked.' },
      { icon: 'tag', title: 'Labels & Filters', description: 'Organise emails with tags and smart filters.' },
      { icon: 'zap', title: 'Auto-Assignment', description: 'Route emails to the right person automatically.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Faster responses, better teamwork.',
    items: [
      { title: 'Nothing gets missed', description: 'Every email tracked and assigned until resolved.' },
      { title: 'Full context always', description: 'See customer history before you reply.' },
      { title: 'Team accountability', description: 'Clear ownership and visibility on every email.' },
      { title: 'Respond faster', description: 'Right email, right person, right away.' },
    ],
  },
  useCases: {
    title: 'Unified inbox for any team',
    items: [
      { industry: 'Customer Service', description: 'Manage support emails with full customer context.' },
      { industry: 'Sales', description: 'Track prospect emails and ensure timely follow-up.' },
      { industry: 'Operations', description: 'Manage supplier and partner communications.' },
    ],
  },
  cta: {
    title: 'Ready to tame your inbox?',
    description: 'Start managing email properly. Free 14-day trial.',
  },
};
