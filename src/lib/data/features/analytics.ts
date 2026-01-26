// Analytics Feature Page

import type { FeaturePageData } from '../types';

export const analytics: FeaturePageData = {
  slug: 'analytics',
  seo: {
    title: 'Business Analytics Software | Reporting & Dashboards',
    description: 'Real-time business analytics and reporting. Track KPIs, monitor performance, and make data-driven decisions. Free 14-day trial.',
    keywords: ['business analytics', 'reporting software', 'business intelligence', 'KPI dashboard', 'business reporting', 'analytics software'],
  },
  hero: {
    badge: 'Analytics & Reporting',
    title: 'See everything.',
    highlight: 'Know everything.',
    description: 'Real-time dashboards and reports that show you exactly how your business is performing. Make decisions based on data, not guesswork.',
    stats: [
      { value: 'Real-time', label: 'Data updates' },
      { value: '50+', label: 'Report templates' },
      { value: '1-click', label: 'Export to PDF' },
    ],
  },
  problemSolution: {
    title: 'You\'re flying blind',
    description: 'Without data, every decision is a guess.',
    items: [
      {
        problem: 'You don\'t know which services are most profitable until year-end',
        solution: 'Real-time profitability reports show your best performers instantly',
      },
      {
        problem: 'Team performance is a mystery — who\'s crushing it, who needs help?',
        solution: 'Performance dashboards show individual and team metrics at a glance',
      },
      {
        problem: 'Cash flow surprises keep catching you off guard',
        solution: 'Cash flow forecasting shows what\'s coming so you can plan ahead',
      },
      {
        problem: 'Creating reports takes hours of spreadsheet wrestling',
        solution: 'One-click reports generate instantly — no formulas, no formatting',
      },
    ],
  },
  solution: {
    title: 'Data that drives decisions',
    description: 'Dashboards, reports, and insights all in one place.',
    features: [
      { icon: 'bar-chart', title: 'Real-time Dashboard', description: 'KPIs updating live. Revenue, jobs, pipeline — all at a glance.' },
      { icon: 'pie-chart', title: 'Custom Reports', description: 'Build reports on any data. Filter, group, and visualise your way.' },
      { icon: 'users', title: 'Team Performance', description: 'See who\'s completing jobs, hitting targets, and where to coach.' },
      { icon: 'credit-card', title: 'Financial Insights', description: 'Revenue trends, payment status, and cash flow projections.' },
      { icon: 'calendar', title: 'Scheduled Reports', description: 'Get reports emailed automatically — daily, weekly, or monthly.' },
      { icon: 'target', title: 'Goal Tracking', description: 'Set targets and track progress. Know if you\'re on pace to hit goals.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Confidence in every decision you make.',
    items: [
      { title: 'Make smarter decisions', description: 'Data-backed decisions beat gut feelings. Know what\'s working and what\'s not.' },
      { title: 'Spot problems early', description: 'See trends before they become crises. Fix small issues before they\'re big.' },
      { title: 'Save hours on reporting', description: 'Automated reports replace manual spreadsheet work. Get time back.' },
      { title: 'Hold teams accountable', description: 'Clear metrics mean clear expectations. Everyone knows where they stand.' },
    ],
  },
  useCases: {
    title: 'Insights for every role',
    items: [
      { industry: 'Business Owners', description: 'High-level dashboards showing revenue, growth, and business health.' },
      { industry: 'Operations Managers', description: 'Job completion rates, team utilisation, and efficiency metrics.' },
      { industry: 'Finance Teams', description: 'Revenue reports, aged receivables, and cash flow analysis.' },
    ],
  },
  cta: {
    title: 'Ready to see your business clearly?',
    description: 'Join thousands of businesses making data-driven decisions with ZuviaOne.',
  },
};
