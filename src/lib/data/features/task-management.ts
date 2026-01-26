// Task Management Feature Page

import type { FeaturePageData } from '../types';

export const taskManagement: FeaturePageData = {
  slug: 'task-management',
  seo: {
    title: 'Task Management Software | Team Task Tracking',
    description: 'Keep your team organised with task management. Assign, track, and complete tasks efficiently. Never drop the ball. Free trial.',
    keywords: ['task management software', 'team tasks', 'task tracking', 'project tasks', 'task assignment', 'work management'],
  },
  hero: {
    badge: 'Task Management',
    title: 'Nothing forgotten.',
    highlight: 'Everything done.',
    description: 'Create, assign, and track tasks across your team. Stay organised and never miss a deadline.',
    stats: [
      { value: '0', label: 'Tasks forgotten' },
      { value: '35%', label: 'More productive' },
      { value: '100%', label: 'Visibility' },
    ],
  },
  problemSolution: {
    title: 'Things fall through the cracks',
    description: 'Without a system, tasks get lost and deadlines get missed.',
    items: [
      {
        problem: 'Important tasks get forgotten in busy periods',
        solution: 'Every task logged, assigned, and tracked with due dates',
      },
      {
        problem: 'Nobody knows what anyone else is working on',
        solution: 'Team task boards show who\'s doing what in real-time',
      },
      {
        problem: 'Follow-up tasks from meetings and calls get lost',
        solution: 'Create tasks instantly from anywhere — email, chat, phone',
      },
      {
        problem: 'No way to prioritise when everything feels urgent',
        solution: 'Priority levels and due dates surface what matters most',
      },
    ],
  },
  solution: {
    title: 'Tasks under control',
    description: 'Simple task management that actually works.',
    features: [
      { icon: 'check-square', title: 'Task Creation', description: 'Create tasks with one click. Add details, due dates, and assignees.' },
      { icon: 'users', title: 'Task Assignment', description: 'Assign tasks to team members. Everyone knows their responsibilities.' },
      { icon: 'list', title: 'Task Boards', description: 'Kanban boards show task status at a glance.' },
      { icon: 'bell', title: 'Reminders', description: 'Automatic reminders before due dates. Nothing gets forgotten.' },
      { icon: 'link', title: 'Linked Tasks', description: 'Connect tasks to customers, jobs, or projects.' },
      { icon: 'bar-chart', title: 'Task Analytics', description: 'See completion rates and team productivity.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'A team that delivers, every time.',
    items: [
      { title: 'Nothing falls through', description: 'Every task tracked from creation to completion.' },
      { title: 'Clear accountability', description: 'Everyone knows what they\'re responsible for.' },
      { title: 'Meet every deadline', description: 'Due dates and reminders keep things on track.' },
      { title: 'Work smarter', description: 'Prioritisation ensures the right work gets done first.' },
    ],
  },
  useCases: {
    title: 'Task management for any team',
    items: [
      { industry: 'Operations', description: 'Track daily tasks, maintenance, and follow-ups.' },
      { industry: 'Customer Service', description: 'Manage customer requests and ensure nothing is missed.' },
      { industry: 'Projects', description: 'Break projects into tasks and track progress.' },
    ],
  },
  cta: {
    title: 'Ready to get organised?',
    description: 'Start managing tasks effectively. Free 14-day trial.',
  },
};
