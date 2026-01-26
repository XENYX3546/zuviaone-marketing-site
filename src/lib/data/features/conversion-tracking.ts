// Conversion Tracking Feature Page

import type { FeaturePageData } from '../types';

export const conversionTracking: FeaturePageData = {
  slug: 'conversion-tracking',
  seo: {
    title: 'Conversion Tracking Setup | Marketing Attribution',
    description: 'Track every conversion back to its source. Know which marketing actually works. Attribution that drives better decisions.',
    keywords: ['conversion tracking', 'marketing attribution', 'analytics setup', 'ROI tracking', 'marketing analytics', 'conversion analytics'],
  },
  hero: {
    badge: 'Conversion Tracking',
    title: 'Know what works.',
    highlight: 'Stop guessing.',
    description: 'Track every lead and sale back to its source. Know exactly which marketing delivers real customers.',
    stats: [
      { value: '100%', label: 'Tracked' },
      { value: '2x', label: 'Better ROI' },
      { value: '0', label: 'Wasted spend' },
    ],
  },
  problemSolution: {
    title: 'Marketing without tracking is gambling',
    description: 'If you don\'t know what works, you can\'t optimise.',
    items: [
      {
        problem: 'No idea which marketing channels actually bring customers',
        solution: 'Attribution tracks every customer back to their source',
      },
      {
        problem: 'Spending on ads without knowing if they\'re working',
        solution: 'ROI tracking shows which campaigns are profitable',
      },
      {
        problem: 'Can\'t prove marketing value to justify budget',
        solution: 'Clear reports show exactly what marketing delivers',
      },
      {
        problem: 'Multiple touchpoints make attribution confusing',
        solution: 'Multi-touch attribution credits every touchpoint fairly',
      },
    ],
  },
  solution: {
    title: 'Attribution that works',
    description: 'Track the full customer journey.',
    features: [
      { icon: 'target', title: 'Source Tracking', description: 'Know where every lead comes from.' },
      { icon: 'git-branch', title: 'Multi-Touch', description: 'Credit every touchpoint in the journey.' },
      { icon: 'bar-chart', title: 'ROI Reports', description: 'See return on investment by channel.' },
      { icon: 'link', title: 'UTM Support', description: 'Track campaigns with UTM parameters.' },
      { icon: 'phone', title: 'Call Tracking', description: 'Attribute phone calls to campaigns.' },
      { icon: 'pie-chart', title: 'Channel Comparison', description: 'Compare channel performance side by side.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Marketing that actually delivers.',
    items: [
      { title: 'Know what works', description: 'Clear attribution shows which marketing delivers.' },
      { title: 'Optimise spend', description: 'Put budget into channels that actually work.' },
      { title: 'Prove value', description: 'Show exactly what marketing contributes.' },
      { title: 'Better decisions', description: 'Data-driven marketing beats guesswork.' },
    ],
  },
  useCases: {
    title: 'Tracking for marketers',
    items: [
      { industry: 'Lead Generation', description: 'Track leads from ad click to paying customer.' },
      { industry: 'E-commerce', description: 'Attribute sales to marketing campaigns.' },
      { industry: 'Multi-Channel', description: 'Compare performance across all channels.' },
    ],
  },
  cta: {
    title: 'Ready to track what works?',
    description: 'Start tracking conversions. Free 14-day trial.',
  },
};
