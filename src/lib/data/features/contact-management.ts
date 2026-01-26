// Contact Management Feature Page

import type { FeaturePageData } from '../types';

export const contactManagement: FeaturePageData = {
  slug: 'contact-management',
  seo: {
    title: 'Contact Management Software | Business Address Book',
    description: 'Organise all your contacts in one place. Customer details, interaction history, and notes. Never lose contact information again.',
    keywords: ['contact management', 'contact manager', 'address book', 'customer contacts', 'contact database', 'business contacts'],
  },
  hero: {
    badge: 'Contact Management',
    title: 'Every contact.',
    highlight: 'One place.',
    description: 'All your customers, prospects, and contacts organised with complete history and instant access.',
    stats: [
      { value: '100%', label: 'Contacts captured' },
      { value: '0', label: 'Lost information' },
      { value: '30sec', label: 'To find anyone' },
    ],
  },
  problemSolution: {
    title: 'Contact chaos costs you customers',
    description: 'Scattered contact info means missed opportunities.',
    items: [
      {
        problem: 'Contact info is scattered across spreadsheets, phones, and email',
        solution: 'One central database for all contacts, accessible anywhere',
      },
      {
        problem: 'You can\'t find contact details when you need them',
        solution: 'Instant search finds any contact in seconds',
      },
      {
        problem: 'No record of past interactions with each contact',
        solution: 'Complete timeline shows every call, email, and meeting',
      },
      {
        problem: 'Staff leave and take customer relationships with them',
        solution: 'Contacts and history stay with the business, not individuals',
      },
    ],
  },
  solution: {
    title: 'Contacts organised and accessible',
    description: 'Everything you need to know about everyone you know.',
    features: [
      { icon: 'users', title: 'Central Database', description: 'All contacts in one place. Customers, prospects, suppliers.' },
      { icon: 'search', title: 'Instant Search', description: 'Find any contact by name, company, phone, or email.' },
      { icon: 'clock', title: 'Interaction Timeline', description: 'Every call, email, and meeting logged automatically.' },
      { icon: 'tag', title: 'Tags & Segments', description: 'Organise contacts with custom tags and filters.' },
      { icon: 'file-text', title: 'Notes', description: 'Add notes and details to any contact record.' },
      { icon: 'download', title: 'Import/Export', description: 'Import from spreadsheets, export when needed.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Never lose a contact or relationship again.',
    items: [
      { title: 'Find anyone instantly', description: 'Search finds contacts in seconds, not minutes.' },
      { title: 'Full context always', description: 'See complete history before every interaction.' },
      { title: 'Protect relationships', description: 'Contacts belong to the business, not individuals.' },
      { title: 'Stay organised', description: 'Tags and segments keep contacts manageable.' },
    ],
  },
  useCases: {
    title: 'Contact management for any business',
    items: [
      { industry: 'Sales Teams', description: 'Manage prospects and customers with full history.' },
      { industry: 'Service Businesses', description: 'Customer details and service history in one place.' },
      { industry: 'Professional Services', description: 'Client relationships organised and accessible.' },
    ],
  },
  cta: {
    title: 'Ready to organise your contacts?',
    description: 'Start managing contacts properly. Free 14-day trial.',
  },
};
