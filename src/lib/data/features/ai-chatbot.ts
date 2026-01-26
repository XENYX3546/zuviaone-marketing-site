// AI Chatbot Feature Page

import type { FeaturePageData } from '../types';

export const aiChatbot: FeaturePageData = {
  slug: 'ai-chatbot',
  seo: {
    title: 'AI Chatbot Builder for Websites | Lead Capture Bot',
    description: 'AI-powered chatbot that captures leads 24/7. Answer questions, book appointments, qualify leads automatically. No coding required.',
    keywords: ['AI chatbot', 'chatbot builder', 'website chatbot', 'lead capture bot', 'AI assistant', 'conversational AI'],
  },
  hero: {
    badge: 'AI Chatbot',
    title: 'Capture leads.',
    highlight: 'While you sleep.',
    description: 'An AI assistant that answers questions, books appointments, and captures leads 24/7 — so you never miss an opportunity.',
    stats: [
      { value: '3x', label: 'More leads captured' },
      { value: '24/7', label: 'Availability' },
      { value: '30sec', label: 'Avg response time' },
    ],
  },
  problemSolution: {
    title: 'Website visitors leave without converting',
    description: 'Most visitors have questions. If nobody answers, they leave.',
    items: [
      {
        problem: 'Visitors land on your website but leave without making contact',
        solution: 'AI chatbot engages visitors proactively and captures their details',
      },
      {
        problem: 'You can\'t answer every chat in real-time — you have work to do',
        solution: 'AI handles conversations instantly, 24/7, without human intervention',
      },
      {
        problem: 'Live chat requires staff to be online and available',
        solution: 'AI never sleeps, never takes breaks, and handles unlimited conversations',
      },
      {
        problem: 'Generic chatbots frustrate customers with robotic responses',
        solution: 'AI trained on your business gives helpful, contextual answers',
      },
    ],
  },
  solution: {
    title: 'AI that knows your business',
    description: 'Train once, capture leads forever.',
    features: [
      { icon: 'cpu', title: 'Smart AI Responses', description: 'AI trained on your services, FAQs, and pricing. Answers like a team member.' },
      { icon: 'users', title: 'Lead Capture', description: 'Collects name, email, phone, and qualifies leads before they reach you.' },
      { icon: 'calendar', title: 'Appointment Booking', description: 'AI can book appointments directly into your calendar.' },
      { icon: 'message-circle', title: 'Human Handoff', description: 'Complex questions get escalated to you with full context.' },
      { icon: 'settings', title: 'Easy Customisation', description: 'Match your brand, set your tone, control what AI can say.' },
      { icon: 'bar-chart', title: 'Conversation Analytics', description: 'See what visitors ask, where they drop off, and improve over time.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More leads, less effort, always on.',
    items: [
      { title: 'Capture 3x more leads', description: 'Visitors who would\'ve bounced now convert into qualified leads.' },
      { title: 'Available 24/7/365', description: 'Nights, weekends, holidays — your AI assistant never takes time off.' },
      { title: 'Instant responses', description: 'Visitors get answers in seconds, not hours. First response wins.' },
      { title: 'Qualify before contact', description: 'AI asks the right questions so you only talk to serious prospects.' },
    ],
  },
  useCases: {
    title: 'Perfect for lead-driven businesses',
    items: [
      { industry: 'Service Businesses', description: 'Answer service questions and capture enquiries automatically.' },
      { industry: 'E-commerce', description: 'Help visitors find products and capture abandoned browsers.' },
      { industry: 'Professional Services', description: 'Qualify leads and book consultations without lifting a finger.' },
    ],
  },
  cta: {
    title: 'Ready to capture more leads?',
    description: 'Add AI to your website in minutes. Free 14-day trial.',
  },
};
