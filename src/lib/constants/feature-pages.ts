// Feature Landing Page Data - Conversion & SEO Optimized

export type FeaturePageData = {
  slug: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    stats?: Array<{ value: string; label: string }>;
  };
  problemSolution: {
    title: string;
    description: string;
    items: Array<{
      problem: string;
      solution: string;
    }>;
  };
  solution: {
    title: string;
    description: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  benefits: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  useCases: {
    title: string;
    items: Array<{
      industry: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
  };
};

export const featurePages: Record<string, FeaturePageData> = {
  crm: {
    slug: 'crm',
    seo: {
      title: 'CRM Software for Small Business | Customer Management',
      description: 'Powerful CRM software built for small businesses. Manage contacts, track leads, and close more deals. Free 14-day trial. No credit card required.',
      keywords: ['CRM software', 'customer relationship management', 'small business CRM', 'contact management', 'lead tracking', 'sales CRM'],
    },
    hero: {
      badge: 'Customer Relationship Management',
      title: 'Stop losing leads.',
      highlight: 'Start closing deals.',
      description: 'The CRM that actually helps you sell. Track every interaction, never miss a follow-up, and turn more leads into paying customers.',
      stats: [
        { value: '35%', label: 'More deals closed' },
        { value: '50%', label: 'Less admin time' },
        { value: '2x', label: 'Faster follow-ups' },
      ],
    },
    problemSolution: {
      title: 'Sound familiar?',
      description: 'Most businesses lose deals not because of bad products, but bad follow-up.',
      items: [
        {
          problem: 'Leads slip through the cracks because they\'re scattered across spreadsheets and sticky notes',
          solution: 'Every lead captured in one place with automatic reminders so nothing gets forgotten',
        },
        {
          problem: 'You forget to follow up and lose deals to competitors who responded faster',
          solution: 'Automated follow-up sequences that nurture leads while you focus on closing',
        },
        {
          problem: 'No visibility into your sales pipeline means you can\'t forecast revenue',
          solution: 'Visual pipeline shows exactly where every deal stands and projected revenue',
        },
        {
          problem: 'Your team wastes hours on manual data entry instead of selling',
          solution: 'Smart automation captures data automatically, giving your team time back to sell',
        },
      ],
    },
    solution: {
      title: 'Everything you need to manage customers',
      description: 'One place for all your customer data, conversations, and deals.',
      features: [
        { icon: 'users', title: 'Contact Management', description: 'Store every detail about your customers with custom fields, tags, and complete interaction history.' },
        { icon: 'target', title: 'Visual Pipelines', description: 'Drag-and-drop deals through your sales stages. See exactly where every opportunity stands.' },
        { icon: 'zap', title: 'Automated Follow-ups', description: 'Never forget a follow-up. Set reminders and automated sequences that run on autopilot.' },
        { icon: 'filter', title: 'Smart Segmentation', description: 'Group customers by value, behavior, or any criteria. Target the right people with the right message.' },
        { icon: 'inbox', title: 'Unified Inbox', description: 'Every email, call, and message in one timeline. Full context for every conversation.' },
        { icon: 'bar-chart', title: 'Sales Analytics', description: 'Track win rates, deal velocity, and team performance. Make decisions based on data.' },
      ],
    },
    benefits: {
      title: 'What this means for your business',
      description: 'Real results from real businesses using ZuviaOne CRM.',
      items: [
        { title: 'Close more deals', description: 'With every lead tracked and every follow-up scheduled, you\'ll convert more prospects into customers.' },
        { title: 'Save hours every week', description: 'Automated data entry and smart workflows mean your team spends time selling, not typing.' },
        { title: 'Never lose a lead again', description: 'Every enquiry captured, every interaction logged. Nothing falls through the cracks.' },
        { title: 'Forecast with confidence', description: 'See your pipeline value, win rates, and projected revenue at a glance.' },
      ],
    },
    useCases: {
      title: 'Built for businesses like yours',
      items: [
        { industry: 'Trade & Construction', description: 'Track quotes, manage repeat customers, and follow up on estimates automatically.' },
        { industry: 'Professional Services', description: 'Manage client relationships, track project opportunities, and nurture referrals.' },
        { industry: 'Home Services', description: 'Convert enquiries to bookings, manage customer history, and build loyalty.' },
      ],
    },
    cta: {
      title: 'Ready to close more deals?',
      description: 'Join thousands of businesses using ZuviaOne to grow their customer base.',
    },
  },

  scheduling: {
    slug: 'scheduling',
    seo: {
      title: 'Job Scheduling Software | Team & Appointment Scheduling',
      description: 'Powerful job scheduling software for field service teams. Drag-and-drop calendar, online booking, and automated reminders. Start free trial.',
      keywords: ['job scheduling software', 'appointment scheduling', 'team scheduling', 'field service scheduling', 'online booking system', 'calendar software'],
    },
    hero: {
      badge: 'Scheduling & Calendar',
      title: 'Stop the scheduling chaos.',
      highlight: 'Get organised.',
      description: 'The scheduling system that keeps your team on track. Book appointments, dispatch jobs, and manage your calendar without the headaches.',
      stats: [
        { value: '60%', label: 'Less scheduling time' },
        { value: '90%', label: 'Fewer no-shows' },
        { value: '3hrs', label: 'Saved per day' },
      ],
    },
    problemSolution: {
      title: 'Scheduling shouldn\'t be this hard',
      description: 'If your calendar is a mess, your business is a mess.',
      items: [
        {
          problem: 'Double bookings and scheduling conflicts waste time and frustrate customers',
          solution: 'Real-time availability prevents conflicts automatically — double bookings become impossible',
        },
        {
          problem: 'No-shows cost you money because you\'re not sending reminders',
          solution: 'Automated SMS and email reminders reduce no-shows by up to 90%',
        },
        {
          problem: 'Dispatching jobs takes forever when you can\'t see team availability',
          solution: 'Visual calendar shows everyone\'s schedule at a glance — dispatch in seconds',
        },
        {
          problem: 'Customers can\'t book online, so you\'re stuck playing phone tag',
          solution: '24/7 online booking lets customers schedule themselves while you sleep',
        },
      ],
    },
    solution: {
      title: 'Scheduling that just works',
      description: 'Visual calendar, smart booking, and automated reminders in one system.',
      features: [
        { icon: 'calendar', title: 'Visual Calendar', description: 'See your entire team\'s schedule at a glance. Drag-and-drop to reschedule in seconds.' },
        { icon: 'check-square', title: 'Online Booking', description: 'Let customers book appointments 24/7. Syncs with your calendar in real-time.' },
        { icon: 'message-square', title: 'Automated Reminders', description: 'Reduce no-shows by 90% with SMS and email reminders sent automatically.' },
        { icon: 'users', title: 'Team Availability', description: 'Set working hours, time off, and breaks. Never double-book your team again.' },
        { icon: 'map-pin', title: 'Smart Dispatch', description: 'Assign jobs based on location, skills, and availability. Optimise routes automatically.' },
        { icon: 'zap', title: 'Recurring Bookings', description: 'Set up repeat appointments with one click. Perfect for regular maintenance and services.' },
      ],
    },
    benefits: {
      title: 'What this means for your business',
      description: 'Transform how you manage time and appointments.',
      items: [
        { title: 'Reclaim your time', description: 'Stop juggling phone calls and spreadsheets. Scheduling takes minutes, not hours.' },
        { title: 'Reduce no-shows dramatically', description: 'Automated reminders mean customers show up. Every missed appointment costs you money.' },
        { title: 'Book more jobs', description: 'Online booking means customers can schedule when it\'s convenient for them, even at midnight.' },
        { title: 'Keep your team efficient', description: 'Smart dispatch means less driving, more working. Your team does more jobs per day.' },
      ],
    },
    useCases: {
      title: 'Perfect for service businesses',
      items: [
        { industry: 'Field Service', description: 'Dispatch technicians, manage job queues, and optimise routes for maximum efficiency.' },
        { industry: 'Appointments', description: 'Book consultations, manage client schedules, and send automatic confirmations.' },
        { industry: 'Home Services', description: 'Schedule cleaning, maintenance, or repair visits with easy recurring booking.' },
      ],
    },
    cta: {
      title: 'Ready to take control of your calendar?',
      description: 'Join thousands of businesses running smoother schedules with ZuviaOne.',
    },
  },

  'field-service': {
    slug: 'field-service',
    seo: {
      title: 'Field Service Management Software | FSM for Small Business',
      description: 'Complete field service management software. Dispatch teams, track jobs, manage inventory. Built for trades and service businesses. Free trial.',
      keywords: ['field service management', 'FSM software', 'job management software', 'dispatch software', 'field service app', 'work order management'],
    },
    hero: {
      badge: 'Field Service Management',
      title: 'Run your field team',
      highlight: 'like a well-oiled machine.',
      description: 'From dispatch to completion, manage every job with complete visibility. Know where your team is, what they\'re working on, and what\'s next.',
      stats: [
        { value: '40%', label: 'More jobs completed' },
        { value: '25%', label: 'Reduced fuel costs' },
        { value: '99%', label: 'Job completion rate' },
      ],
    },
    problemSolution: {
      title: 'Field operations are chaotic without the right tools',
      description: 'When you can\'t see what\'s happening in the field, problems multiply.',
      items: [
        {
          problem: 'You don\'t know where your team is or what they\'re working on right now',
          solution: 'Live GPS tracking shows every team member\'s location and current job status in real-time',
        },
        {
          problem: 'Jobs run over time and customers are left waiting without updates',
          solution: 'Automatic ETA updates and on-the-way notifications keep customers informed',
        },
        {
          problem: 'Paperwork gets lost between the field and the office',
          solution: 'Digital job cards with photos and signatures sync instantly — no paper needed',
        },
        {
          problem: 'Inefficient routes mean wasted fuel and fewer jobs per day',
          solution: 'Smart routing optimises travel time so your team completes more jobs daily',
        },
      ],
    },
    solution: {
      title: 'Complete visibility and control',
      description: 'Everything you need to run field operations from one dashboard.',
      features: [
        { icon: 'map-pin', title: 'Live GPS Tracking', description: 'See where every team member is in real-time. Know ETAs and respond to delays instantly.' },
        { icon: 'check-square', title: 'Digital Job Cards', description: 'Checklists, photos, signatures, and notes. All captured on-site, synced to the office.' },
        { icon: 'users', title: 'Smart Dispatch', description: 'Assign the right person to the right job based on skills, location, and availability.' },
        { icon: 'calendar', title: 'Job Scheduling', description: 'Drag-and-drop scheduling with real-time availability. Reschedule in seconds.' },
        { icon: 'file-text', title: 'Instant Invoicing', description: 'Generate invoices on-site the moment a job is complete. Get paid faster.' },
        { icon: 'bar-chart', title: 'Performance Tracking', description: 'See job completion rates, time on site, and team productivity at a glance.' },
      ],
    },
    benefits: {
      title: 'What this means for your business',
      description: 'Real improvements you\'ll see in your operations.',
      items: [
        { title: 'Complete more jobs per day', description: 'Optimised routes and smart scheduling mean your team spends more time working, less time driving.' },
        { title: 'Delight your customers', description: 'Real-time ETAs, on-the-way notifications, and professional service every time.' },
        { title: 'Eliminate paperwork', description: 'Digital job cards sync instantly. No more chasing paper or deciphering handwriting.' },
        { title: 'Make smarter decisions', description: 'See which jobs are profitable, which team members excel, and where to improve.' },
      ],
    },
    useCases: {
      title: 'Built for field service businesses',
      items: [
        { industry: 'Trades & Construction', description: 'Manage multiple job sites, track materials, and coordinate subcontractors.' },
        { industry: 'HVAC & Plumbing', description: 'Dispatch emergency calls, manage maintenance contracts, and track equipment.' },
        { industry: 'Cleaning & Maintenance', description: 'Schedule recurring visits, manage checklists, and ensure quality control.' },
      ],
    },
    cta: {
      title: 'Ready to transform your field operations?',
      description: 'Join thousands of field service businesses running smoother with ZuviaOne.',
    },
  },

  invoicing: {
    slug: 'invoicing',
    seo: {
      title: 'Invoice Software for Small Business | Online Invoicing',
      description: 'Professional invoicing software that gets you paid faster. Create invoices, accept online payments, automate reminders. Free 14-day trial.',
      keywords: ['invoice software', 'invoicing software', 'online invoicing', 'small business invoicing', 'invoice generator', 'billing software'],
    },
    hero: {
      badge: 'Invoicing & Payments',
      title: 'Get paid faster.',
      highlight: 'Chase invoices less.',
      description: 'Professional invoices that get paid on time. Online payments, automatic reminders, and a clear view of what\'s owed.',
      stats: [
        { value: '14 days', label: 'Faster payment' },
        { value: '85%', label: 'Paid online' },
        { value: '£0', label: 'In bad debt' },
      ],
    },
    problemSolution: {
      title: 'Chasing payments is exhausting',
      description: 'Late payments hurt your cash flow and waste your time.',
      items: [
        {
          problem: 'Customers "forget" to pay because your invoices look unprofessional',
          solution: 'Branded, professional invoices that customers take seriously and pay promptly',
        },
        {
          problem: 'You spend hours chasing overdue payments instead of doing real work',
          solution: 'Automatic payment reminders chase invoices for you — professionally and persistently',
        },
        {
          problem: 'No online payment option means customers have excuses to delay',
          solution: 'One-click online payments make it easy for customers to pay instantly',
        },
        {
          problem: 'You lose track of what\'s been paid and what\'s outstanding',
          solution: 'Real-time dashboard shows paid, pending, and overdue invoices at a glance',
        },
      ],
    },
    solution: {
      title: 'Invoicing that gets results',
      description: 'Professional invoices, easy payments, and automated follow-up.',
      features: [
        { icon: 'file-text', title: 'Professional Invoices', description: 'Branded templates that look great on any device. Create and send in under a minute.' },
        { icon: 'credit-card', title: 'Online Payments', description: 'Accept cards, bank transfers, and more. Customers pay with one click.' },
        { icon: 'zap', title: 'Automatic Reminders', description: 'Gentle nudges sent automatically when invoices are due or overdue.' },
        { icon: 'clipboard', title: 'Quotes to Invoices', description: 'Convert accepted quotes to invoices instantly. No re-typing required.' },
        { icon: 'pie-chart', title: 'Payment Tracking', description: 'See what\'s paid, pending, and overdue at a glance. Full payment history.' },
        { icon: 'bar-chart', title: 'Financial Reports', description: 'Revenue reports, tax summaries, and cash flow visibility when you need it.' },
      ],
    },
    benefits: {
      title: 'What this means for your business',
      description: 'Better cash flow, less stress, more time.',
      items: [
        { title: 'Get paid 14 days faster', description: 'Online payments and automatic reminders mean money hits your account sooner.' },
        { title: 'Stop chasing payments', description: 'Automated reminders do the awkward follow-up for you. Professional and persistent.' },
        { title: 'Look professional', description: 'Branded invoices build trust and credibility. Customers take you seriously.' },
        { title: 'Know your numbers', description: 'Real-time visibility into revenue, outstanding amounts, and cash flow.' },
      ],
    },
    useCases: {
      title: 'Perfect for service businesses',
      items: [
        { industry: 'Trades & Contractors', description: 'Invoice on-site, take deposits, and manage progress payments for larger jobs.' },
        { industry: 'Consultants & Freelancers', description: 'Track billable hours, create retainer invoices, and manage multiple clients.' },
        { industry: 'Service Companies', description: 'Recurring invoices for contracts, one-off billing for projects, all in one place.' },
      ],
    },
    cta: {
      title: 'Ready to improve your cash flow?',
      description: 'Join thousands of businesses getting paid faster with ZuviaOne.',
    },
  },

  'communication': {
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
  },

  automation: {
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
  },

  'customer-portal': {
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
  },

  analytics: {
    slug: 'analytics',
    seo: {
      title: 'Business Analytics Software | Reporting & Dashboards',
      description: 'Real-time business analytics and reporting. Track KPIs, monitor performance, and make data-driven decisions. Free 14-day trial.',
      keywords: ['business analytics', 'reporting software', 'business intelligence', 'KPI dashboard', 'business reporting', 'analytics software'],
    },
    hero: {
      badge: 'Analytics & Reporting',
      title: 'See everything.',
      highlight: 'Know everything.',
      description: 'Real-time dashboards and reports that show you exactly how your business is performing. Make decisions based on data, not guesswork.',
      stats: [
        { value: 'Real-time', label: 'Data updates' },
        { value: '50+', label: 'Report templates' },
        { value: '1-click', label: 'Export to PDF' },
      ],
    },
    problemSolution: {
      title: 'You\'re flying blind',
      description: 'Without data, every decision is a guess.',
      items: [
        {
          problem: 'You don\'t know which services are most profitable until year-end',
          solution: 'Real-time profitability reports show your best performers instantly',
        },
        {
          problem: 'Team performance is a mystery — who\'s crushing it, who needs help?',
          solution: 'Performance dashboards show individual and team metrics at a glance',
        },
        {
          problem: 'Cash flow surprises keep catching you off guard',
          solution: 'Cash flow forecasting shows what\'s coming so you can plan ahead',
        },
        {
          problem: 'Creating reports takes hours of spreadsheet wrestling',
          solution: 'One-click reports generate instantly — no formulas, no formatting',
        },
      ],
    },
    solution: {
      title: 'Data that drives decisions',
      description: 'Dashboards, reports, and insights all in one place.',
      features: [
        { icon: 'bar-chart', title: 'Real-time Dashboard', description: 'KPIs updating live. Revenue, jobs, pipeline — all at a glance.' },
        { icon: 'pie-chart', title: 'Custom Reports', description: 'Build reports on any data. Filter, group, and visualise your way.' },
        { icon: 'users', title: 'Team Performance', description: 'See who\'s completing jobs, hitting targets, and where to coach.' },
        { icon: 'credit-card', title: 'Financial Insights', description: 'Revenue trends, payment status, and cash flow projections.' },
        { icon: 'calendar', title: 'Scheduled Reports', description: 'Get reports emailed automatically — daily, weekly, or monthly.' },
        { icon: 'target', title: 'Goal Tracking', description: 'Set targets and track progress. Know if you\'re on pace to hit goals.' },
      ],
    },
    benefits: {
      title: 'What this means for your business',
      description: 'Confidence in every decision you make.',
      items: [
        { title: 'Make smarter decisions', description: 'Data-backed decisions beat gut feelings. Know what\'s working and what\'s not.' },
        { title: 'Spot problems early', description: 'See trends before they become crises. Fix small issues before they\'re big.' },
        { title: 'Save hours on reporting', description: 'Automated reports replace manual spreadsheet work. Get time back.' },
        { title: 'Hold teams accountable', description: 'Clear metrics mean clear expectations. Everyone knows where they stand.' },
      ],
    },
    useCases: {
      title: 'Insights for every role',
      items: [
        { industry: 'Business Owners', description: 'High-level dashboards showing revenue, growth, and business health.' },
        { industry: 'Operations Managers', description: 'Job completion rates, team utilisation, and efficiency metrics.' },
        { industry: 'Finance Teams', description: 'Revenue reports, aged receivables, and cash flow analysis.' },
      ],
    },
    cta: {
      title: 'Ready to see your business clearly?',
      description: 'Join thousands of businesses making data-driven decisions with ZuviaOne.',
    },
  },
};

export const featurePageSlugs = Object.keys(featurePages);
