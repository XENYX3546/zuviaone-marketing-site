// Global Search Feature Page

import type { FeaturePageData } from '../types';

export const globalSearch: FeaturePageData = {
  slug: 'global-search',
  seo: {
    title: 'Smart Business Search | Unified Data Search',
    description: 'Find anything in your business data instantly. Customers, jobs, invoices, documents — one search, instant results.',
    keywords: ['business search', 'data search', 'universal search', 'find anything', 'instant search', 'unified search'],
  },
  hero: {
    badge: 'Global Search',
    title: 'Find anything.',
    highlight: 'Instantly.',
    description: 'One search box to find customers, jobs, invoices, documents — anything in your business. Results in milliseconds.',
    stats: [
      { value: '100ms', label: 'Search speed' },
      { value: '100%', label: 'Data indexed' },
      { value: '0', label: 'Frustration' },
    ],
  },
  problemSolution: {
    title: 'Finding things shouldn\'t be hard',
    description: 'Your data is useless if you can\'t find it.',
    items: [
      {
        problem: 'Searching different systems for one piece of information',
        solution: 'One search finds data across all your business systems',
      },
      {
        problem: 'Slow searches that take forever to return results',
        solution: 'Instant results as you type — millisecond response',
      },
      {
        problem: 'Remembering exactly where information is stored',
        solution: 'Search doesn\'t care where data lives — it finds everything',
      },
      {
        problem: 'Partial information means no results',
        solution: 'Fuzzy matching finds results even with typos or partial info',
      },
    ],
  },
  solution: {
    title: 'Search that just works',
    description: 'Find anything in your business instantly.',
    features: [
      { icon: 'search', title: 'Universal Search', description: 'One search across all your data.' },
      { icon: 'zap', title: 'Instant Results', description: 'Results appear as you type.' },
      { icon: 'filter', title: 'Smart Filters', description: 'Filter by type, date, status, and more.' },
      { icon: 'file-text', title: 'Document Search', description: 'Search inside documents, not just titles.' },
      { icon: 'clock', title: 'Recent Searches', description: 'Quick access to things you search often.' },
      { icon: 'command', title: 'Keyboard Shortcuts', description: 'Power users search without touching the mouse.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'No more hunting for information.',
    items: [
      { title: 'Find anything instantly', description: 'Millisecond search across all your data.' },
      { title: 'One place to search', description: 'Stop switching between systems.' },
      { title: 'Works with typos', description: 'Fuzzy matching finds what you mean.' },
      { title: 'Search inside files', description: 'Find content inside documents, not just names.' },
    ],
  },
  useCases: {
    title: 'Search for any data',
    items: [
      { industry: 'Customer Service', description: 'Find customer records and history instantly.' },
      { industry: 'Operations', description: 'Locate jobs, invoices, and documents.' },
      { industry: 'Sales', description: 'Find leads, quotes, and communications.' },
    ],
  },
  cta: {
    title: 'Ready to find things faster?',
    description: 'Start searching smarter. Free 14-day trial.',
  },
};
