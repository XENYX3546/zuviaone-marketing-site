// Product Features - Derived from main app functionality

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
};

export type FeatureCategory = {
  id: string;
  title: string;
  tagline: string;
  features: Feature[];
};

export const featureCategories: FeatureCategory[] = [
  {
    id: 'crm',
    title: 'Customer Relationship Management',
    tagline: 'Build lasting customer relationships',
    features: [
      {
        id: 'contacts',
        title: 'Contact Management',
        description: 'Centralize all customer data in one place with detailed profiles and interaction history.',
        icon: 'users',
        highlights: ['Custom fields', 'Interaction timeline', 'Smart segmentation'],
      },
      {
        id: 'leads',
        title: 'Lead Tracking',
        description: 'Capture, qualify, and convert leads with visual pipelines and automated follow-ups.',
        icon: 'target',
        highlights: ['Lead scoring', 'Pipeline views', 'Conversion tracking'],
      },
      {
        id: 'segments',
        title: 'Customer Segments',
        description: 'Group customers intelligently for targeted campaigns and personalized service.',
        icon: 'filter',
        highlights: ['Dynamic segments', 'Behavioral filters', 'Custom rules'],
      },
    ],
  },
  {
    id: 'scheduling',
    title: 'Scheduling & Field Service',
    tagline: 'Optimize your operations',
    features: [
      {
        id: 'bookings',
        title: 'Smart Booking System',
        description: 'Let customers book appointments online with real-time availability.',
        icon: 'calendar',
        highlights: ['Online booking', 'Recurring appointments', 'Buffer times'],
      },
      {
        id: 'dispatch',
        title: 'Team Dispatch',
        description: 'Assign jobs to field teams with route optimization and live tracking.',
        icon: 'map-pin',
        highlights: ['Drag-and-drop scheduling', 'Route optimization', 'GPS tracking'],
      },
      {
        id: 'tasks',
        title: 'Task Management',
        description: 'Create, assign, and track tasks with checklists and due dates.',
        icon: 'check-square',
        highlights: ['Checklists', 'Dependencies', 'Time tracking'],
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication Hub',
    tagline: 'Stay connected everywhere',
    features: [
      {
        id: 'inbox',
        title: 'Unified Inbox',
        description: 'Manage all customer conversations from email, SMS, and chat in one place.',
        icon: 'inbox',
        highlights: ['Multi-channel', 'Team collaboration', 'Templates'],
      },
      {
        id: 'sms',
        title: 'SMS & Notifications',
        description: 'Send automated reminders, confirmations, and marketing messages.',
        icon: 'message-square',
        highlights: ['Automated reminders', 'Two-way SMS', 'Bulk messaging'],
      },
      {
        id: 'voip',
        title: 'VoIP Phone System',
        description: 'Make and receive calls directly from the platform with call logging.',
        icon: 'phone',
        highlights: ['Click-to-call', 'Call recording', 'Voicemail'],
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Management',
    tagline: 'Get paid faster',
    features: [
      {
        id: 'invoicing',
        title: 'Professional Invoicing',
        description: 'Create and send branded invoices with online payment options.',
        icon: 'file-text',
        highlights: ['Custom templates', 'Auto-reminders', 'Partial payments'],
      },
      {
        id: 'quotes',
        title: 'Quotes & Estimates',
        description: 'Win more business with professional quotes that convert to invoices.',
        icon: 'clipboard',
        highlights: ['Quote builder', 'E-signatures', 'One-click conversion'],
      },
      {
        id: 'payments',
        title: 'Payment Processing',
        description: 'Accept cards, bank transfers, and more with integrated Stripe.',
        icon: 'credit-card',
        highlights: ['Stripe integration', 'Recurring billing', 'Payment links'],
      },
    ],
  },
  {
    id: 'automation',
    title: 'AI & Automation',
    tagline: 'Work smarter, not harder',
    features: [
      {
        id: 'ai-agent',
        title: 'AI Assistant',
        description: 'Get intelligent suggestions and automate repetitive tasks with AI.',
        icon: 'cpu',
        highlights: ['Smart suggestions', 'Auto-responses', 'Data insights'],
      },
      {
        id: 'automations',
        title: 'Workflow Automation',
        description: 'Build custom workflows that trigger actions automatically.',
        icon: 'zap',
        highlights: ['Visual builder', 'Triggers & actions', 'Conditions'],
      },
      {
        id: 'chatbot',
        title: 'Chatbot',
        description: 'Engage visitors 24/7 with an intelligent chatbot on your website.',
        icon: 'message-circle',
        highlights: ['Custom flows', 'Lead capture', 'FAQ automation'],
      },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Insights',
    tagline: 'Make data-driven decisions',
    features: [
      {
        id: 'dashboard',
        title: 'Real-time Dashboard',
        description: 'See your business performance at a glance with customizable widgets.',
        icon: 'bar-chart',
        highlights: ['KPI tracking', 'Custom widgets', 'Goal setting'],
      },
      {
        id: 'reports',
        title: 'Advanced Reports',
        description: 'Generate detailed reports on sales, team performance, and more.',
        icon: 'pie-chart',
        highlights: ['Scheduled reports', 'Export options', 'Custom filters'],
      },
      {
        id: 'audit',
        title: 'Activity Audit',
        description: 'Track all changes and actions with comprehensive audit logs.',
        icon: 'eye',
        highlights: ['Change history', 'User activity', 'Compliance'],
      },
    ],
  },
];

export const allFeatures = featureCategories.flatMap(cat => cat.features);
