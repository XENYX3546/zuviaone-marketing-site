// Problems/Solutions Index - All problem-focused landing pages

import type { ProblemData } from '../types';

// Problem page data
export const problems: Record<string, ProblemData> = {
  'stop-double-bookings': {
    slug: 'stop-double-bookings',
    category: 'scheduling',
    seo: {
      title: 'Stop Double Bookings Forever | Smart Scheduling',
      description: 'Eliminate double bookings with real-time availability and conflict detection. Never frustrate a customer with scheduling conflicts again.',
      keywords: ['stop double bookings', 'prevent double booking', 'scheduling conflicts', 'booking conflicts'],
    },
    hero: {
      badge: 'Scheduling Problem',
      title: 'Stop double bookings.',
      highlight: 'Forever.',
      description: 'Double bookings frustrate customers and waste your time. Real-time availability and smart scheduling make conflicts impossible.',
      stat: { value: '0', label: 'Double bookings' },
    },
    problem: {
      title: 'Double bookings are embarrassing and expensive',
      description: 'When two customers show up for the same time slot, someone loses.',
      painPoints: [
        { title: 'Customer frustration', description: 'One customer gets turned away, leaves angry, and tells everyone.', cost: 'Lost customer lifetime value' },
        { title: 'Wasted time', description: 'Scrambling to reschedule disrupts your entire day.', cost: '2+ hours per incident' },
        { title: 'Reputation damage', description: 'Word spreads that you\'re disorganised.', cost: 'Lost referrals' },
        { title: 'Staff stress', description: 'Your team dreads the awkward conversations.', cost: 'Lower morale' },
      ],
      impactStats: [
        { value: '£500+', label: 'Cost per double booking' },
        { value: '15%', label: 'Customers who never return' },
        { value: '3x', label: 'Negative word-of-mouth' },
      ],
    },
    solution: {
      title: 'Real-time scheduling that prevents conflicts',
      description: 'Technology that makes double bookings impossible.',
      features: [
        { icon: 'calendar', title: 'Real-time availability', description: 'Calendars update instantly. Everyone sees the same availability.' },
        { icon: 'shield', title: 'Conflict detection', description: 'The system blocks conflicting bookings before they happen.' },
        { icon: 'users', title: 'Team calendars', description: 'See everyone\'s schedule in one view.' },
        { icon: 'refresh-cw', title: 'Instant sync', description: 'Changes sync across all devices immediately.' },
      ],
    },
    results: {
      title: 'What you can expect',
      items: [
        { metric: 'Double bookings', improvement: '100% eliminated', description: 'Conflict detection makes them impossible.' },
        { metric: 'Customer satisfaction', improvement: '+35%', description: 'Reliable scheduling builds trust.' },
        { metric: 'Admin time', improvement: '-50%', description: 'No more manual calendar checking.' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { step: 1, title: 'Connect calendars', description: 'Sync your team\'s calendars in minutes.' },
        { step: 2, title: 'Set availability', description: 'Define when each person can be booked.' },
        { step: 3, title: 'Book with confidence', description: 'Conflicts blocked automatically.' },
      ],
    },
    cta: {
      title: 'Ready to eliminate double bookings?',
      description: 'Start your free trial today.',
      urgency: 'Every double booking costs you customers.',
    },
    relatedProblems: ['reduce-no-shows', 'automate-follow-ups'],
  },

  'reduce-no-shows': {
    slug: 'reduce-no-shows',
    category: 'scheduling',
    seo: {
      title: 'Reduce No-Shows by 90% | Automated Reminders',
      description: 'Cut no-shows dramatically with automated SMS and email reminders. Recover lost revenue and keep your schedule full.',
      keywords: ['reduce no-shows', 'appointment reminders', 'no-show rate', 'booking reminders'],
    },
    hero: {
      badge: 'No-Show Problem',
      title: 'Reduce no-shows',
      highlight: 'by 90%.',
      description: 'No-shows cost you money and waste your time. Automated reminders ensure customers actually show up.',
      stat: { value: '90%', label: 'Reduction' },
    },
    problem: {
      title: 'Every no-show is money lost',
      description: 'An empty appointment slot can\'t be recovered.',
      painPoints: [
        { title: 'Lost revenue', description: 'The slot could have been filled by a paying customer.', cost: '£50-500 per no-show' },
        { title: 'Wasted prep time', description: 'You prepared for a job that never happened.', cost: '30+ minutes each' },
        { title: 'Schedule gaps', description: 'Too late to book someone else into the slot.', cost: 'Lost productivity' },
        { title: 'Team frustration', description: 'Staff sitting idle when they could be earning.', cost: 'Lower morale' },
      ],
      impactStats: [
        { value: '20%', label: 'Average no-show rate' },
        { value: '£10,000+', label: 'Annual lost revenue' },
        { value: '2hrs', label: 'Wasted weekly' },
      ],
    },
    solution: {
      title: 'Automated reminders that get results',
      description: 'The right message at the right time.',
      features: [
        { icon: 'message-square', title: 'SMS reminders', description: '98% open rate. Customers actually see these.' },
        { icon: 'mail', title: 'Email reminders', description: 'Detailed confirmations with calendar links.' },
        { icon: 'clock', title: 'Smart timing', description: 'Reminders at 24hrs, 2hrs, and 30mins before.' },
        { icon: 'credit-card', title: 'Deposit collection', description: 'Skin in the game reduces no-shows.' },
      ],
    },
    results: {
      title: 'What you can expect',
      items: [
        { metric: 'No-show rate', improvement: '-90%', description: 'Reminders work.' },
        { metric: 'Revenue recovered', improvement: '+£8,000/year', description: 'Slots that would have been empty.' },
        { metric: 'Customer satisfaction', improvement: '+25%', description: 'They appreciate the reminders.' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { step: 1, title: 'Set reminder rules', description: 'Choose when and how to remind.' },
        { step: 2, title: 'Customise messages', description: 'Your brand, your tone.' },
        { step: 3, title: 'Watch no-shows drop', description: 'Automated from day one.' },
      ],
    },
    cta: {
      title: 'Ready to reduce no-shows?',
      description: 'Start your free trial today.',
      urgency: 'Every no-show is money you can\'t get back.',
    },
    relatedProblems: ['stop-double-bookings', 'get-paid-faster'],
  },

  'get-paid-faster': {
    slug: 'get-paid-faster',
    category: 'payments',
    seo: {
      title: 'Get Paid 2x Faster | Online Payments & Automation',
      description: 'Speed up payments with online invoicing and automated reminders. Improve cash flow and stop chasing overdue invoices.',
      keywords: ['get paid faster', 'online payments', 'invoice automation', 'faster payments'],
    },
    hero: {
      badge: 'Payment Problem',
      title: 'Get paid',
      highlight: '2x faster.',
      description: 'Late payments hurt cash flow. Online payments and automated reminders get money in your account sooner.',
      stat: { value: '14 days', label: 'Faster' },
    },
    problem: {
      title: 'Chasing payments is exhausting',
      description: 'Time spent chasing is time not earning.',
      painPoints: [
        { title: 'Cash flow gaps', description: 'You did the work but can\'t pay your bills.', cost: 'Overdraft fees' },
        { title: 'Awkward conversations', description: 'Nobody likes asking for money.', cost: 'Relationship strain' },
        { title: 'Admin burden', description: 'Hours spent on payment reminders.', cost: '5+ hours/week' },
        { title: 'Bad debt risk', description: 'Some invoices never get paid.', cost: '2-5% of revenue' },
      ],
      impactStats: [
        { value: '30 days', label: 'Average payment delay' },
        { value: '5hrs', label: 'Weekly chasing time' },
        { value: '£5,000+', label: 'In overdue invoices' },
      ],
    },
    solution: {
      title: 'Get paid without chasing',
      description: 'Make it easy to pay and they will.',
      features: [
        { icon: 'credit-card', title: 'Online payments', description: 'Pay with one click. No excuses.' },
        { icon: 'zap', title: 'Auto reminders', description: 'Professional nudges at the right times.' },
        { icon: 'file-text', title: 'Professional invoices', description: 'Branded invoices customers take seriously.' },
        { icon: 'smartphone', title: 'Mobile-friendly', description: 'Customers pay from their phone.' },
      ],
    },
    results: {
      title: 'What you can expect',
      items: [
        { metric: 'Payment time', improvement: '-50%', description: '14 days faster on average.' },
        { metric: 'Chasing time', improvement: '-80%', description: 'Automation does it for you.' },
        { metric: 'Bad debt', improvement: '-70%', description: 'Persistent reminders work.' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { step: 1, title: 'Send professional invoice', description: 'One click from the job.' },
        { step: 2, title: 'Customer pays online', description: 'Card or bank transfer.' },
        { step: 3, title: 'Auto-reminders if needed', description: 'You never have to ask.' },
      ],
    },
    cta: {
      title: 'Ready to get paid faster?',
      description: 'Start your free trial today.',
      urgency: 'Every day you wait is cash flow you\'re missing.',
    },
    relatedProblems: ['reduce-no-shows', 'automate-follow-ups'],
  },

  'stop-missing-calls': {
    slug: 'stop-missing-calls',
    category: 'communication',
    seo: {
      title: 'Never Miss Another Customer Call | VoIP & AI',
      description: 'Capture every call with VoIP, voicemail transcription, and AI chatbot. Turn missed calls into booked jobs.',
      keywords: ['stop missing calls', 'missed calls', 'customer calls', 'voicemail to text'],
    },
    hero: {
      badge: 'Communication Problem',
      title: 'Never miss',
      highlight: 'another call.',
      description: 'Missed calls mean missed revenue. Capture every enquiry even when you can\'t answer the phone.',
      stat: { value: '100%', label: 'Captured' },
    },
    problem: {
      title: 'Missed calls go to competitors',
      description: 'If you don\'t answer, someone else will.',
      painPoints: [
        { title: 'Lost leads', description: 'They called, you missed, they booked elsewhere.', cost: '£100-1,000 per call' },
        { title: 'Constant interruption', description: 'You\'re on a job but phone keeps ringing.', cost: 'Lost productivity' },
        { title: 'After-hours enquiries', description: 'Calls at night go to voicemail graveyard.', cost: 'Missed opportunities' },
        { title: 'No callback time', description: 'By the time you call back, they\'ve moved on.', cost: '50%+ lost' },
      ],
      impactStats: [
        { value: '62%', label: 'Calls during work' },
        { value: '85%', label: 'Won\'t leave voicemail' },
        { value: '50%', label: 'Book with first responder' },
      ],
    },
    solution: {
      title: 'Capture every enquiry',
      description: 'Technology that answers when you can\'t.',
      features: [
        { icon: 'phone', title: 'Business VoIP', description: 'Professional number that rings everywhere.' },
        { icon: 'message-square', title: 'Voicemail to text', description: 'Voicemails transcribed and emailed.' },
        { icon: 'cpu', title: 'AI chatbot', description: 'Website visitors engage 24/7.' },
        { icon: 'bell', title: 'Instant alerts', description: 'Know immediately when someone needs you.' },
      ],
    },
    results: {
      title: 'What you can expect',
      items: [
        { metric: 'Call capture', improvement: '100%', description: 'Every call logged and followed up.' },
        { metric: 'New leads', improvement: '+40%', description: 'From previously missed calls.' },
        { metric: 'Response time', improvement: '-80%', description: 'Faster follow-up on every enquiry.' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { step: 1, title: 'Get your business number', description: 'Rings on desktop and mobile.' },
        { step: 2, title: 'Voicemails transcribed', description: 'Read instead of listen.' },
        { step: 3, title: 'AI captures website leads', description: '24/7 lead generation.' },
      ],
    },
    cta: {
      title: 'Ready to capture every call?',
      description: 'Start your free trial today.',
      urgency: 'Every missed call is a customer going to competitors.',
    },
    relatedProblems: ['capture-more-leads', 'automate-follow-ups'],
  },

  'automate-follow-ups': {
    slug: 'automate-follow-ups',
    category: 'operations',
    seo: {
      title: 'Automate Your Follow-Up Process | Never Forget Again',
      description: 'Automated follow-ups ensure every lead, quote, and customer gets timely communication. Stop dropping balls.',
      keywords: ['automate follow-ups', 'automated follow-up', 'lead follow-up', 'customer follow-up'],
    },
    hero: {
      badge: 'Operations Problem',
      title: 'Automate',
      highlight: 'every follow-up.',
      description: 'Manual follow-ups get forgotten. Automated sequences run consistently, 24/7, without fail.',
      stat: { value: '0', label: 'Forgotten' },
    },
    problem: {
      title: 'Dropped balls cost you business',
      description: 'Every forgotten follow-up is a lost opportunity.',
      painPoints: [
        { title: 'Forgotten quotes', description: 'You quoted but never followed up. They went elsewhere.', cost: '30%+ of quotes' },
        { title: 'Stale leads', description: 'Hot leads went cold while you were busy.', cost: 'Lost conversions' },
        { title: 'No repeat business', description: 'Past customers forgot about you.', cost: 'Lifetime value' },
        { title: 'Manual is impossible', description: 'Too many people to follow up with personally.', cost: 'Capacity limits' },
      ],
      impactStats: [
        { value: '48%', label: 'Never follow up' },
        { value: '80%', label: 'Need 5+ touches' },
        { value: '10x', label: 'More likely with follow-up' },
      ],
    },
    solution: {
      title: 'Follow-up that runs itself',
      description: 'Set it once, run forever.',
      features: [
        { icon: 'zap', title: 'Automated sequences', description: 'Multi-step follow-ups that run automatically.' },
        { icon: 'message-square', title: 'Email & SMS', description: 'Reach customers on their preferred channel.' },
        { icon: 'clock', title: 'Perfect timing', description: 'Right message at the right time.' },
        { icon: 'check-square', title: 'Task creation', description: 'Auto-create tasks for human touch when needed.' },
      ],
    },
    results: {
      title: 'What you can expect',
      items: [
        { metric: 'Quote conversion', improvement: '+35%', description: 'Consistent follow-up closes more.' },
        { metric: 'Lead response', improvement: '100%', description: 'Every lead gets followed up.' },
        { metric: 'Time saved', improvement: '10+ hrs/week', description: 'No manual follow-up work.' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { step: 1, title: 'Define triggers', description: 'New lead? Quote sent? Job complete?' },
        { step: 2, title: 'Create sequence', description: 'What happens and when.' },
        { step: 3, title: 'Watch it run', description: 'Consistent follow-up, zero effort.' },
      ],
    },
    cta: {
      title: 'Ready to automate follow-ups?',
      description: 'Start your free trial today.',
      urgency: 'Every forgotten follow-up is money left on the table.',
    },
    relatedProblems: ['capture-more-leads', 'get-paid-faster'],
  },

  'capture-more-leads': {
    slug: 'capture-more-leads',
    category: 'growth',
    seo: {
      title: 'Capture 3x More Website Leads | AI Chatbot & Forms',
      description: 'Turn website visitors into leads with AI chatbot and smart forms. Capture enquiries 24/7 without lifting a finger.',
      keywords: ['capture more leads', 'lead capture', 'website leads', 'lead generation'],
    },
    hero: {
      badge: 'Growth Problem',
      title: 'Capture',
      highlight: '3x more leads.',
      description: 'Most website visitors leave without making contact. AI chatbot and smart forms capture them before they go.',
      stat: { value: '3x', label: 'More leads' },
    },
    problem: {
      title: 'Website visitors leave without converting',
      description: 'You paid for that traffic. Capture it.',
      painPoints: [
        { title: 'Bounce rate', description: '95% of visitors leave without contact.', cost: 'Wasted traffic' },
        { title: 'No engagement', description: 'Static websites don\'t start conversations.', cost: 'Lost opportunities' },
        { title: 'After-hours visits', description: 'Nobody to answer when you\'re closed.', cost: '60%+ of traffic' },
        { title: 'Friction to contact', description: 'Forms are boring, phones are intimidating.', cost: 'Lower conversion' },
      ],
      impactStats: [
        { value: '95%', label: 'Leave without contact' },
        { value: '60%', label: 'Visit after hours' },
        { value: '3x', label: 'More leads with chatbot' },
      ],
    },
    solution: {
      title: 'Engage every visitor',
      description: 'Turn browsers into buyers.',
      features: [
        { icon: 'cpu', title: 'AI chatbot', description: 'Engages visitors and captures details.' },
        { icon: 'file-text', title: 'Smart forms', description: 'Beautiful forms that convert.' },
        { icon: 'clock', title: '24/7 capture', description: 'Never miss an after-hours enquiry.' },
        { icon: 'target', title: 'Lead qualification', description: 'AI asks the right questions.' },
      ],
    },
    results: {
      title: 'What you can expect',
      items: [
        { metric: 'Lead volume', improvement: '+200%', description: 'From the same traffic.' },
        { metric: 'After-hours leads', improvement: '+60%', description: 'Captured while you sleep.' },
        { metric: 'Lead quality', improvement: '+25%', description: 'AI qualifies before you talk.' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { step: 1, title: 'Add to website', description: 'Simple embed code.' },
        { step: 2, title: 'Train on your business', description: 'AI learns your services.' },
        { step: 3, title: 'Capture leads 24/7', description: 'While you focus on delivery.' },
      ],
    },
    cta: {
      title: 'Ready to capture more leads?',
      description: 'Start your free trial today.',
      urgency: 'Every visitor who leaves is a potential customer lost.',
    },
    relatedProblems: ['automate-follow-ups', 'stop-missing-calls'],
  },

  'eliminate-paperwork': {
    slug: 'eliminate-paperwork',
    category: 'operations',
    seo: {
      title: 'Eliminate Paperwork Completely | Go Digital',
      description: 'Replace paper with digital forms, checklists, and signatures. Save time, reduce errors, access everything from anywhere.',
      keywords: ['eliminate paperwork', 'digital forms', 'paperless business', 'go digital'],
    },
    hero: {
      badge: 'Operations Problem',
      title: 'Eliminate paperwork.',
      highlight: 'Completely.',
      description: 'Paper is slow, gets lost, and can\'t be searched. Digital everything is faster, safer, and accessible anywhere.',
      stat: { value: '100%', label: 'Digital' },
    },
    problem: {
      title: 'Paper is killing your efficiency',
      description: 'There\'s a reason offices went digital decades ago.',
      painPoints: [
        { title: 'Lost documents', description: 'Critical paperwork vanishes when you need it.', cost: 'Lost hours searching' },
        { title: 'Illegible handwriting', description: 'Can\'t read technician notes.', cost: 'Errors and callbacks' },
        { title: 'Double entry', description: 'Paper to computer every time.', cost: '5+ hrs/week' },
        { title: 'No remote access', description: 'Can\'t check paperwork from home.', cost: 'Delayed responses' },
      ],
      impactStats: [
        { value: '7hrs', label: 'Lost weekly to paper' },
        { value: '25%', label: 'Documents misfiled' },
        { value: '£2,000', label: 'Annual paper costs' },
      ],
    },
    solution: {
      title: 'Everything digital, everywhere',
      description: 'Modern tools for modern businesses.',
      features: [
        { icon: 'check-square', title: 'Digital checklists', description: 'Complete on any device.' },
        { icon: 'edit-3', title: 'E-signatures', description: 'Customers sign on screen.' },
        { icon: 'camera', title: 'Photo capture', description: 'Before/after evidence.' },
        { icon: 'cloud', title: 'Cloud storage', description: 'Access from anywhere.' },
      ],
    },
    results: {
      title: 'What you can expect',
      items: [
        { metric: 'Admin time', improvement: '-70%', description: 'No more double entry.' },
        { metric: 'Lost documents', improvement: '0', description: 'Everything searchable.' },
        { metric: 'Accessibility', improvement: '100%', description: 'From any device, anywhere.' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { step: 1, title: 'Create digital forms', description: 'Replicate your paper forms.' },
        { step: 2, title: 'Team uses mobile', description: 'Complete in the field.' },
        { step: 3, title: 'Everything syncs', description: 'Office sees it instantly.' },
      ],
    },
    cta: {
      title: 'Ready to go paperless?',
      description: 'Start your free trial today.',
      urgency: 'Every hour on paperwork is an hour not growing.',
    },
    relatedProblems: ['scale-your-business', 'track-your-team'],
  },

  'track-your-team': {
    slug: 'track-your-team',
    category: 'team',
    seo: {
      title: 'Know Where Your Team Is | GPS Tracking',
      description: 'Real-time GPS tracking for field teams. Know locations, verify visits, and provide accurate ETAs to customers.',
      keywords: ['track team', 'GPS tracking', 'field team tracking', 'employee location'],
    },
    hero: {
      badge: 'Team Problem',
      title: 'Know where',
      highlight: 'your team is.',
      description: 'Real-time visibility into field operations. Know who\'s where, verify arrivals, and give accurate ETAs.',
      stat: { value: 'Real-time', label: 'Tracking' },
    },
    problem: {
      title: 'No visibility into field operations',
      description: 'You can\'t manage what you can\'t see.',
      painPoints: [
        { title: 'Unknown locations', description: 'Where is everyone right now?', cost: 'No oversight' },
        { title: 'No ETA answers', description: 'Customers ask when you\'ll arrive. You guess.', cost: 'Poor experience' },
        { title: 'Unverified visits', description: 'Did they actually go to the job?', cost: 'Accountability gaps' },
        { title: 'Inefficient routes', description: 'Can\'t optimise what you can\'t see.', cost: 'Wasted fuel' },
      ],
      impactStats: [
        { value: '20%', label: 'Time on inefficient routes' },
        { value: '30min', label: 'Daily wasted per driver' },
        { value: '£3,000', label: 'Annual fuel waste' },
      ],
    },
    solution: {
      title: 'Complete field visibility',
      description: 'See everything, manage better.',
      features: [
        { icon: 'map-pin', title: 'Live GPS', description: 'Real-time location of everyone.' },
        { icon: 'check-circle', title: 'Visit verification', description: 'Confirm presence at job sites.' },
        { icon: 'navigation', title: 'Accurate ETAs', description: 'Tell customers exactly when.' },
        { icon: 'map', title: 'Route history', description: 'See where time was spent.' },
      ],
    },
    results: {
      title: 'What you can expect',
      items: [
        { metric: 'ETA accuracy', improvement: '95%', description: 'Customers know when to expect you.' },
        { metric: 'Accountability', improvement: '100%', description: 'Verified presence at every job.' },
        { metric: 'Fuel costs', improvement: '-15%', description: 'Optimised routes save money.' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { step: 1, title: 'Staff install app', description: 'Works on any smartphone.' },
        { step: 2, title: 'Locations update live', description: 'See everyone on a map.' },
        { step: 3, title: 'ETAs and verification', description: 'Automatically calculated.' },
      ],
    },
    cta: {
      title: 'Ready to see your team?',
      description: 'Start your free trial today.',
      urgency: 'Every day without visibility is a day of uncertainty.',
    },
    relatedProblems: ['eliminate-paperwork', 'scale-your-business'],
  },

  'scale-your-business': {
    slug: 'scale-your-business',
    category: 'growth',
    seo: {
      title: 'Scale Without Hiring Office Staff | Automation',
      description: 'Handle more customers without more admin. Automation lets you scale operations without proportional headcount.',
      keywords: ['scale business', 'business growth', 'automation', 'scale without hiring'],
    },
    hero: {
      badge: 'Growth Problem',
      title: 'Scale without',
      highlight: 'more office staff.',
      description: 'Automation handles the growing admin so you can take on more customers without hiring more people.',
      stat: { value: '3x', label: 'Capacity' },
    },
    problem: {
      title: 'Growth means more admin, more staff',
      description: 'Or does it?',
      painPoints: [
        { title: 'Admin overwhelm', description: 'More customers = more calls, emails, invoices.', cost: 'Bottleneck' },
        { title: 'Hiring is expensive', description: 'Office staff cost £25-40k+ per year.', cost: 'Margin pressure' },
        { title: 'Training time', description: 'New hires take months to become productive.', cost: 'Lost time' },
        { title: 'Can\'t say yes', description: 'Turning down work because you can\'t handle it.', cost: 'Lost revenue' },
      ],
      impactStats: [
        { value: '£30k', label: 'Admin staff cost' },
        { value: '3 months', label: 'To train new hire' },
        { value: '40%', label: 'Growth limited by admin' },
      ],
    },
    solution: {
      title: 'Automation is your new admin team',
      description: 'Scale infinitely without hiring.',
      features: [
        { icon: 'zap', title: 'Workflow automation', description: 'Routine tasks run automatically.' },
        { icon: 'calendar', title: 'Self-booking', description: 'Customers book themselves.' },
        { icon: 'credit-card', title: 'Auto-invoicing', description: 'Invoices generate and send.' },
        { icon: 'cpu', title: 'AI assistance', description: 'AI handles routine enquiries.' },
      ],
    },
    results: {
      title: 'What you can expect',
      items: [
        { metric: 'Admin capacity', improvement: '+200%', description: 'Handle more with same staff.' },
        { metric: 'Hiring needs', improvement: '-50%', description: 'Automation replaces headcount.' },
        { metric: 'Customer capacity', improvement: '+150%', description: 'Say yes to more work.' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { step: 1, title: 'Automate repetitive tasks', description: 'Set up workflows once.' },
        { step: 2, title: 'Enable self-service', description: 'Customers help themselves.' },
        { step: 3, title: 'Scale without limits', description: 'Automation handles the growth.' },
      ],
    },
    cta: {
      title: 'Ready to scale?',
      description: 'Start your free trial today.',
      urgency: 'Every day at capacity is revenue you\'re leaving behind.',
    },
    relatedProblems: ['automate-follow-ups', 'eliminate-paperwork'],
  },

  'fix-cash-flow': {
    slug: 'fix-cash-flow',
    category: 'financial',
    seo: {
      title: 'Fix Your Cash Flow Problems | Deposits & Fast Payments',
      description: 'Improve cash flow with deposits, faster invoicing, and online payments. Stop the feast-or-famine cycle.',
      keywords: ['fix cash flow', 'cash flow problems', 'business cash flow', 'improve cash flow'],
    },
    hero: {
      badge: 'Financial Problem',
      title: 'Fix cash flow.',
      highlight: 'Forever.',
      description: 'Deposits, fast invoicing, and online payments create predictable cash flow. No more feast or famine.',
      stat: { value: '50%', label: 'Faster cash' },
    },
    problem: {
      title: 'Cash flow gaps stress you out',
      description: 'You\'re profitable on paper but broke in reality.',
      painPoints: [
        { title: 'Feast or famine', description: 'Flush one month, scrambling the next.', cost: 'Constant stress' },
        { title: 'Slow payments', description: 'Work done, invoice sent, waiting...', cost: '30-60 day delays' },
        { title: 'No deposits', description: 'Materials and labour before you\'re paid.', cost: 'Cash outflow' },
        { title: 'Late invoicing', description: 'Too busy to invoice promptly.', cost: 'Delayed revenue' },
      ],
      impactStats: [
        { value: '82%', label: 'Fail due to cash flow' },
        { value: '30 days', label: 'Average payment delay' },
        { value: '£10k+', label: 'Typical cash gap' },
      ],
    },
    solution: {
      title: 'Predictable cash flow',
      description: 'Money when you need it.',
      features: [
        { icon: 'credit-card', title: 'Booking deposits', description: 'Get paid upfront.' },
        { icon: 'zap', title: 'Instant invoicing', description: 'Invoice from the job site.' },
        { icon: 'smartphone', title: 'Online payments', description: 'Customers pay immediately.' },
        { icon: 'repeat', title: 'Recurring billing', description: 'Predictable monthly revenue.' },
      ],
    },
    results: {
      title: 'What you can expect',
      items: [
        { metric: 'Payment time', improvement: '-50%', description: 'Money arrives faster.' },
        { metric: 'Cash gaps', improvement: '-70%', description: 'Deposits smooth the flow.' },
        { metric: 'Stress', improvement: '-100%', description: 'Sleep at night again.' },
      ],
    },
    howItWorks: {
      title: 'How it works',
      steps: [
        { step: 1, title: 'Take deposits at booking', description: 'Secure commitment and cash.' },
        { step: 2, title: 'Invoice instantly', description: 'From the job site.' },
        { step: 3, title: 'Get paid online', description: 'No waiting for cheques.' },
      ],
    },
    cta: {
      title: 'Ready to fix cash flow?',
      description: 'Start your free trial today.',
      urgency: 'Every day with cash flow problems is a day closer to trouble.',
    },
    relatedProblems: ['get-paid-faster', 'scale-your-business'],
  },
};

// Export helpers
export const problemSlugs = Object.keys(problems) as (keyof typeof problems)[];
export type ProblemSlug = keyof typeof problems;

export function getProblem(slug: string) {
  return problems[slug as ProblemSlug];
}

// Group by category
export const problemsByCategory = {
  scheduling: ['stop-double-bookings', 'reduce-no-shows'],
  payments: ['get-paid-faster', 'fix-cash-flow'],
  communication: ['stop-missing-calls'],
  operations: ['automate-follow-ups', 'eliminate-paperwork'],
  growth: ['capture-more-leads', 'scale-your-business'],
  team: ['track-your-team'],
  financial: ['fix-cash-flow'],
} as const;
