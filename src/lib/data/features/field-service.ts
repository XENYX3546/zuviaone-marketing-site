// Field Service Feature Page

import type { FeaturePageData } from '../types';

export const fieldService: FeaturePageData = {
  slug: 'field-service',
  seo: {
    title: 'Field Service Management Software | FSM for Small Business',
    description: 'Complete field service management software. Dispatch teams, track jobs, manage inventory. Built for trades and service businesses. Free trial.',
    keywords: ['field service management', 'FSM software', 'job management software', 'dispatch software', 'field service app', 'work order management'],
  },
  hero: {
    badge: 'Field Service Management',
    title: 'Run your field team',
    highlight: 'like a well-oiled machine.',
    description: 'From dispatch to completion, manage every job with complete visibility. Know where your team is, what they\'re working on, and what\'s next.',
    stats: [
      { value: '40%', label: 'More jobs completed' },
      { value: '25%', label: 'Reduced fuel costs' },
      { value: '99%', label: 'Job completion rate' },
    ],
  },
  problemSolution: {
    title: 'Field operations are chaotic without the right tools',
    description: 'When you can\'t see what\'s happening in the field, problems multiply.',
    items: [
      {
        problem: 'You don\'t know where your team is or what they\'re working on right now',
        solution: 'Live GPS tracking shows every team member\'s location and current job status in real-time',
      },
      {
        problem: 'Jobs run over time and customers are left waiting without updates',
        solution: 'Automatic ETA updates and on-the-way notifications keep customers informed',
      },
      {
        problem: 'Paperwork gets lost between the field and the office',
        solution: 'Digital job cards with photos and signatures sync instantly — no paper needed',
      },
      {
        problem: 'Inefficient routes mean wasted fuel and fewer jobs per day',
        solution: 'Smart routing optimises travel time so your team completes more jobs daily',
      },
    ],
  },
  solution: {
    title: 'Complete visibility and control',
    description: 'Everything you need to run field operations from one dashboard.',
    features: [
      { icon: 'map-pin', title: 'Live GPS Tracking', description: 'See where every team member is in real-time. Know ETAs and respond to delays instantly.' },
      { icon: 'check-square', title: 'Digital Job Cards', description: 'Checklists, photos, signatures, and notes. All captured on-site, synced to the office.' },
      { icon: 'users', title: 'Smart Dispatch', description: 'Assign the right person to the right job based on skills, location, and availability.' },
      { icon: 'calendar', title: 'Job Scheduling', description: 'Drag-and-drop scheduling with real-time availability. Reschedule in seconds.' },
      { icon: 'file-text', title: 'Instant Invoicing', description: 'Generate invoices on-site the moment a job is complete. Get paid faster.' },
      { icon: 'bar-chart', title: 'Performance Tracking', description: 'See job completion rates, time on site, and team productivity at a glance.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Real improvements you\'ll see in your operations.',
    items: [
      { title: 'Complete more jobs per day', description: 'Optimised routes and smart scheduling mean your team spends more time working, less time driving.' },
      { title: 'Delight your customers', description: 'Real-time ETAs, on-the-way notifications, and professional service every time.' },
      { title: 'Eliminate paperwork', description: 'Digital job cards sync instantly. No more chasing paper or deciphering handwriting.' },
      { title: 'Make smarter decisions', description: 'See which jobs are profitable, which team members excel, and where to improve.' },
    ],
  },
  useCases: {
    title: 'Built for field service businesses',
    items: [
      { industry: 'Trades & Construction', description: 'Manage multiple job sites, track materials, and coordinate subcontractors.' },
      { industry: 'HVAC & Plumbing', description: 'Dispatch emergency calls, manage maintenance contracts, and track equipment.' },
      { industry: 'Cleaning & Maintenance', description: 'Schedule recurring visits, manage checklists, and ensure quality control.' },
    ],
  },
  cta: {
    title: 'Ready to transform your field operations?',
    description: 'Join thousands of field service businesses running smoother with ZuviaOne.',
  },
};
