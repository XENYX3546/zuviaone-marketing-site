// Mileage Tracking Feature Page

import type { FeaturePageData } from '../types';

export const mileageTracking: FeaturePageData = {
  slug: 'mileage-tracking',
  seo: {
    title: 'Mileage Tracking for Business | Vehicle Mileage Tracker',
    description: 'Automatic mileage tracking for business vehicles. GPS logging, expense reports, tax compliance. Stop losing money on unreported miles.',
    keywords: ['mileage tracking', 'mileage tracker', 'vehicle mileage', 'business mileage', 'mileage log', 'mileage reimbursement'],
  },
  hero: {
    badge: 'Mileage Tracking',
    title: 'Every mile.',
    highlight: 'Every penny.',
    description: 'Automatic mileage tracking that never forgets. Accurate logs for reimbursement, expenses, and tax.',
    stats: [
      { value: '100%', label: 'Miles captured' },
      { value: '£2,500', label: 'Avg annual savings' },
      { value: '0', label: 'Manual logging' },
    ],
  },
  problemSolution: {
    title: 'Unreported miles cost you money',
    description: 'If you\'re not tracking mileage, you\'re leaving money on the table.',
    items: [
      {
        problem: 'Forgetting to log trips means losing deductible expenses',
        solution: 'Automatic GPS tracking logs every business trip',
      },
      {
        problem: 'Manual mileage logs are inaccurate and time-consuming',
        solution: 'Automatic detection starts tracking when you drive',
      },
      {
        problem: 'No proof of business use if HMRC asks questions',
        solution: 'Detailed logs with dates, distances, and purposes for compliance',
      },
      {
        problem: 'Calculating reimbursements takes hours every month',
        solution: 'Automatic calculations at current HMRC rates',
      },
    ],
  },
  solution: {
    title: 'Mileage tracking on autopilot',
    description: 'Never forget a business mile again.',
    features: [
      { icon: 'map-pin', title: 'GPS Tracking', description: 'Automatic tracking when you\'re driving.' },
      { icon: 'map', title: 'Route Recording', description: 'Complete route history with start and end points.' },
      { icon: 'tag', title: 'Trip Classification', description: 'Mark trips as business or personal easily.' },
      { icon: 'calculator', title: 'HMRC Rates', description: 'Automatic calculations at current approved rates.' },
      { icon: 'file-text', title: 'Expense Reports', description: 'Export mileage for reimbursement or expenses.' },
      { icon: 'shield', title: 'Audit Ready', description: 'Compliant logs that satisfy HMRC requirements.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Capture every mile, claim every penny.',
    items: [
      { title: 'Never miss a mile', description: 'Automatic tracking captures trips you would have forgotten.' },
      { title: 'Save thousands yearly', description: 'Proper mileage claims add up to significant tax savings.' },
      { title: 'Stay compliant', description: 'Detailed logs meet HMRC requirements for business mileage.' },
      { title: 'Zero effort', description: 'No manual logging. It just works in the background.' },
    ],
  },
  useCases: {
    title: 'Mileage tracking for mobile workers',
    items: [
      { industry: 'Field Service', description: 'Track technician trips between job sites.' },
      { industry: 'Sales Teams', description: 'Log customer visits and sales calls automatically.' },
      { industry: 'Consultants', description: 'Capture client visits for billing and expenses.' },
    ],
  },
  cta: {
    title: 'Ready to capture every mile?',
    description: 'Start tracking mileage automatically. Free 14-day trial.',
  },
};
