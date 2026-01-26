// VoIP Phone System Feature Page

import type { FeaturePageData } from '../types';

export const voip: FeaturePageData = {
  slug: 'voip-phone-system',
  seo: {
    title: 'Business VoIP Phone System | Cloud Phone System',
    description: 'Professional business phone system in the cloud. Call recording, voicemail-to-email, multiple extensions. No hardware required.',
    keywords: ['VoIP phone system', 'business phone', 'cloud phone system', 'virtual phone', 'business VoIP', 'phone system'],
  },
  hero: {
    badge: 'VoIP Phone System',
    title: 'Professional phone.',
    highlight: 'Zero hardware.',
    description: 'A complete business phone system in the cloud. Make calls, record conversations, and never miss a customer.',
    stats: [
      { value: '50%', label: 'Cost savings' },
      { value: '100%', label: 'Call recording' },
      { value: '0', label: 'Hardware needed' },
    ],
  },
  problemSolution: {
    title: 'Your phone system shouldn\'t hold you back',
    description: 'Traditional phone systems are expensive and inflexible.',
    items: [
      {
        problem: 'Traditional phone lines are expensive and require hardware',
        solution: 'Cloud-based VoIP runs on devices you already have — 50% cheaper',
      },
      {
        problem: 'You miss calls when you\'re away from the office',
        solution: 'Take calls on your mobile, laptop, or any device with the app',
      },
      {
        problem: 'No record of what was discussed on calls',
        solution: 'Automatic call recording for training, disputes, and quality',
      },
      {
        problem: 'Voicemails pile up and get forgotten',
        solution: 'Voicemail-to-email and transcription means nothing gets missed',
      },
    ],
  },
  solution: {
    title: 'Phone system built for business',
    description: 'Everything you need to communicate professionally.',
    features: [
      { icon: 'phone', title: 'Business Phone Number', description: 'Professional local or toll-free number for your business.' },
      { icon: 'mic', title: 'Call Recording', description: 'Every call recorded automatically. Perfect for training and disputes.' },
      { icon: 'voicemail', title: 'Voicemail to Email', description: 'Voicemails sent to your inbox with automatic transcription.' },
      { icon: 'users', title: 'Multiple Extensions', description: 'Route calls to the right team member automatically.' },
      { icon: 'smartphone', title: 'Mobile App', description: 'Take business calls anywhere on your personal phone.' },
      { icon: 'bar-chart', title: 'Call Analytics', description: 'Track call volume, duration, and team performance.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Professional calls, lower costs, complete flexibility.',
    items: [
      { title: 'Cut phone costs in half', description: 'No hardware, no line rental, no expensive international calls.' },
      { title: 'Never miss a call', description: 'Calls ring everywhere. Answer on desktop, mobile, or tablet.' },
      { title: 'Stay compliant', description: 'Call recording meets regulatory requirements and protects you in disputes.' },
      { title: 'Scale instantly', description: 'Add new lines and extensions in seconds. No engineer visits.' },
    ],
  },
  useCases: {
    title: 'Phone systems for every business',
    items: [
      { industry: 'Service Businesses', description: 'Never miss a customer call. Record for quality and training.' },
      { industry: 'Remote Teams', description: 'Everyone on the same system, wherever they work.' },
      { industry: 'Sales Teams', description: 'Track calls, record conversations, and improve performance.' },
    ],
  },
  cta: {
    title: 'Ready to upgrade your phone system?',
    description: 'Get a professional business phone in minutes. Free trial.',
  },
};
