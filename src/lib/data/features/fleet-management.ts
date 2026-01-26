// Fleet Management Feature Page

import type { FeaturePageData } from '../types';

export const fleetManagement: FeaturePageData = {
  slug: 'fleet-management',
  seo: {
    title: 'Fleet Management Software | Vehicle Tracking & Management',
    description: 'Track vehicles, manage maintenance, and reduce costs. GPS tracking, fuel management, and driver safety. Free fleet management trial.',
    keywords: ['fleet management software', 'vehicle tracking', 'fleet tracking', 'GPS fleet', 'vehicle management', 'fleet software'],
  },
  hero: {
    badge: 'Fleet Management',
    title: 'Know your fleet.',
    highlight: 'Control your costs.',
    description: 'Track every vehicle, manage maintenance, and cut fleet costs. Complete visibility into your mobile workforce.',
    stats: [
      { value: '25%', label: 'Fuel savings' },
      { value: '100%', label: 'Visibility' },
      { value: '40%', label: 'Less downtime' },
    ],
  },
  problemSolution: {
    title: 'Your fleet is your biggest expense',
    description: 'Without visibility, costs spiral out of control.',
    items: [
      {
        problem: 'You don\'t know where vehicles are or what drivers are doing',
        solution: 'Real-time GPS tracking shows every vehicle location and status',
      },
      {
        problem: 'Maintenance gets missed and vehicles break down at the worst times',
        solution: 'Automated maintenance scheduling prevents costly breakdowns',
      },
      {
        problem: 'Fuel costs are out of control with no way to identify waste',
        solution: 'Fuel tracking and route optimisation cut consumption by 25%',
      },
      {
        problem: 'MOT and insurance expiries catch you by surprise',
        solution: 'Document tracking with automatic reminders before expiry',
      },
    ],
  },
  solution: {
    title: 'Complete fleet control',
    description: 'Everything you need to manage vehicles efficiently.',
    features: [
      { icon: 'map-pin', title: 'GPS Tracking', description: 'Real-time location of every vehicle. Playback routes and stops.' },
      { icon: 'tool', title: 'Maintenance Scheduling', description: 'Schedule services based on mileage or time. Never miss maintenance.' },
      { icon: 'fuel', title: 'Fuel Management', description: 'Track fuel purchases, monitor consumption, identify waste.' },
      { icon: 'file-text', title: 'Document Management', description: 'Insurance, MOT, and licences tracked with expiry alerts.' },
      { icon: 'users', title: 'Driver Management', description: 'Assign drivers to vehicles, track behaviour, ensure compliance.' },
      { icon: 'bar-chart', title: 'Fleet Analytics', description: 'Cost per mile, utilisation rates, and efficiency metrics.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Lower costs, fewer breakdowns, complete control.',
    items: [
      { title: 'Cut fuel costs by 25%', description: 'Route optimisation and behaviour monitoring reduce fuel waste.' },
      { title: 'Prevent breakdowns', description: 'Scheduled maintenance catches problems before they strand you.' },
      { title: 'Stay compliant', description: 'Never miss an MOT, insurance renewal, or driver licence check.' },
      { title: 'Know exactly where vehicles are', description: 'Real-time tracking for customer ETAs and operational visibility.' },
    ],
  },
  useCases: {
    title: 'Fleet management for every industry',
    items: [
      { industry: 'Field Service', description: 'Track technicians, optimise routes, and provide accurate ETAs.' },
      { industry: 'Delivery & Logistics', description: 'Monitor deliveries, track mileage, and prove compliance.' },
      { industry: 'Trades', description: 'Manage work vans, track tools and equipment location.' },
    ],
  },
  cta: {
    title: 'Ready to take control of your fleet?',
    description: 'Start tracking vehicles today. Free 14-day trial.',
  },
};
