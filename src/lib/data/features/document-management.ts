// Document Management Feature Page

import type { FeaturePageData } from '../types';

export const documentManagement: FeaturePageData = {
  slug: 'document-management',
  seo: {
    title: 'Document Management for Business | File Management',
    description: 'Organise and access business documents from anywhere. Secure storage, easy sharing, linked to customers and jobs. Free trial.',
    keywords: ['document management', 'file management', 'business documents', 'document storage', 'file sharing', 'document organisation'],
  },
  hero: {
    badge: 'Document Management',
    title: 'Every document.',
    highlight: 'Always accessible.',
    description: 'Store, organise, and access business documents from anywhere. Linked to customers and jobs for instant context.',
    stats: [
      { value: '100%', label: 'Accessible' },
      { value: '30sec', label: 'To find any doc' },
      { value: '0', label: 'Lost files' },
    ],
  },
  problemSolution: {
    title: 'Lost documents waste time and cost money',
    description: 'When you can\'t find files, work grinds to a halt.',
    items: [
      {
        problem: 'Documents scattered across email, drives, and desks',
        solution: 'Central storage organised by customer, job, and type',
      },
      {
        problem: 'Finding the right document takes ages',
        solution: 'Search finds any document in seconds',
      },
      {
        problem: 'Remote workers can\'t access files stored locally',
        solution: 'Cloud storage accessible from any device, anywhere',
      },
      {
        problem: 'No way to link documents to the customers they relate to',
        solution: 'Documents attached to customer and job records automatically',
      },
    ],
  },
  solution: {
    title: 'Documents organised and accessible',
    description: 'The right document at the right time.',
    features: [
      { icon: 'folder', title: 'Central Storage', description: 'All documents in one secure, searchable place.' },
      { icon: 'search', title: 'Instant Search', description: 'Find any document by name, content, or tags.' },
      { icon: 'link', title: 'Linked Documents', description: 'Attach files to customers, jobs, and invoices.' },
      { icon: 'share-2', title: 'Secure Sharing', description: 'Share documents with customers via portal or link.' },
      { icon: 'shield', title: 'Permissions', description: 'Control who can view and edit each document.' },
      { icon: 'clock', title: 'Version History', description: 'Previous versions saved automatically.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Never lose a document again.',
    items: [
      { title: 'Find anything instantly', description: 'Search finds documents in seconds, not minutes.' },
      { title: 'Work from anywhere', description: 'Access documents from office, field, or home.' },
      { title: 'Full context', description: 'Documents linked to the customers and jobs they belong to.' },
      { title: 'Share securely', description: 'Controlled sharing with customers and team members.' },
    ],
  },
  useCases: {
    title: 'Document management for any business',
    items: [
      { industry: 'Trades', description: 'Certificates, photos, and job documentation.' },
      { industry: 'Professional Services', description: 'Contracts, proposals, and client documents.' },
      { industry: 'Property', description: 'Inspections, reports, and tenancy agreements.' },
    ],
  },
  cta: {
    title: 'Ready to organise your documents?',
    description: 'Start managing documents properly. Free 14-day trial.',
  },
};
