// Automated Review Requests Feature Page

import type { FeaturePageData } from '../types';

export const reviewRequests: FeaturePageData = {
  slug: 'review-requests',
  seo: {
    title: 'Automated Review Requests | Google Reviews',
    description: 'Get more 5-star reviews automatically. Request reviews at the perfect time. Build your online reputation. Free trial.',
    keywords: ['review requests', 'Google reviews', 'automated reviews', 'review generation', 'reputation management', 'get more reviews'],
  },
  hero: {
    badge: 'Review Requests',
    title: 'More 5-star reviews.',
    highlight: 'Automatically.',
    description: 'Automated review requests sent at the perfect moment. Build a stellar reputation without lifting a finger.',
    stats: [
      { value: '5x', label: 'More reviews' },
      { value: '4.8★', label: 'Average rating' },
      { value: '0', label: 'Manual requests' },
    ],
  },
  problemSolution: {
    title: 'Happy customers don\'t leave reviews on their own',
    description: 'You have to ask — but asking is awkward.',
    items: [
      {
        problem: 'Happy customers don\'t think to leave reviews',
        solution: 'Automatic requests catch them right after a good experience',
      },
      {
        problem: 'Asking for reviews in person feels awkward',
        solution: 'Professional automated requests do the asking for you',
      },
      {
        problem: 'Negative feedback goes public instead of private',
        solution: 'Unhappy customers are directed to private feedback first',
      },
      {
        problem: 'Inconsistent asking means inconsistent reviews',
        solution: 'Every customer gets asked at the right time, every time',
      },
    ],
  },
  solution: {
    title: 'Reviews on autopilot',
    description: 'Build reputation automatically.',
    features: [
      { icon: 'send', title: 'Auto Requests', description: 'Requests sent automatically after jobs.' },
      { icon: 'star', title: 'Smart Routing', description: 'Happy customers → reviews, unhappy → private feedback.' },
      { icon: 'clock', title: 'Perfect Timing', description: 'Requests sent when satisfaction is highest.' },
      { icon: 'message-square', title: 'SMS & Email', description: 'Reach customers on their preferred channel.' },
      { icon: 'link', title: 'Direct Links', description: 'One-click links to your Google, Facebook, etc.' },
      { icon: 'bar-chart', title: 'Analytics', description: 'Track review rates and sentiment.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Better reputation, more customers.',
    items: [
      { title: 'Get 5x more reviews', description: 'Consistent asking means consistent reviews.' },
      { title: 'Filter negative feedback', description: 'Catch unhappy customers before they go public.' },
      { title: 'Higher ratings', description: 'Asking happy customers skews ratings positive.' },
      { title: 'Zero effort', description: 'Fully automated from start to finish.' },
    ],
  },
  useCases: {
    title: 'Reviews for any business',
    items: [
      { industry: 'Home Services', description: 'Request reviews after every job completion.' },
      { industry: 'Hospitality', description: 'Post-visit review requests for guests.' },
      { industry: 'Retail', description: 'Follow-up requests after purchases.' },
    ],
  },
  cta: {
    title: 'Ready for more 5-star reviews?',
    description: 'Start collecting reviews automatically. Free 14-day trial.',
  },
};
