// Audience Segmentation Feature Page

import type { FeaturePageData } from '../types';

export const segmentation: FeaturePageData = {
  slug: 'audience-segmentation',
  seo: {
    title: 'Audience Segmentation Tool | Customer Segmentation',
    description: 'Segment your customers for targeted marketing. Behaviour-based segments, dynamic lists, personalised campaigns. Free trial.',
    keywords: ['audience segmentation', 'customer segmentation', 'marketing segments', 'targeted marketing', 'customer segments', 'segmentation tool'],
  },
  hero: {
    badge: 'Segmentation',
    title: 'Right message.',
    highlight: 'Right people.',
    description: 'Segment your audience based on behaviour, value, and preferences. Send targeted messages that actually convert.',
    stats: [
      { value: '3x', label: 'Better conversion' },
      { value: '50%', label: 'Higher engagement' },
      { value: '0', label: 'Wasted messages' },
    ],
  },
  problemSolution: {
    title: 'Blasting everyone with the same message doesn\'t work',
    description: 'Relevance drives results.',
    items: [
      {
        problem: 'Same message to everyone means low engagement and unsubscribes',
        solution: 'Targeted segments get relevant messages they want to receive',
      },
      {
        problem: 'No way to identify your best customers or most promising leads',
        solution: 'Automatic segments based on value, behaviour, and engagement',
      },
      {
        problem: 'Static lists go stale and become useless',
        solution: 'Dynamic segments update automatically as customer data changes',
      },
      {
        problem: 'Creating segments manually takes forever',
        solution: 'Pre-built segment templates for common use cases',
      },
    ],
  },
  solution: {
    title: 'Segments that drive results',
    description: 'Target the right people with the right message.',
    features: [
      { icon: 'filter', title: 'Smart Segments', description: 'Build segments based on any customer data.' },
      { icon: 'refresh-cw', title: 'Dynamic Lists', description: 'Segments update automatically as data changes.' },
      { icon: 'activity', title: 'Behaviour-Based', description: 'Segment by actions, purchases, and engagement.' },
      { icon: 'dollar-sign', title: 'Value Segments', description: 'Identify VIPs and high-value customers.' },
      { icon: 'file-text', title: 'Templates', description: 'Pre-built segments for common use cases.' },
      { icon: 'bar-chart', title: 'Segment Analytics', description: 'See size, engagement, and value by segment.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Higher engagement, better conversions.',
    items: [
      { title: 'Better engagement', description: 'Relevant messages get opened and clicked.' },
      { title: 'Higher conversion', description: 'Right offer to right person means more sales.' },
      { title: 'Less unsubscribes', description: 'People don\'t leave when content is relevant.' },
      { title: 'Know your customers', description: 'Understand who\'s valuable and why.' },
    ],
  },
  useCases: {
    title: 'Segmentation for marketing',
    items: [
      { industry: 'Email Marketing', description: 'Send targeted campaigns to specific segments.' },
      { industry: 'Retention', description: 'Identify at-risk customers and win them back.' },
      { industry: 'Upselling', description: 'Target customers ready for their next purchase.' },
    ],
  },
  cta: {
    title: 'Ready to target smarter?',
    description: 'Start segmenting your audience. Free 14-day trial.',
  },
};
