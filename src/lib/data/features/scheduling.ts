// Scheduling Feature Page

import type { FeaturePageData } from '../types';

export const scheduling: FeaturePageData = {
  slug: 'scheduling',
  seo: {
    title: 'Job Scheduling Software | Team & Appointment Scheduling',
    description: 'Powerful job scheduling software for field service teams. Drag-and-drop calendar, online booking, and automated reminders. Start free trial.',
    keywords: ['job scheduling software', 'appointment scheduling', 'team scheduling', 'field service scheduling', 'online booking system', 'calendar software'],
  },
  hero: {
    badge: 'Scheduling & Calendar',
    title: 'Stop the scheduling chaos.',
    highlight: 'Get organised.',
    description: 'The scheduling system that keeps your team on track. Book appointments, dispatch jobs, and manage your calendar without the headaches.',
    stats: [
      { value: '60%', label: 'Less scheduling time' },
      { value: '90%', label: 'Fewer no-shows' },
      { value: '3hrs', label: 'Saved per day' },
    ],
  },
  problemSolution: {
    title: 'Scheduling shouldn\'t be this hard',
    description: 'If your calendar is a mess, your business is a mess.',
    items: [
      {
        problem: 'Double bookings and scheduling conflicts waste time and frustrate customers',
        solution: 'Real-time availability prevents conflicts automatically — double bookings become impossible',
      },
      {
        problem: 'No-shows cost you money because you\'re not sending reminders',
        solution: 'Automated SMS and email reminders reduce no-shows by up to 90%',
      },
      {
        problem: 'Dispatching jobs takes forever when you can\'t see team availability',
        solution: 'Visual calendar shows everyone\'s schedule at a glance — dispatch in seconds',
      },
      {
        problem: 'Customers can\'t book online, so you\'re stuck playing phone tag',
        solution: '24/7 online booking lets customers schedule themselves while you sleep',
      },
    ],
  },
  solution: {
    title: 'Scheduling that just works',
    description: 'Visual calendar, smart booking, and automated reminders in one system.',
    features: [
      { icon: 'calendar', title: 'Visual Calendar', description: 'See your entire team\'s schedule at a glance. Drag-and-drop to reschedule in seconds.' },
      { icon: 'check-square', title: 'Online Booking', description: 'Let customers book appointments 24/7. Syncs with your calendar in real-time.' },
      { icon: 'message-square', title: 'Automated Reminders', description: 'Reduce no-shows by 90% with SMS and email reminders sent automatically.' },
      { icon: 'users', title: 'Team Availability', description: 'Set working hours, time off, and breaks. Never double-book your team again.' },
      { icon: 'map-pin', title: 'Smart Dispatch', description: 'Assign jobs based on location, skills, and availability. Optimise routes automatically.' },
      { icon: 'zap', title: 'Recurring Bookings', description: 'Set up repeat appointments with one click. Perfect for regular maintenance and services.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Transform how you manage time and appointments.',
    items: [
      { title: 'Reclaim your time', description: 'Stop juggling phone calls and spreadsheets. Scheduling takes minutes, not hours.' },
      { title: 'Reduce no-shows dramatically', description: 'Automated reminders mean customers show up. Every missed appointment costs you money.' },
      { title: 'Book more jobs', description: 'Online booking means customers can schedule when it\'s convenient for them, even at midnight.' },
      { title: 'Keep your team efficient', description: 'Smart dispatch means less driving, more working. Your team does more jobs per day.' },
    ],
  },
  useCases: {
    title: 'Perfect for service businesses',
    items: [
      { industry: 'Field Service', description: 'Dispatch technicians, manage job queues, and optimise routes for maximum efficiency.' },
      { industry: 'Appointments', description: 'Book consultations, manage client schedules, and send automatic confirmations.' },
      { industry: 'Home Services', description: 'Schedule cleaning, maintenance, or repair visits with easy recurring booking.' },
    ],
  },
  cta: {
    title: 'Ready to take control of your calendar?',
    description: 'Join thousands of businesses running smoother schedules with ZuviaOne.',
  },
};
