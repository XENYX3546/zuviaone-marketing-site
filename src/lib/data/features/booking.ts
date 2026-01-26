// Online Booking Feature Page

import type { FeaturePageData } from '../types';

export const booking: FeaturePageData = {
  slug: 'booking-software',
  seo: {
    title: 'Online Booking Software | Appointment Booking System',
    description: 'Let customers book appointments online 24/7. Reduce no-shows with automated reminders. Easy setup, powerful features. Free trial.',
    keywords: ['online booking software', 'appointment booking', 'booking system', 'online appointments', 'booking calendar', 'self-booking'],
  },
  hero: {
    badge: 'Online Booking',
    title: 'Let customers book.',
    highlight: 'While you work.',
    description: 'Your booking page works 24/7. Customers pick a time, you get notified, everyone\'s happy. No more phone tag.',
    stats: [
      { value: '40%', label: 'More bookings' },
      { value: '24/7', label: 'Availability' },
      { value: '2min', label: 'Average booking time' },
    ],
  },
  problemSolution: {
    title: 'Phone bookings are killing your productivity',
    description: 'Every call interrupts your work. Every missed call is a missed booking.',
    items: [
      {
        problem: 'You miss calls while working and customers book with competitors instead',
        solution: 'Online booking captures appointments even when you can\'t answer the phone',
      },
      {
        problem: 'Back-and-forth phone calls to find a suitable time waste everyone\'s time',
        solution: 'Customers see real-time availability and book instantly',
      },
      {
        problem: 'No-shows cost you money and mess up your schedule',
        solution: 'Automated reminders reduce no-shows by up to 90%',
      },
      {
        problem: 'Manual booking means double-checking availability and risking conflicts',
        solution: 'Real-time calendar sync prevents double bookings automatically',
      },
    ],
  },
  solution: {
    title: 'Booking that works around the clock',
    description: 'Professional booking page with real-time availability.',
    features: [
      { icon: 'globe', title: 'Branded Booking Page', description: 'Your logo, colours, and services. Looks professional and builds trust.' },
      { icon: 'calendar', title: 'Real-time Availability', description: 'Customers only see times you\'re actually free. No conflicts, no confusion.' },
      { icon: 'message-square', title: 'Instant Confirmations', description: 'Booking confirmations sent immediately via email and SMS.' },
      { icon: 'bell', title: 'Smart Reminders', description: 'Automated reminders at the right times reduce no-shows dramatically.' },
      { icon: 'repeat', title: 'Recurring Bookings', description: 'Customers can book recurring appointments with one click.' },
      { icon: 'credit-card', title: 'Deposits & Payments', description: 'Take deposits at booking to reduce no-shows and improve cash flow.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More bookings, fewer no-shows, less admin.',
    items: [
      { title: 'Book while you sleep', description: 'Customers can book at midnight on a Sunday. You wake up to a full calendar.' },
      { title: 'Eliminate no-shows', description: 'Deposits and reminders mean customers actually show up.' },
      { title: 'Stop playing phone tag', description: 'No more back-and-forth calls. Customers book when it suits them.' },
      { title: 'Look professional', description: 'A branded booking page makes your business look established and trustworthy.' },
    ],
  },
  useCases: {
    title: 'Perfect for appointment-based businesses',
    items: [
      { industry: 'Service Businesses', description: 'Let customers book cleaning, repairs, or consultations online.' },
      { industry: 'Healthcare & Wellness', description: 'Patients book appointments without calling reception.' },
      { industry: 'Consultants', description: 'Clients schedule calls and meetings at times that work for both.' },
    ],
  },
  cta: {
    title: 'Ready to book more appointments?',
    description: 'Start accepting online bookings today. Free 14-day trial.',
  },
};
