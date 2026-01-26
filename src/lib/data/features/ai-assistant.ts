// AI Business Assistant Feature Page

import type { FeaturePageData } from '../types';

export const aiAssistant: FeaturePageData = {
  slug: 'ai-assistant',
  seo: {
    title: 'AI Business Assistant | Autonomous AI Agent',
    description: 'AI that works for you. Automate tasks, answer questions, and handle routine work. Your always-available business assistant.',
    keywords: ['AI assistant', 'business AI', 'AI agent', 'virtual assistant', 'AI automation', 'intelligent assistant'],
  },
  hero: {
    badge: 'AI Assistant',
    title: 'AI that works.',
    highlight: 'While you grow.',
    description: 'An intelligent AI assistant that handles routine tasks, answers questions, and helps you work smarter.',
    stats: [
      { value: '24/7', label: 'Available' },
      { value: '10hrs', label: 'Saved weekly' },
      { value: '∞', label: 'Capacity' },
    ],
  },
  problemSolution: {
    title: 'Too much to do, not enough time',
    description: 'Let AI handle the routine stuff.',
    items: [
      {
        problem: 'Routine tasks eat up hours that should go to important work',
        solution: 'AI handles routine tasks automatically, freeing your time',
      },
      {
        problem: 'Answering the same questions over and over is tedious',
        solution: 'AI answers common questions instantly and accurately',
      },
      {
        problem: 'You can\'t be available 24/7 but your business needs to be',
        solution: 'AI works around the clock, never takes breaks',
      },
      {
        problem: 'Hiring more staff is expensive and slow',
        solution: 'AI scales instantly at a fraction of the cost',
      },
    ],
  },
  solution: {
    title: 'AI that understands your business',
    description: 'Trained on your data, working for you.',
    features: [
      { icon: 'cpu', title: 'Smart Automation', description: 'AI handles routine tasks automatically.' },
      { icon: 'message-circle', title: 'Q&A', description: 'Answers questions based on your business data.' },
      { icon: 'zap', title: 'Task Execution', description: 'Performs actions like scheduling and updates.' },
      { icon: 'book', title: 'Knowledge Base', description: 'Learns from your documents and history.' },
      { icon: 'clock', title: 'Always Available', description: 'Works 24/7 without breaks or holidays.' },
      { icon: 'shield', title: 'Your Control', description: 'You define what AI can and can\'t do.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More done, less effort.',
    items: [
      { title: 'Reclaim your time', description: 'Routine work happens automatically.' },
      { title: 'Always available', description: '24/7 coverage without hiring more people.' },
      { title: 'Instant answers', description: 'Questions answered in seconds, not hours.' },
      { title: 'Scale infinitely', description: 'AI handles any volume without strain.' },
    ],
  },
  useCases: {
    title: 'AI for every business',
    items: [
      { industry: 'Customer Service', description: 'Answer FAQs and handle routine enquiries.' },
      { industry: 'Operations', description: 'Automate scheduling, updates, and notifications.' },
      { industry: 'Sales', description: 'Qualify leads and answer prospect questions.' },
    ],
  },
  cta: {
    title: 'Ready to work smarter with AI?',
    description: 'Start using AI to grow your business. Free 14-day trial.',
  },
};
