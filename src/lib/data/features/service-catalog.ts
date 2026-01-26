// Service Catalog Feature Page

import type { FeaturePageData } from '../types';

export const serviceCatalog: FeaturePageData = {
  slug: 'service-catalog',
  seo: {
    title: 'Service Catalog Software | Price List Management',
    description: 'Manage your services and pricing in one place. Consistent pricing, easy updates, professional price lists. Free trial.',
    keywords: ['service catalog', 'price list', 'service menu', 'pricing management', 'service pricing', 'catalog software'],
  },
  hero: {
    badge: 'Service Catalog',
    title: 'Your services.',
    highlight: 'Perfectly organised.',
    description: 'A professional service catalog with consistent pricing. Quote faster, look professional, never misquote.',
    stats: [
      { value: '0', label: 'Pricing errors' },
      { value: '3x', label: 'Faster quoting' },
      { value: '100%', label: 'Consistency' },
    ],
  },
  problemSolution: {
    title: 'Inconsistent pricing hurts your business',
    description: 'When prices vary, customers lose trust.',
    items: [
      {
        problem: 'Different team members quote different prices for the same service',
        solution: 'Central catalog with fixed pricing everyone uses',
      },
      {
        problem: 'Price changes mean updating spreadsheets and informing everyone',
        solution: 'Update once, syncs everywhere automatically',
      },
      {
        problem: 'Building quotes from scratch takes forever',
        solution: 'Add services to quotes in seconds from your catalog',
      },
      {
        problem: 'No professional price list to share with customers',
        solution: 'Generate beautiful price lists for website or print',
      },
    ],
  },
  solution: {
    title: 'Services and pricing under control',
    description: 'One source of truth for all your services.',
    features: [
      { icon: 'list', title: 'Service Database', description: 'All services with descriptions, pricing, and durations.' },
      { icon: 'layers', title: 'Categories', description: 'Organise services into logical categories.' },
      { icon: 'dollar-sign', title: 'Flexible Pricing', description: 'Fixed prices, hourly rates, or custom calculations.' },
      { icon: 'package', title: 'Add-ons & Bundles', description: 'Upsells, add-ons, and service packages.' },
      { icon: 'file-text', title: 'Price Lists', description: 'Generate professional price lists automatically.' },
      { icon: 'zap', title: 'Quote Integration', description: 'Add services to quotes with one click.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Consistent pricing, professional image.',
    items: [
      { title: 'Eliminate pricing errors', description: 'Everyone uses the same, correct prices.' },
      { title: 'Quote in seconds', description: 'Stop calculating from scratch every time.' },
      { title: 'Look professional', description: 'Beautiful price lists that impress customers.' },
      { title: 'Update once', description: 'Price changes reflect everywhere instantly.' },
    ],
  },
  useCases: {
    title: 'Service catalog for any business',
    items: [
      { industry: 'Service Businesses', description: 'Standard pricing for all your services.' },
      { industry: 'Trades', description: 'Labour rates, materials, and package pricing.' },
      { industry: 'Agencies', description: 'Retainers, project types, and hourly rates.' },
    ],
  },
  cta: {
    title: 'Ready to organise your services?',
    description: 'Start building your service catalog. Free 14-day trial.',
  },
};
