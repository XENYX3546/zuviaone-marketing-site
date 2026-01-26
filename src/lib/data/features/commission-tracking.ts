// Commission Tracking Feature Page

import type { FeaturePageData } from '../types';

export const commissionTracking: FeaturePageData = {
  slug: 'commission-tracking',
  seo: {
    title: 'Sales Commission Tracking Software | Commission Calculator',
    description: 'Calculate and track sales commissions automatically. Accurate payouts, transparent reporting, motivated team. Free trial.',
    keywords: ['commission tracking', 'sales commission', 'commission calculator', 'commission software', 'sales incentives', 'commission management'],
  },
  hero: {
    badge: 'Commission Tracking',
    title: 'Accurate commissions.',
    highlight: 'Motivated team.',
    description: 'Automatic commission calculations that are always right. Transparent reporting that motivates your sales team.',
    stats: [
      { value: '100%', label: 'Accuracy' },
      { value: '0', label: 'Disputes' },
      { value: '25%', label: 'More sales' },
    ],
  },
  problemSolution: {
    title: 'Commission errors demotivate teams',
    description: 'Nothing kills motivation faster than incorrect pay.',
    items: [
      {
        problem: 'Manual commission calculations are time-consuming and error-prone',
        solution: 'Automatic calculations based on your commission rules',
      },
      {
        problem: 'Sales team doesn\'t know how much they\'ve earned until payday',
        solution: 'Real-time commission dashboards show earnings as they happen',
      },
      {
        problem: 'Complex commission structures are impossible to track manually',
        solution: 'Support for tiered rates, bonuses, splits, and custom rules',
      },
      {
        problem: 'Disputes over commissions damage trust and morale',
        solution: 'Transparent audit trail shows exactly how each commission was calculated',
      },
    ],
  },
  solution: {
    title: 'Commissions that just work',
    description: 'Fair, accurate, and motivating.',
    features: [
      { icon: 'calculator', title: 'Auto Calculations', description: 'Commissions calculated automatically when deals close.' },
      { icon: 'bar-chart', title: 'Real-time Dashboards', description: 'Sales team sees their earnings as they happen.' },
      { icon: 'layers', title: 'Flexible Structures', description: 'Flat rates, percentages, tiers, and custom rules.' },
      { icon: 'users', title: 'Team Splits', description: 'Split commissions between team members automatically.' },
      { icon: 'file-text', title: 'Audit Trail', description: 'Complete transparency on how commissions are calculated.' },
      { icon: 'credit-card', title: 'Payroll Integration', description: 'Export commissions directly to payroll.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Motivated team, accurate payouts.',
    items: [
      { title: 'Eliminate errors', description: 'Automatic calculations mean no more mistakes or disputes.' },
      { title: 'Motivate your team', description: 'Real-time visibility into earnings drives performance.' },
      { title: 'Save admin time', description: 'Stop spending hours on spreadsheets every pay period.' },
      { title: 'Build trust', description: 'Transparent calculations mean no surprises at payday.' },
    ],
  },
  useCases: {
    title: 'Commission tracking for sales teams',
    items: [
      { industry: 'Sales Teams', description: 'Track individual and team commissions on every deal.' },
      { industry: 'Service Businesses', description: 'Commission technicians based on upsells and performance.' },
      { industry: 'Agencies', description: 'Split commissions between account managers and closers.' },
    ],
  },
  cta: {
    title: 'Ready to automate commissions?',
    description: 'Start tracking commissions accurately. Free 14-day trial.',
  },
};
