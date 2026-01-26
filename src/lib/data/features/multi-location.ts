// Multi-Location Business Feature Page

import type { FeaturePageData } from '../types';

export const multiLocation: FeaturePageData = {
  slug: 'multi-location',
  seo: {
    title: 'Multi-Location Business Software | Franchise Management',
    description: 'Manage multiple locations from one platform. Centralised control with location-level detail. Perfect for franchises and chains.',
    keywords: ['multi-location software', 'franchise software', 'chain management', 'multiple locations', 'franchise management', 'location management'],
  },
  hero: {
    badge: 'Multi-Location',
    title: 'All locations.',
    highlight: 'One platform.',
    description: 'Centralised control with location-level detail. Manage your entire business from one place.',
    stats: [
      { value: '∞', label: 'Locations' },
      { value: '1', label: 'Platform' },
      { value: '100%', label: 'Visibility' },
    ],
  },
  problemSolution: {
    title: 'Multiple locations, multiple headaches',
    description: 'Growth shouldn\'t mean chaos.',
    items: [
      {
        problem: 'Each location runs on different systems and processes',
        solution: 'One platform with standardised processes across all locations',
      },
      {
        problem: 'No visibility into what\'s happening at other locations',
        solution: 'Real-time dashboards show performance across all locations',
      },
      {
        problem: 'Managing staff and resources across locations is complex',
        solution: 'Cross-location scheduling and resource allocation',
      },
      {
        problem: 'Reports require manual consolidation from each location',
        solution: 'Consolidated and per-location reports automatically',
      },
    ],
  },
  solution: {
    title: 'One platform, all locations',
    description: 'Centralised control with local flexibility.',
    features: [
      { icon: 'map-pin', title: 'Location Management', description: 'Manage all locations from one dashboard.' },
      { icon: 'bar-chart', title: 'Cross-Location Reports', description: 'Compare performance across locations.' },
      { icon: 'users', title: 'Shared Resources', description: 'Staff and resources shared across locations.' },
      { icon: 'settings', title: 'Location Settings', description: 'Customise settings per location.' },
      { icon: 'shield', title: 'Access Control', description: 'Location-specific permissions.' },
      { icon: 'layers', title: 'Consolidation', description: 'Unified view or per-location detail.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Scale without complexity.',
    items: [
      { title: 'One source of truth', description: 'All locations on one platform.' },
      { title: 'Compare performance', description: 'See which locations excel and why.' },
      { title: 'Standardise operations', description: 'Consistent processes across all locations.' },
      { title: 'Scale easily', description: 'Add new locations without new systems.' },
    ],
  },
  useCases: {
    title: 'Multi-location for any business',
    items: [
      { industry: 'Franchises', description: 'Standardised operations across franchisees.' },
      { industry: 'Service Chains', description: 'Multiple locations serving different areas.' },
      { industry: 'Expanding Businesses', description: 'Growing from one location to many.' },
    ],
  },
  cta: {
    title: 'Ready to manage all locations?',
    description: 'Start managing multiple locations. Free 14-day trial.',
  },
};
