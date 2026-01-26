// Team Management Feature Page

import type { FeaturePageData } from '../types';

export const teamManagement: FeaturePageData = {
  slug: 'team-management',
  seo: {
    title: 'Team Management Software | Staff Management System',
    description: 'Manage your team from one place. Scheduling, time tracking, performance, and communication. Built for growing teams. Free trial.',
    keywords: ['team management software', 'staff management', 'employee management', 'team scheduling', 'workforce management', 'staff software'],
  },
  hero: {
    badge: 'Team Management',
    title: 'Happy team.',
    highlight: 'Better results.',
    description: 'Everything you need to manage, schedule, and empower your team. Less admin, more productivity.',
    stats: [
      { value: '40%', label: 'More productive' },
      { value: '3hrs', label: 'Saved weekly' },
      { value: '95%', label: 'Team satisfaction' },
    ],
  },
  problemSolution: {
    title: 'Managing people is harder than managing work',
    description: 'The right tools make team management simple.',
    items: [
      {
        problem: 'Scheduling staff takes hours of back-and-forth every week',
        solution: 'Visual scheduling with availability. Create schedules in minutes.',
      },
      {
        problem: 'You don\'t know if staff are working or where they are',
        solution: 'Time tracking and GPS check-ins show who\'s working and where.',
      },
      {
        problem: 'Performance is a black box until something goes wrong',
        solution: 'Real-time dashboards show team metrics and highlight issues early.',
      },
      {
        problem: 'Communication is scattered across calls, texts, and emails',
        solution: 'Team chat and announcements keep everyone aligned.',
      },
    ],
  },
  solution: {
    title: 'Team management made easy',
    description: 'Schedule, track, and empower your team.',
    features: [
      { icon: 'calendar', title: 'Staff Scheduling', description: 'Visual schedules with drag-and-drop. Assign shifts in seconds.' },
      { icon: 'clock', title: 'Time Tracking', description: 'Clock in/out, track hours, and export for payroll.' },
      { icon: 'map-pin', title: 'GPS Check-ins', description: 'Know where staff are when they clock in.' },
      { icon: 'message-square', title: 'Team Communication', description: 'Chat, announcements, and file sharing in one place.' },
      { icon: 'bar-chart', title: 'Performance Tracking', description: 'See productivity metrics and identify top performers.' },
      { icon: 'file-text', title: 'Staff Records', description: 'Certifications, documents, and contact info organised.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Better team, better results.',
    items: [
      { title: 'Schedule in minutes', description: 'Stop juggling spreadsheets. Create schedules with a few clicks.' },
      { title: 'Accountability without micromanaging', description: 'Time tracking and check-ins keep everyone honest.' },
      { title: 'Spot issues early', description: 'Performance data shows problems before they become crises.' },
      { title: 'Keep everyone connected', description: 'One place for announcements, updates, and conversations.' },
    ],
  },
  useCases: {
    title: 'Team management for every business',
    items: [
      { industry: 'Field Service', description: 'Schedule technicians, track time on-site, monitor performance.' },
      { industry: 'Retail & Hospitality', description: 'Shift scheduling with availability and time-off requests.' },
      { industry: 'Remote Teams', description: 'Stay connected and aligned regardless of location.' },
    ],
  },
  cta: {
    title: 'Ready to manage your team better?',
    description: 'Start building a more productive team. Free 14-day trial.',
  },
};
