// Reporting & Analytics Feature Page

import type { FeaturePageData } from '../types';

export const reporting: FeaturePageData = {
  slug: 'reporting-analytics',
  seo: {
    title: 'Business Reporting & Analytics | Report Builder',
    description: 'Create custom reports on any business data. Real-time dashboards, scheduled reports, data-driven decisions. Free trial.',
    keywords: ['business reporting', 'reporting software', 'business analytics', 'custom reports', 'data analytics', 'report builder'],
  },
  hero: {
    badge: 'Reporting & Analytics',
    title: 'Data that drives',
    highlight: 'decisions.',
    description: 'Custom reports and real-time dashboards that show exactly what you need to know. No spreadsheet wrestling.',
    stats: [
      { value: 'Real-time', label: 'Updates' },
      { value: '1-click', label: 'Reports' },
      { value: '50+', label: 'Templates' },
    ],
  },
  problemSolution: {
    title: 'You\'re drowning in data but starving for insights',
    description: 'Data is only useful when it\'s actionable.',
    items: [
      {
        problem: 'Creating reports takes hours of exporting and spreadsheet work',
        solution: 'One-click reports pull data and format automatically',
      },
      {
        problem: 'By the time reports are ready, the data is stale',
        solution: 'Real-time dashboards show current data always',
      },
      {
        problem: 'Different people need different views of the same data',
        solution: 'Custom dashboards for every role and responsibility',
      },
      {
        problem: 'You forget to check reports regularly',
        solution: 'Scheduled reports delivered to your inbox automatically',
      },
    ],
  },
  solution: {
    title: 'Insights at your fingertips',
    description: 'Reports and dashboards for every need.',
    features: [
      { icon: 'bar-chart', title: 'Custom Reports', description: 'Build reports on any data with drag-and-drop.' },
      { icon: 'pie-chart', title: 'Visualisations', description: 'Charts, graphs, and tables that make sense.' },
      { icon: 'layout', title: 'Dashboards', description: 'Real-time dashboards for at-a-glance insights.' },
      { icon: 'calendar', title: 'Scheduled Reports', description: 'Automatic reports delivered on schedule.' },
      { icon: 'download', title: 'Export', description: 'Export to PDF, Excel, or CSV.' },
      { icon: 'users', title: 'Sharing', description: 'Share dashboards with team members.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Smarter decisions, faster.',
    items: [
      { title: 'Save hours weekly', description: 'Reports that used to take hours now take seconds.' },
      { title: 'Always current', description: 'Real-time data means no stale information.' },
      { title: 'Right data, right person', description: 'Custom views for every role.' },
      { title: 'Proactive insights', description: 'Scheduled reports keep you informed without effort.' },
    ],
  },
  useCases: {
    title: 'Reporting for every team',
    items: [
      { industry: 'Executives', description: 'High-level dashboards showing business health.' },
      { industry: 'Operations', description: 'Performance metrics and efficiency tracking.' },
      { industry: 'Finance', description: 'Revenue, costs, and profitability analysis.' },
    ],
  },
  cta: {
    title: 'Ready to see your data clearly?',
    description: 'Start building reports that matter. Free 14-day trial.',
  },
};
