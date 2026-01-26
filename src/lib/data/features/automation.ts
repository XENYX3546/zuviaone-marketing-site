// Automation Feature Page

import type { FeaturePageData } from '../types';

export const automation: FeaturePageData = {
  slug: 'automation',
  seo: {
    title: 'Business Automation Software | Workflow Automation',
    description: 'Automate repetitive tasks and workflows. Save hours every week with smart automation. No coding required. Free 14-day trial.',
    keywords: ['business automation', 'workflow automation', 'automation software', 'task automation', 'no-code automation', 'process automation'],
  },
  hero: {
    badge: 'Automation & AI',
    title: 'Work smarter.',
    highlight: 'Automate the rest.',
    description: 'Let automation handle the repetitive stuff. Follow-ups, reminders, data entry — running automatically while you focus on growth.',
    stats: [
      { value: '10hrs', label: 'Saved per week' },
      { value: '0', label: 'Tasks forgotten' },
      { value: '24/7', label: 'Always working' },
    ],
  },
  problemSolution: {
    title: 'You\'re doing the same tasks over and over',
    description: 'Repetitive work is a waste of your talent.',
    items: [
      {
        problem: 'You manually send the same follow-up emails dozens of times a week',
        solution: 'Automated email sequences send the right message at the right time, every time',
      },
      {
        problem: 'Reminders and notifications require you to remember and take action',
        solution: 'Set it once, forget it forever — reminders and notifications run on autopilot',
      },
      {
        problem: 'Data gets copied between systems by hand, introducing errors',
        solution: 'Data syncs automatically between features — no manual copying, no errors',
      },
      {
        problem: 'Important tasks get forgotten when things get busy',
        solution: 'Automated task creation ensures nothing falls through the cracks, ever',
      },
    ],
  },
  solution: {
    title: 'Automation that works while you sleep',
    description: 'Visual workflow builder with triggers, conditions, and actions.',
    features: [
      { icon: 'zap', title: 'Visual Workflow Builder', description: 'Drag-and-drop automation builder. No coding required. See exactly what happens.' },
      { icon: 'message-square', title: 'Automated Messages', description: 'Send emails and SMS automatically based on triggers. Follow-ups on autopilot.' },
      { icon: 'check-square', title: 'Task Creation', description: 'Automatically create and assign tasks when certain conditions are met.' },
      { icon: 'filter', title: 'Smart Conditions', description: 'If-then logic that routes workflows based on data. Right action, right time.' },
      { icon: 'cpu', title: 'AI Suggestions', description: 'AI recommends automations based on your patterns. Get smarter over time.' },
      { icon: 'bar-chart', title: 'Automation Analytics', description: 'See how many times workflows ran, what they did, and time saved.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More done, less effort, zero forgotten tasks.',
    items: [
      { title: 'Reclaim 10+ hours per week', description: 'Tasks that took hours now happen automatically. Focus on work that matters.' },
      { title: 'Nothing gets forgotten', description: 'Automations run consistently every time. No more dropped balls when things get busy.' },
      { title: 'Scale without hiring', description: 'Handle more customers and jobs without adding headcount. Automation scales infinitely.' },
      { title: 'Consistent customer experience', description: 'Every customer gets the same great follow-up and communication.' },
    ],
  },
  useCases: {
    title: 'Automate any workflow',
    items: [
      { industry: 'Lead Follow-up', description: 'Automatically email new leads, schedule follow-up tasks, and nurture until they\'re ready.' },
      { industry: 'Appointment Reminders', description: 'Send SMS reminders before appointments, follow-up requests after completion.' },
      { industry: 'Invoice Chasing', description: 'Automatic payment reminders at 7, 14, and 30 days. Professional and persistent.' },
    ],
  },
  cta: {
    title: 'Ready to automate your business?',
    description: 'Join thousands of businesses working smarter with ZuviaOne automation.',
  },
};
