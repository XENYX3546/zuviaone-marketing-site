// Staff GPS Tracking Feature Page

import type { FeaturePageData } from '../types';

export const staffTracking: FeaturePageData = {
  slug: 'staff-tracking',
  seo: {
    title: 'Staff GPS Tracking | Employee Location Tracking',
    description: 'Know where your field team is in real-time. GPS tracking, time verification, route history. Improve accountability and efficiency.',
    keywords: ['staff tracking', 'employee GPS tracking', 'workforce tracking', 'field staff tracking', 'GPS employee tracking', 'location tracking'],
  },
  hero: {
    badge: 'Staff Tracking',
    title: 'Know where.',
    highlight: 'Know when.',
    description: 'Real-time GPS tracking for your field team. Verify locations, improve accountability, and provide accurate ETAs.',
    stats: [
      { value: 'Real-time', label: 'Location' },
      { value: '20%', label: 'More efficient' },
      { value: '100%', label: 'Accountability' },
    ],
  },
  problemSolution: {
    title: 'You can\'t manage what you can\'t see',
    description: 'Field visibility is essential for efficiency.',
    items: [
      {
        problem: 'You don\'t know where your team is or if they\'re on track',
        solution: 'Real-time GPS shows every team member\'s location',
      },
      {
        problem: 'Customers ask for ETAs but you have no idea',
        solution: 'Live tracking enables accurate ETA estimates',
      },
      {
        problem: 'No way to verify staff were actually at job sites',
        solution: 'GPS check-ins prove presence at locations',
      },
      {
        problem: 'Inefficient routes waste time and fuel',
        solution: 'Route history shows where time is being spent',
      },
    ],
  },
  solution: {
    title: 'Complete field visibility',
    description: 'Know where your team is, always.',
    features: [
      { icon: 'map-pin', title: 'Live Location', description: 'Real-time GPS tracking on a live map.' },
      { icon: 'map', title: 'Route History', description: 'See where staff have been throughout the day.' },
      { icon: 'check-circle', title: 'Location Verification', description: 'Confirm staff are at job sites when they say.' },
      { icon: 'clock', title: 'Time on Site', description: 'Track how long staff spend at each location.' },
      { icon: 'navigation', title: 'ETAs', description: 'Accurate arrival times based on real location.' },
      { icon: 'shield', title: 'Privacy Controls', description: 'Tracking during work hours only.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Accountability, efficiency, transparency.',
    items: [
      { title: 'Improve accountability', description: 'Staff know their location is tracked during work hours.' },
      { title: 'Accurate ETAs', description: 'Tell customers exactly when to expect their technician.' },
      { title: 'Optimise routes', description: 'Identify inefficient routes and improve them.' },
      { title: 'Verify time on site', description: 'Know staff actually spent time at job locations.' },
    ],
  },
  useCases: {
    title: 'Staff tracking for field teams',
    items: [
      { industry: 'Field Service', description: 'Track technicians and provide customer ETAs.' },
      { industry: 'Delivery', description: 'Monitor drivers and optimise routes.' },
      { industry: 'Sales', description: 'Verify customer visits and territory coverage.' },
    ],
  },
  cta: {
    title: 'Ready for field visibility?',
    description: 'Start tracking your team. Free 14-day trial.',
  },
};
