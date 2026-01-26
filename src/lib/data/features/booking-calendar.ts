// Booking Calendar Feature Page

import type { FeaturePageData } from '../types';

export const bookingCalendar: FeaturePageData = {
  slug: 'booking-calendar',
  seo: {
    title: 'Online Booking Calendar | Appointment Calendar',
    description: 'Share your availability and let customers book. Syncs with Google Calendar. Automatic confirmations and reminders. Start free.',
    keywords: ['booking calendar', 'appointment calendar', 'online calendar', 'scheduling calendar', 'availability calendar', 'calendar booking'],
  },
  hero: {
    badge: 'Booking Calendar',
    title: 'Share availability.',
    highlight: 'Fill your calendar.',
    description: 'A booking calendar that syncs everywhere. Customers see real-time availability and book instantly.',
    stats: [
      { value: '24/7', label: 'Bookable' },
      { value: '0', label: 'Double bookings' },
      { value: '2min', label: 'To book' },
    ],
  },
  problemSolution: {
    title: 'Scheduling back-and-forth wastes everyone\'s time',
    description: 'Let customers book when they see you\'re available.',
    items: [
      {
        problem: 'Endless emails and calls to find a time that works',
        solution: 'Customers see your availability and book instantly',
      },
      {
        problem: 'Your calendar and booking system are out of sync',
        solution: 'Two-way sync with Google, Outlook, and Apple calendars',
      },
      {
        problem: 'Different appointment types need different durations',
        solution: 'Multiple booking types with custom durations and buffers',
      },
      {
        problem: 'Customers book at times you\'re not actually available',
        solution: 'Real-time availability blocks out busy times automatically',
      },
    ],
  },
  solution: {
    title: 'Calendar that fills itself',
    description: 'Professional booking with real-time availability.',
    features: [
      { icon: 'calendar', title: 'Real-time Availability', description: 'Only show times you\'re actually free.' },
      { icon: 'refresh-cw', title: 'Calendar Sync', description: 'Two-way sync with Google, Outlook, Apple.' },
      { icon: 'clock', title: 'Multiple Types', description: 'Different durations for different appointment types.' },
      { icon: 'sliders', title: 'Buffer Time', description: 'Add padding between appointments.' },
      { icon: 'globe', title: 'Timezone Smart', description: 'Automatic timezone detection and conversion.' },
      { icon: 'link', title: 'Booking Link', description: 'Share your calendar link anywhere.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Less coordination, more bookings.',
    items: [
      { title: 'End the back-and-forth', description: 'Customers book in seconds, not after 10 emails.' },
      { title: 'Stay in sync', description: 'One calendar synced everywhere. No conflicts.' },
      { title: 'Book more meetings', description: '24/7 availability means more opportunities captured.' },
      { title: 'Look professional', description: 'Branded booking page impresses prospects.' },
    ],
  },
  useCases: {
    title: 'Booking calendar for any business',
    items: [
      { industry: 'Consultants', description: 'Let clients book discovery calls and meetings.' },
      { industry: 'Sales Teams', description: 'Prospects schedule demos at times that work.' },
      { industry: 'Service Providers', description: 'Customers book appointments without calling.' },
    ],
  },
  cta: {
    title: 'Ready to fill your calendar?',
    description: 'Start accepting bookings. Free 14-day trial.',
  },
};
