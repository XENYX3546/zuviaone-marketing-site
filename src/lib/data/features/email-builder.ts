// Email Builder Feature Page

import type { FeaturePageData } from '../types';

export const emailBuilder: FeaturePageData = {
  slug: 'drag-drop-email-builder',
  seo: {
    title: 'Drag & Drop Email Builder | Email Template Builder',
    description: 'Create beautiful emails without coding. Drag-and-drop builder with professional templates. Design emails in minutes. Free trial.',
    keywords: ['email builder', 'email template builder', 'drag drop email', 'email designer', 'email editor', 'HTML email builder'],
  },
  hero: {
    badge: 'Email Builder',
    title: 'Design emails.',
    highlight: 'Without designers.',
    description: 'Drag-and-drop email builder that anyone can use. Professional templates, your branding, zero coding.',
    stats: [
      { value: '5min', label: 'To create' },
      { value: '50+', label: 'Templates' },
      { value: '0', label: 'Coding needed' },
    ],
  },
  problemSolution: {
    title: 'Bad emails hurt your brand',
    description: 'Professional emails shouldn\'t require professional designers.',
    items: [
      {
        problem: 'Designing emails requires HTML skills you don\'t have',
        solution: 'Drag-and-drop builder creates professional emails visually',
      },
      {
        problem: 'Emails look broken on mobile devices',
        solution: 'Responsive templates look perfect on every device',
      },
      {
        problem: 'Starting from scratch every time wastes hours',
        solution: 'Save your designs as templates for one-click reuse',
      },
      {
        problem: 'Brand consistency is impossible without design guidelines',
        solution: 'Brand kit applies your colours, fonts, and logo automatically',
      },
    ],
  },
  solution: {
    title: 'Professional emails in minutes',
    description: 'Everything you need to create beautiful emails.',
    features: [
      { icon: 'layout', title: 'Drag & Drop', description: 'Add text, images, buttons, and columns by dragging.' },
      { icon: 'file-text', title: 'Template Library', description: '50+ professional templates for every occasion.' },
      { icon: 'smartphone', title: 'Mobile Preview', description: 'See exactly how emails look on every device.' },
      { icon: 'palette', title: 'Brand Kit', description: 'Your logo, colours, and fonts applied automatically.' },
      { icon: 'save', title: 'Save Templates', description: 'Save designs for one-click reuse later.' },
      { icon: 'code', title: 'HTML Export', description: 'Export HTML if you need it elsewhere.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Professional emails without the hassle.',
    items: [
      { title: 'Anyone can create', description: 'No design or coding skills needed. Just drag and drop.' },
      { title: 'Consistent branding', description: 'Every email matches your brand automatically.' },
      { title: 'Perfect on mobile', description: 'Responsive design means no broken emails.' },
      { title: 'Save time', description: 'Reusable templates mean emails take minutes, not hours.' },
    ],
  },
  useCases: {
    title: 'Emails for every occasion',
    items: [
      { industry: 'Marketing', description: 'Newsletters, promotions, and campaign emails.' },
      { industry: 'Operations', description: 'Booking confirmations, reminders, and updates.' },
      { industry: 'Sales', description: 'Proposals, follow-ups, and quote emails.' },
    ],
  },
  cta: {
    title: 'Ready to create beautiful emails?',
    description: 'Start designing emails in minutes. Free 14-day trial.',
  },
};
