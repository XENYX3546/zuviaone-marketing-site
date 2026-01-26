// Quote Software Feature Page

import type { FeaturePageData } from '../types';

export const quotes: FeaturePageData = {
  slug: 'quote-software',
  seo: {
    title: 'Quote Software | Estimate & Quotation System',
    description: 'Create professional quotes in minutes. Track quote status, convert to invoices, win more business. Free quote software trial.',
    keywords: ['quote software', 'estimate software', 'quotation system', 'proposal software', 'quote generator', 'pricing quotes'],
  },
  hero: {
    badge: 'Quotes & Estimates',
    title: 'Quote faster.',
    highlight: 'Win more.',
    description: 'Professional quotes that close deals. Create, send, and track quotes in minutes — not hours.',
    stats: [
      { value: '3x', label: 'Faster quoting' },
      { value: '45%', label: 'Higher win rate' },
      { value: '£0', label: 'Lost quotes' },
    ],
  },
  problemSolution: {
    title: 'Slow quotes lose deals',
    description: 'The first quote usually wins. Are you first?',
    items: [
      {
        problem: 'Creating quotes takes hours of typing and formatting',
        solution: 'Templates and saved items let you create quotes in minutes',
      },
      {
        problem: 'You forget to follow up and lose deals to faster competitors',
        solution: 'Automatic follow-up reminders ensure you never forget a quote',
      },
      {
        problem: 'No visibility into quote status — are they reading it?',
        solution: 'See when quotes are opened, viewed, and accepted in real-time',
      },
      {
        problem: 'Converting accepted quotes to invoices means re-typing everything',
        solution: 'One-click conversion turns accepted quotes into invoices instantly',
      },
    ],
  },
  solution: {
    title: 'Professional quotes that win',
    description: 'Create, send, track, and convert quotes in one system.',
    features: [
      { icon: 'file-text', title: 'Professional Templates', description: 'Branded quote templates that look great and build trust.' },
      { icon: 'database', title: 'Saved Items & Pricing', description: 'Build a catalogue of services with fixed pricing. Add to quotes in seconds.' },
      { icon: 'eye', title: 'View Tracking', description: 'Know when customers open and view your quotes. Follow up at the right time.' },
      { icon: 'check-circle', title: 'Online Acceptance', description: 'Customers accept quotes with one click. No printing or signing needed.' },
      { icon: 'zap', title: 'Quote to Invoice', description: 'Convert accepted quotes to invoices instantly. No re-typing.' },
      { icon: 'bar-chart', title: 'Quote Analytics', description: 'See win rates, average quote value, and where you\'re losing deals.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More quotes sent, more quotes won.',
    items: [
      { title: 'Be first, win more', description: 'Send quotes in minutes, not hours. The first quote usually wins.' },
      { title: 'Never lose track', description: 'Every quote tracked from sent to accepted. No more spreadsheet chaos.' },
      { title: 'Look professional', description: 'Branded quotes that make you look like an established business.' },
      { title: 'Close the loop', description: 'One-click invoice conversion means no gaps between quote and payment.' },
    ],
  },
  useCases: {
    title: 'Built for quoting businesses',
    items: [
      { industry: 'Trades & Construction', description: 'Quote jobs with line items, materials, and labour in one place.' },
      { industry: 'Service Providers', description: 'Create service packages and quote consistently every time.' },
      { industry: 'Freelancers & Agencies', description: 'Quote projects quickly and track every proposal.' },
    ],
  },
  cta: {
    title: 'Ready to win more quotes?',
    description: 'Start sending professional quotes today. Free 14-day trial.',
  },
};
