// Customer Feedback Feature Page

import type { FeaturePageData } from '../types';

export const customerFeedback: FeaturePageData = {
  slug: 'customer-feedback',
  seo: {
    title: 'Customer Feedback Software | Review Collection',
    description: 'Collect customer feedback and reviews automatically. Improve service, get more 5-star reviews, build reputation. Free trial.',
    keywords: ['customer feedback', 'review collection', 'customer reviews', 'feedback software', 'NPS survey', 'customer satisfaction'],
  },
  hero: {
    badge: 'Customer Feedback',
    title: 'More 5-star reviews.',
    highlight: 'Better service.',
    description: 'Collect feedback automatically after every job. Turn happy customers into 5-star reviews and catch problems before they escalate.',
    stats: [
      { value: '3x', label: 'More reviews' },
      { value: '4.8★', label: 'Average rating' },
      { value: '0', label: 'Bad surprises' },
    ],
  },
  problemSolution: {
    title: 'You don\'t know what customers really think',
    description: 'Silence isn\'t satisfaction. Get real feedback.',
    items: [
      {
        problem: 'Happy customers don\'t leave reviews — only angry ones do',
        solution: 'Automatic requests catch happy customers at the right moment',
      },
      {
        problem: 'Problems fester until customers leave or complain publicly',
        solution: 'Private feedback catches issues before they become reviews',
      },
      {
        problem: 'No systematic way to collect and act on feedback',
        solution: 'Automatic collection, alerts, and response workflows',
      },
      {
        problem: 'Asking for reviews manually is awkward and inconsistent',
        solution: 'Automated requests sent at the perfect time after every job',
      },
    ],
  },
  solution: {
    title: 'Feedback that drives improvement',
    description: 'Collect, analyse, and act on customer feedback.',
    features: [
      { icon: 'star', title: 'Review Requests', description: 'Automatic requests to happy customers for Google/Facebook reviews.' },
      { icon: 'message-square', title: 'Private Feedback', description: 'Catch negative feedback privately before it goes public.' },
      { icon: 'bar-chart', title: 'Satisfaction Scores', description: 'Track NPS and satisfaction trends over time.' },
      { icon: 'bell', title: 'Instant Alerts', description: 'Get notified immediately when feedback needs attention.' },
      { icon: 'user', title: 'By Technician', description: 'See feedback by team member to identify training needs.' },
      { icon: 'trending-up', title: 'Response Tracking', description: 'Track how you respond and resolve issues.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Better reputation, happier customers.',
    items: [
      { title: 'More 5-star reviews', description: 'Happy customers become public advocates.' },
      { title: 'Catch problems early', description: 'Private feedback lets you fix issues before they escalate.' },
      { title: 'Improve continuously', description: 'Real feedback drives real service improvements.' },
      { title: 'Build reputation', description: 'Strong reviews attract more customers.' },
    ],
  },
  useCases: {
    title: 'Feedback for service businesses',
    items: [
      { industry: 'Home Services', description: 'Post-job feedback and review requests.' },
      { industry: 'Hospitality', description: 'Guest satisfaction surveys and recovery.' },
      { industry: 'Healthcare', description: 'Patient experience and satisfaction tracking.' },
    ],
  },
  cta: {
    title: 'Ready to get more 5-star reviews?',
    description: 'Start collecting feedback automatically. Free 14-day trial.',
  },
};
