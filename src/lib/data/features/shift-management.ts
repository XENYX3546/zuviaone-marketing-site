// Shift Management Feature Page

import type { FeaturePageData } from '../types';

export const shiftManagement: FeaturePageData = {
  slug: 'shift-management',
  seo: {
    title: 'Shift Management Software | Time Tracking',
    description: 'Clock in/out, track hours, manage timesheets. Accurate time tracking for payroll. Mobile-friendly for field teams. Free trial.',
    keywords: ['shift management', 'time tracking', 'clock in out', 'timesheet software', 'employee time tracking', 'shift tracking'],
  },
  hero: {
    badge: 'Shift Management',
    title: 'Accurate hours.',
    highlight: 'Every time.',
    description: 'Clock in/out from any device. Accurate time tracking that flows straight to payroll.',
    stats: [
      { value: '100%', label: 'Accuracy' },
      { value: '0', label: 'Time theft' },
      { value: '2hrs', label: 'Saved on payroll' },
    ],
  },
  problemSolution: {
    title: 'Manual timesheets are inaccurate and slow',
    description: 'Bad time data means bad payroll.',
    items: [
      {
        problem: 'Paper timesheets are illegible, late, and often inaccurate',
        solution: 'Digital clock in/out with GPS verification',
      },
      {
        problem: 'Staff round up hours or clock in before arriving',
        solution: 'GPS-verified check-ins ensure accuracy',
      },
      {
        problem: 'Collecting and processing timesheets takes hours',
        solution: 'Automatic timesheet generation ready for payroll',
      },
      {
        problem: 'Breaks and overtime aren\'t tracked properly',
        solution: 'Automatic break deductions and overtime calculations',
      },
    ],
  },
  solution: {
    title: 'Time tracking that works',
    description: 'Accurate hours, automatic timesheets.',
    features: [
      { icon: 'clock', title: 'Clock In/Out', description: 'Simple clock in/out from mobile or desktop.' },
      { icon: 'map-pin', title: 'GPS Verification', description: 'Verify staff are where they should be.' },
      { icon: 'file-text', title: 'Auto Timesheets', description: 'Timesheets generated automatically.' },
      { icon: 'coffee', title: 'Break Tracking', description: 'Breaks deducted automatically.' },
      { icon: 'trending-up', title: 'Overtime', description: 'Overtime calculated based on your rules.' },
      { icon: 'download', title: 'Payroll Export', description: 'Export hours directly to payroll.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Accurate payroll, less admin.',
    items: [
      { title: 'Eliminate time theft', description: 'GPS verification ensures honest time tracking.' },
      { title: 'Accurate payroll', description: 'Exact hours mean exact pay, every time.' },
      { title: 'Save hours on admin', description: 'No more chasing and processing paper timesheets.' },
      { title: 'Stay compliant', description: 'Proper records for working time regulations.' },
    ],
  },
  useCases: {
    title: 'Time tracking for any team',
    items: [
      { industry: 'Field Service', description: 'Track hours across multiple job sites.' },
      { industry: 'Retail & Hospitality', description: 'Shift-based time tracking with breaks.' },
      { industry: 'Construction', description: 'Per-site time tracking for job costing.' },
    ],
  },
  cta: {
    title: 'Ready for accurate time tracking?',
    description: 'Start tracking shifts properly. Free 14-day trial.',
  },
};
