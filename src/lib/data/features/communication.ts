// Communication Feature Page

import type { FeaturePageData } from '../types';

export const communication: FeaturePageData = {
  slug: 'communication',
  seo: {
    title: 'Business Communication Software | Unified Inbox & Messaging',
    description: 'All your business communication in one place. Email, SMS, calls, and chat unified. Never miss a customer message again. Free trial.',
    keywords: ['business communication software', 'unified inbox', 'business messaging', 'SMS for business', 'team communication', 'customer messaging'],
  },
  hero: {
    badge: 'Communication Hub',
    title: 'Every conversation.',
    highlight: 'One inbox.',
    description: 'Email, SMS, calls, and chat all in one place. Never miss a message, never lose context, never keep customers waiting.',
    stats: [
      { value: '5min', label: 'Avg response time' },
      { value: '100%', label: 'Messages captured' },
      { value: '4.9★', label: 'Customer rating' },
    ],
  },
  problemSolution: {
    title: 'Communication chaos costs you customers',
    description: 'When messages are scattered, things get missed.',
    items: [
      {
        problem: 'Customer messages are spread across email, phone, SMS, and social media',
        solution: 'Every channel unified in one inbox — see all conversations in one place',
      },
      {
        problem: 'You can\'t see conversation history so you ask customers to repeat themselves',
        solution: 'Complete interaction history shows every past message, call, and note instantly',
      },
      {
        problem: 'Slow response times mean customers go to competitors who reply faster',
        solution: 'Instant notifications and templates help you respond in minutes, not hours',
      },
      {
        problem: 'No way to collaborate means messages fall through the cracks',
        solution: 'Assign conversations to team members and track until resolved',
      },
    ],
  },
  solution: {
    title: 'One place for all conversations',
    description: 'Unified inbox with full context and team collaboration.',
    features: [
      { icon: 'inbox', title: 'Unified Inbox', description: 'Email, SMS, and chat in one timeline. Full conversation history at your fingertips.' },
      { icon: 'message-square', title: 'Two-Way SMS', description: 'Send and receive text messages from your business number. Customers can reply directly.' },
      { icon: 'phone', title: 'VoIP Calling', description: 'Make and receive calls from the platform. Call recording and voicemail included.' },
      { icon: 'message-circle', title: 'Live Chat', description: 'Chat widget for your website. Capture leads and support customers in real-time.' },
      { icon: 'zap', title: 'Auto-Responses', description: 'Instant acknowledgments and out-of-hours messages. Customers always get a response.' },
      { icon: 'users', title: 'Team Collaboration', description: 'Assign conversations, leave internal notes, and hand off seamlessly.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Faster responses, happier customers, less stress.',
    items: [
      { title: 'Respond faster', description: 'All messages in one place means nothing gets buried. Reply in minutes, not hours.' },
      { title: 'Full context every time', description: 'See every past interaction before you respond. No more asking customers to repeat themselves.' },
      { title: 'Never miss a message', description: 'Every enquiry captured, assigned, and tracked. Nothing falls through the cracks.' },
      { title: 'Win more business', description: 'The business that responds first usually wins. Be that business.' },
    ],
  },
  useCases: {
    title: 'For businesses that talk to customers',
    items: [
      { industry: 'Service Businesses', description: 'Manage enquiries, send appointment confirmations, and follow up after jobs.' },
      { industry: 'Sales Teams', description: 'Respond to leads quickly, nurture prospects, and keep deals moving.' },
      { industry: 'Support Teams', description: 'Handle customer questions, resolve issues, and track satisfaction.' },
    ],
  },
  cta: {
    title: 'Ready to unify your communication?',
    description: 'Join thousands of businesses delivering better customer experiences.',
  },
};
