// SEO Tools Feature Page

import type { FeaturePageData } from '../types';

export const seoTools: FeaturePageData = {
  slug: 'seo-keyword-research',
  seo: {
    title: 'SEO Keyword Research Tool | Keyword Planner',
    description: 'Find keywords your customers are searching for. Search volume, competition, and content ideas. Free SEO tools built in.',
    keywords: ['keyword research', 'SEO tool', 'keyword planner', 'SEO software', 'keyword finder', 'search volume'],
  },
  hero: {
    badge: 'SEO Tools',
    title: 'Find what they search.',
    highlight: 'Rank for it.',
    description: 'Discover keywords your customers use. Search volume, competition, and content ideas to drive organic traffic.',
    stats: [
      { value: '10M+', label: 'Keywords' },
      { value: 'Real', label: 'Search data' },
      { value: 'Free', label: 'With ZuviaOne' },
    ],
  },
  problemSolution: {
    title: 'You\'re invisible if you don\'t rank',
    description: 'Customers can\'t find you if you\'re not on page one.',
    items: [
      {
        problem: 'No idea what keywords your customers actually search for',
        solution: 'Keyword research shows exactly what people search',
      },
      {
        problem: 'Creating content without knowing if anyone will find it',
        solution: 'Search volume data shows what content has demand',
      },
      {
        problem: 'Targeting keywords that are too competitive to rank for',
        solution: 'Competition data helps you find winnable keywords',
      },
      {
        problem: 'SEO tools are expensive and complicated',
        solution: 'Built-in SEO tools included free with ZuviaOne',
      },
    ],
  },
  solution: {
    title: 'SEO insights that drive traffic',
    description: 'Find and rank for the right keywords.',
    features: [
      { icon: 'search', title: 'Keyword Research', description: 'Discover keywords in your niche.' },
      { icon: 'bar-chart', title: 'Search Volume', description: 'See how many people search each term.' },
      { icon: 'activity', title: 'Competition', description: 'Understand how hard keywords are to rank.' },
      { icon: 'list', title: 'Content Ideas', description: 'Get topics based on what people search.' },
      { icon: 'trending-up', title: 'Trends', description: 'See if keywords are growing or declining.' },
      { icon: 'target', title: 'Local Keywords', description: 'Find location-specific search terms.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More visibility, more traffic.',
    items: [
      { title: 'Know what to target', description: 'Data-driven keyword selection.' },
      { title: 'Create content that ranks', description: 'Write about what people search for.' },
      { title: 'Find easy wins', description: 'Identify keywords you can actually rank for.' },
      { title: 'Save on SEO tools', description: 'Research tools built into your platform.' },
    ],
  },
  useCases: {
    title: 'SEO for any business',
    items: [
      { industry: 'Local Businesses', description: 'Find local keywords customers search.' },
      { industry: 'Content Marketing', description: 'Research topics for blog posts.' },
      { industry: 'E-commerce', description: 'Optimise product pages for search.' },
    ],
  },
  cta: {
    title: 'Ready to rank higher?',
    description: 'Start finding keywords. Free 14-day trial.',
  },
};
