// Customer Portal Feature Page

import type { FeaturePageData } from '../types';

export const customerPortal: FeaturePageData = {
  slug: 'customer-portal',
  seo: {
    title: 'Customer Portal Software | Client Portal for Business',
    description: 'Give customers their own portal to book, pay, and communicate. Self-service that reduces your workload. Free 14-day trial.',
    keywords: ['customer portal', 'client portal software', 'self-service portal', 'customer self-service', 'booking portal', 'client portal'],
  },
  hero: {
    badge: 'Customer Portal',
    title: 'Customers help themselves.',
    highlight: 'You help your business.',
    description: 'A branded portal where customers book appointments, pay invoices, and find answers — without calling you.',
    stats: [
      { value: '70%', label: 'Self-service rate' },
      { value: '50%', label: 'Fewer calls' },
      { value: '24/7', label: 'Availability' },
    ],
  },
  problemSolution: {
    title: 'Your phone never stops ringing',
    description: 'Simple requests shouldn\'t require a phone call.',
    items: [
      {
        problem: 'Customers call to check appointment times, pay invoices, or ask simple questions',
        solution: 'Self-service portal lets customers find answers and take action themselves',
      },
      {
        problem: 'You\'re stuck answering the same questions over and over',
        solution: 'FAQs and knowledge base answer common questions automatically',
      },
      {
        problem: 'After-hours enquiries wait until morning, frustrating customers',
        solution: '24/7 portal access means customers get what they need anytime',
      },
      {
        problem: 'No self-service means you\'re the bottleneck for everything',
        solution: 'Customers book, pay, and communicate without waiting for you',
      },
    ],
  },
  solution: {
    title: 'Self-service that customers love',
    description: 'Branded portal with booking, payments, and communication.',
    features: [
      { icon: 'calendar', title: 'Online Booking', description: 'Customers book and reschedule appointments themselves. Real-time availability.' },
      { icon: 'credit-card', title: 'Invoice Payments', description: 'View and pay invoices online. One-click payments, instant receipts.' },
      { icon: 'file-text', title: 'Document Access', description: 'Quotes, invoices, and job reports available anytime. No more email requests.' },
      { icon: 'message-square', title: 'Messaging', description: 'Customers can message you directly through the portal. All tracked and organised.' },
      { icon: 'eye', title: 'Job Tracking', description: 'Customers see job status, scheduled dates, and completion updates.' },
      { icon: 'users', title: 'Branded Experience', description: 'Your logo, your colours. Looks like it\'s built just for your business.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Less admin, happier customers, more professional image.',
    items: [
      { title: 'Cut phone calls in half', description: 'Customers find answers and take action themselves. Your phone stays quiet.' },
      { title: 'Available 24/7', description: 'Customers can book, pay, and check status anytime. Even at 2am on a Sunday.' },
      { title: 'Look bigger than you are', description: 'A professional portal makes a 5-person company look like an enterprise.' },
      { title: 'Get paid faster', description: 'Easy online payments mean fewer excuses and faster cash flow.' },
    ],
  },
  useCases: {
    title: 'Perfect for customer-facing businesses',
    items: [
      { industry: 'Service Businesses', description: 'Customers book appointments, view job history, and pay invoices in one place.' },
      { industry: 'Trades & Contractors', description: 'Share quotes, get approvals, and collect payments without chasing.' },
      { industry: 'Property Management', description: 'Tenants submit requests, track progress, and access documents.' },
    ],
  },
  cta: {
    title: 'Ready to empower your customers?',
    description: 'Join thousands of businesses offering self-service with ZuviaOne.',
  },
};
