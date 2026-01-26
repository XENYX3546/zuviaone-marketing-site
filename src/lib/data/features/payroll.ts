// Payroll Software Feature Page

import type { FeaturePageData } from '../types';

export const payroll: FeaturePageData = {
  slug: 'payroll-software',
  seo: {
    title: 'Small Business Payroll Software | Easy Payroll',
    description: 'Run payroll in minutes, not hours. Automatic calculations, tax compliance, and pay stubs. Built for small businesses. Free trial.',
    keywords: ['payroll software', 'small business payroll', 'payroll system', 'pay stubs', 'payroll processing', 'employee payroll'],
  },
  hero: {
    badge: 'Payroll',
    title: 'Payroll in minutes.',
    highlight: 'Not hours.',
    description: 'Stop dreading payday. Automatic calculations, tax compliance, and happy employees — all without the headache.',
    stats: [
      { value: '5min', label: 'To run payroll' },
      { value: '100%', label: 'Accurate' },
      { value: '£0', label: 'Penalties' },
    ],
  },
  problemSolution: {
    title: 'Payroll shouldn\'t stress you out',
    description: 'Most small business owners dread payday. You shouldn\'t.',
    items: [
      {
        problem: 'Manual payroll calculations take hours and risk errors',
        solution: 'Automatic calculations handle wages, tax, and deductions perfectly',
      },
      {
        problem: 'Staying compliant with changing tax rules is a nightmare',
        solution: 'Built-in compliance updates automatically with new regulations',
      },
      {
        problem: 'Staff constantly ask for pay stubs and tax documents',
        solution: 'Self-service portal gives employees access to their documents anytime',
      },
      {
        problem: 'Tracking commissions and variable pay is complicated',
        solution: 'Flexible pay structures handle hourly, salary, commission, and bonuses',
      },
    ],
  },
  solution: {
    title: 'Payroll made simple',
    description: 'Everything you need to pay your team correctly.',
    features: [
      { icon: 'calculator', title: 'Automatic Calculations', description: 'Wages, tax, NI, pensions — all calculated automatically.' },
      { icon: 'file-text', title: 'Pay Stubs', description: 'Professional payslips generated and sent automatically.' },
      { icon: 'shield', title: 'Tax Compliance', description: 'PAYE, RTI submissions, and year-end handled for you.' },
      { icon: 'clock', title: 'Time Integration', description: 'Hours from timesheets flow directly into payroll.' },
      { icon: 'credit-card', title: 'Direct Deposits', description: 'Pay staff directly to their bank accounts.' },
      { icon: 'users', title: 'Employee Portal', description: 'Staff access their own pay stubs and tax documents.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Accurate payroll, happy team, zero stress.',
    items: [
      { title: 'Run payroll in 5 minutes', description: 'What used to take hours now takes minutes. Get your time back.' },
      { title: 'Never worry about compliance', description: 'Built-in rules ensure you\'re always following the latest regulations.' },
      { title: 'Eliminate errors', description: 'Automatic calculations mean no more fixing mistakes or angry employees.' },
      { title: 'Empower your team', description: 'Self-service access means fewer questions and happier staff.' },
    ],
  },
  useCases: {
    title: 'Payroll for growing teams',
    items: [
      { industry: 'Service Businesses', description: 'Handle hourly workers, overtime, and variable hours easily.' },
      { industry: 'Sales Teams', description: 'Calculate commissions automatically based on performance.' },
      { industry: 'Trades', description: 'Manage field workers with different rates and allowances.' },
    ],
  },
  cta: {
    title: 'Ready to simplify payroll?',
    description: 'Start running payroll in minutes. Free 14-day trial.',
  },
};
