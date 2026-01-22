// Industry Data for Programmatic SEO Pages
// Each industry has unique pain points, terminology, and messaging

export type IndustryData = {
  slug: string;
  name: string;
  namePlural: string;
  description: string;
  // SEO
  seo: {
    titleSuffix: string; // "for Carpet Cleaners"
    industry: string; // "carpet cleaning"
  };
  // Terminology mapping (generic → industry-specific)
  terminology: {
    customer: string;
    customers: string;
    job: string;
    jobs: string;
    service: string;
    services: string;
    appointment: string;
    quote: string;
    team: string;
    technician: string;
  };
  // Industry-specific pain points
  painPoints: Array<{
    title: string;
    description: string;
  }>;
  // Stats to display
  stats: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  // Common use cases
  useCases: string[];
  // Hero section customization
  hero: {
    headline: string;
    subheadline: string;
  };
  // Trust signals
  trustSignals: string[];
};

export const industries: Record<string, IndustryData> = {
  'carpet-cleaners': {
    slug: 'carpet-cleaners',
    name: 'Carpet Cleaner',
    namePlural: 'Carpet Cleaners',
    description: 'Professional carpet and upholstery cleaning businesses',
    seo: {
      titleSuffix: 'for Carpet Cleaners',
      industry: 'carpet cleaning',
    },
    terminology: {
      customer: 'customer',
      customers: 'customers',
      job: 'cleaning job',
      jobs: 'cleaning jobs',
      service: 'cleaning service',
      services: 'cleaning services',
      appointment: 'cleaning appointment',
      quote: 'cleaning quote',
      team: 'cleaning team',
      technician: 'technician',
    },
    painPoints: [
      {
        title: 'Missed callbacks cost you jobs',
        description: 'Enquiries come in while you\'re on-site cleaning. By the time you call back, they\'ve booked someone else.',
      },
      {
        title: 'Scheduling conflicts and double bookings',
        description: 'Managing multiple technicians across different locations leads to overlapping appointments and wasted drive time.',
      },
      {
        title: 'Chasing payments after the job',
        description: 'Customers forget to pay, and you spend evenings sending reminders instead of relaxing.',
      },
      {
        title: 'No visibility into team location',
        description: 'You don\'t know if your team is running late until the customer calls to complain.',
      },
    ],
    stats: [
      { value: '45%', label: 'More jobs booked', description: 'with automated lead follow-up' },
      { value: '3hrs', label: 'Saved daily', description: 'on admin and scheduling' },
      { value: '14 days', label: 'Faster payment', description: 'with online invoicing' },
    ],
    useCases: [
      'Residential carpet cleaning',
      'Commercial carpet maintenance',
      'Upholstery and fabric cleaning',
      'Stain removal services',
      'End of tenancy cleaning',
    ],
    hero: {
      headline: 'Run your carpet cleaning business without the chaos',
      subheadline: 'Book more jobs, get paid faster, and spend less time on admin. Built specifically for carpet cleaning professionals.',
    },
    trustSignals: [
      'Trusted by 500+ carpet cleaning businesses',
      'Average 45% increase in bookings',
      '4.9★ rating from cleaning professionals',
    ],
  },

  'plumbers': {
    slug: 'plumbers',
    name: 'Plumber',
    namePlural: 'Plumbers',
    description: 'Plumbing contractors and emergency plumbing services',
    seo: {
      titleSuffix: 'for Plumbers',
      industry: 'plumbing',
    },
    terminology: {
      customer: 'customer',
      customers: 'customers',
      job: 'plumbing job',
      jobs: 'plumbing jobs',
      service: 'plumbing service',
      services: 'plumbing services',
      appointment: 'service call',
      quote: 'plumbing quote',
      team: 'plumbing team',
      technician: 'plumber',
    },
    painPoints: [
      {
        title: 'Emergency calls at all hours',
        description: 'You\'re on call 24/7 but managing callouts manually means some emergencies slip through.',
      },
      {
        title: 'Parts and inventory tracking',
        description: 'You arrive at a job without the right part, wasting time on supply runs.',
      },
      {
        title: 'Quoting on the spot is guesswork',
        description: 'Without job history and pricing at your fingertips, quotes are inconsistent.',
      },
      {
        title: 'Paperwork piles up',
        description: 'Compliance certificates, invoices, and job sheets create endless admin.',
      },
    ],
    stats: [
      { value: '60%', label: 'Faster dispatch', description: 'for emergency callouts' },
      { value: '£2,400', label: 'Saved monthly', description: 'on admin costs' },
      { value: '99%', label: 'Jobs completed', description: 'first-time fix rate' },
    ],
    useCases: [
      'Emergency plumbing repairs',
      'Boiler installations and servicing',
      'Bathroom and kitchen fitting',
      'Drain unblocking',
      'Commercial plumbing contracts',
    ],
    hero: {
      headline: 'Plumbing software that works as hard as you do',
      subheadline: 'From emergency callouts to planned maintenance, manage every job from quote to payment.',
    },
    trustSignals: [
      'Trusted by 800+ plumbing businesses',
      'Gas Safe certified workflow support',
      '24/7 emergency dispatch ready',
    ],
  },

  'electricians': {
    slug: 'electricians',
    name: 'Electrician',
    namePlural: 'Electricians',
    description: 'Electrical contractors and domestic electricians',
    seo: {
      titleSuffix: 'for Electricians',
      industry: 'electrical',
    },
    terminology: {
      customer: 'customer',
      customers: 'customers',
      job: 'electrical job',
      jobs: 'electrical jobs',
      service: 'electrical service',
      services: 'electrical services',
      appointment: 'service appointment',
      quote: 'electrical quote',
      team: 'electrical team',
      technician: 'electrician',
    },
    painPoints: [
      {
        title: 'Certification paperwork nightmare',
        description: 'EICR, Part P, and compliance certificates take hours to complete manually.',
      },
      {
        title: 'Coordinating multi-day projects',
        description: 'Rewires and installations span multiple days but scheduling tools weren\'t built for this.',
      },
      {
        title: 'Material costs eat into margins',
        description: 'Without accurate job costing, you underquote and lose money on materials.',
      },
      {
        title: 'No central job history',
        description: 'When a customer calls about previous work, you\'re digging through paperwork.',
      },
    ],
    stats: [
      { value: '4hrs', label: 'Saved weekly', description: 'on compliance paperwork' },
      { value: '35%', label: 'Better margins', description: 'with accurate job costing' },
      { value: '2x', label: 'Faster quotes', description: 'with saved templates' },
    ],
    useCases: [
      'Domestic rewiring',
      'Commercial electrical installations',
      'EICR testing and certification',
      'EV charger installation',
      'Smart home installations',
    ],
    hero: {
      headline: 'Electrical contractor software that handles the paperwork',
      subheadline: 'From first fix to certification, manage jobs and stay compliant without the admin burden.',
    },
    trustSignals: [
      'NICEIC workflow compatible',
      'Part P documentation built-in',
      'Trusted by 600+ electrical contractors',
    ],
  },

  'hvac': {
    slug: 'hvac',
    name: 'HVAC Technician',
    namePlural: 'HVAC Contractors',
    description: 'Heating, ventilation, and air conditioning contractors',
    seo: {
      titleSuffix: 'for HVAC Contractors',
      industry: 'HVAC',
    },
    terminology: {
      customer: 'customer',
      customers: 'customers',
      job: 'service call',
      jobs: 'service calls',
      service: 'HVAC service',
      services: 'HVAC services',
      appointment: 'service appointment',
      quote: 'service quote',
      team: 'service team',
      technician: 'technician',
    },
    painPoints: [
      {
        title: 'Seasonal demand swings',
        description: 'Summer and winter rush means you\'re overwhelmed, then it\'s quiet. Hard to plan.',
      },
      {
        title: 'Maintenance contract tracking',
        description: 'Annual services slip through the cracks when you\'re managing hundreds of contracts.',
      },
      {
        title: 'Equipment and warranty tracking',
        description: 'You can\'t remember what unit a customer has or when the warranty expires.',
      },
      {
        title: 'Parts ordering delays',
        description: 'Waiting for parts means return visits and unhappy customers.',
      },
    ],
    stats: [
      { value: '40%', label: 'More maintenance revenue', description: 'with automated reminders' },
      { value: '25%', label: 'Fewer return visits', description: 'with better job preparation' },
      { value: '£3,200', label: 'Monthly savings', description: 'in operational efficiency' },
    ],
    useCases: [
      'Boiler servicing and repairs',
      'Air conditioning installation',
      'Annual maintenance contracts',
      'Commercial HVAC systems',
      'Heat pump installations',
    ],
    hero: {
      headline: 'HVAC software that keeps your business running smoothly',
      subheadline: 'Manage maintenance contracts, track equipment, and dispatch technicians with ease.',
    },
    trustSignals: [
      'Gas Safe workflow support',
      'F-Gas compliance tracking',
      'Trusted by 400+ HVAC businesses',
    ],
  },

  'landscapers': {
    slug: 'landscapers',
    name: 'Landscaper',
    namePlural: 'Landscapers',
    description: 'Landscaping and garden maintenance businesses',
    seo: {
      titleSuffix: 'for Landscapers',
      industry: 'landscaping',
    },
    terminology: {
      customer: 'client',
      customers: 'clients',
      job: 'project',
      jobs: 'projects',
      service: 'landscaping service',
      services: 'landscaping services',
      appointment: 'site visit',
      quote: 'project quote',
      team: 'crew',
      technician: 'landscaper',
    },
    painPoints: [
      {
        title: 'Weather disrupts everything',
        description: 'Rain cancels jobs but rescheduling manually across multiple crews is chaos.',
      },
      {
        title: 'Recurring maintenance is hard to track',
        description: 'Weekly mowing contracts across dozens of properties need precise scheduling.',
      },
      {
        title: 'Project scope creep',
        description: 'Customers add "just one more thing" and your margins disappear.',
      },
      {
        title: 'Seasonal cash flow gaps',
        description: 'Winter is slow but bills don\'t stop. You need better financial visibility.',
      },
    ],
    stats: [
      { value: '50%', label: 'Less scheduling time', description: 'with route optimization' },
      { value: '30%', label: 'More recurring revenue', description: 'from maintenance contracts' },
      { value: '2hrs', label: 'Saved daily', description: 'on admin per crew' },
    ],
    useCases: [
      'Garden maintenance contracts',
      'Landscape design and installation',
      'Commercial grounds maintenance',
      'Tree surgery and removal',
      'Seasonal planting and clearance',
    ],
    hero: {
      headline: 'Landscaping software that grows with your business',
      subheadline: 'Schedule crews, manage projects, and track recurring contracts without the paperwork.',
    },
    trustSignals: [
      'Route optimization built-in',
      'Weather-aware scheduling',
      'Trusted by 350+ landscaping businesses',
    ],
  },

  'cleaning-services': {
    slug: 'cleaning-services',
    name: 'Cleaning Business',
    namePlural: 'Cleaning Services',
    description: 'Residential and commercial cleaning companies',
    seo: {
      titleSuffix: 'for Cleaning Companies',
      industry: 'cleaning',
    },
    terminology: {
      customer: 'client',
      customers: 'clients',
      job: 'clean',
      jobs: 'cleans',
      service: 'cleaning service',
      services: 'cleaning services',
      appointment: 'cleaning appointment',
      quote: 'cleaning quote',
      team: 'cleaning team',
      technician: 'cleaner',
    },
    painPoints: [
      {
        title: 'High staff turnover',
        description: 'New cleaners need onboarding, routes change, and quality suffers.',
      },
      {
        title: 'Last-minute cancellations',
        description: 'Clients cancel with no notice and you can\'t fill the slot.',
      },
      {
        title: 'Quality control at scale',
        description: 'You can\'t be at every property, so standards slip without checklists.',
      },
      {
        title: 'Managing recurring schedules',
        description: 'Weekly, fortnightly, monthly cleans across hundreds of clients is complex.',
      },
    ],
    stats: [
      { value: '40%', label: 'Less admin time', description: 'with automated scheduling' },
      { value: '25%', label: 'Higher retention', description: 'with consistent quality' },
      { value: '90%', label: 'On-time arrivals', description: 'with route planning' },
    ],
    useCases: [
      'Residential house cleaning',
      'Office and commercial cleaning',
      'End of tenancy cleaning',
      'Airbnb and holiday let turnover',
      'Deep cleaning services',
    ],
    hero: {
      headline: 'Cleaning business software that scales with you',
      subheadline: 'From solo cleaner to multi-team operation, manage schedules, staff, and clients in one place.',
    },
    trustSignals: [
      'Checklist and quality tracking',
      'Staff management built-in',
      'Trusted by 700+ cleaning companies',
    ],
  },

  'pest-control': {
    slug: 'pest-control',
    name: 'Pest Controller',
    namePlural: 'Pest Control Companies',
    description: 'Pest control and extermination services',
    seo: {
      titleSuffix: 'for Pest Control',
      industry: 'pest control',
    },
    terminology: {
      customer: 'customer',
      customers: 'customers',
      job: 'treatment',
      jobs: 'treatments',
      service: 'pest control service',
      services: 'pest control services',
      appointment: 'treatment appointment',
      quote: 'treatment quote',
      team: 'service team',
      technician: 'technician',
    },
    painPoints: [
      {
        title: 'Emergency callouts at odd hours',
        description: 'Pest emergencies don\'t wait for office hours but managing dispatch is chaotic.',
      },
      {
        title: 'Follow-up treatments get missed',
        description: 'Multi-visit treatments require precise scheduling or the problem returns.',
      },
      {
        title: 'Chemical usage tracking',
        description: 'Compliance requires logging what products were used where and when.',
      },
      {
        title: 'Commercial contract management',
        description: 'Regular inspections for restaurants and businesses need reliable scheduling.',
      },
    ],
    stats: [
      { value: '100%', label: 'Treatment compliance', description: 'with automated scheduling' },
      { value: '35%', label: 'More contract revenue', description: 'from commercial clients' },
      { value: '50%', label: 'Faster response', description: 'to emergency callouts' },
    ],
    useCases: [
      'Residential pest treatments',
      'Commercial pest contracts',
      'Emergency callouts',
      'Bird proofing and control',
      'Rodent control programmes',
    ],
    hero: {
      headline: 'Pest control software that keeps you compliant',
      subheadline: 'Track treatments, manage contracts, and respond to emergencies without the paperwork.',
    },
    trustSignals: [
      'BPCA workflow compatible',
      'Chemical usage logging',
      'Trusted by 300+ pest control businesses',
    ],
  },

  'roofers': {
    slug: 'roofers',
    name: 'Roofer',
    namePlural: 'Roofing Contractors',
    description: 'Roofing contractors and repair specialists',
    seo: {
      titleSuffix: 'for Roofers',
      industry: 'roofing',
    },
    terminology: {
      customer: 'customer',
      customers: 'customers',
      job: 'roofing job',
      jobs: 'roofing jobs',
      service: 'roofing service',
      services: 'roofing services',
      appointment: 'site visit',
      quote: 'roofing quote',
      team: 'roofing team',
      technician: 'roofer',
    },
    painPoints: [
      {
        title: 'Weather-dependent scheduling',
        description: 'Rain and wind cancel jobs, and rescheduling multiple crews is a nightmare.',
      },
      {
        title: 'Accurate quoting is difficult',
        description: 'Without measuring tools and material calculators, quotes are guesswork.',
      },
      {
        title: 'Managing large projects',
        description: 'Multi-day jobs with materials, scaffolding, and crews need coordination.',
      },
      {
        title: 'Insurance and warranty documentation',
        description: 'Customers need guarantees, but paperwork gets lost or forgotten.',
      },
    ],
    stats: [
      { value: '40%', label: 'Faster quoting', description: 'with measurement tools' },
      { value: '20%', label: 'Better margins', description: 'with accurate job costing' },
      { value: '£4,000', label: 'Monthly savings', description: 'on operational costs' },
    ],
    useCases: [
      'Roof repairs and maintenance',
      'Full roof replacements',
      'Flat roofing',
      'Guttering and fascias',
      'Commercial roofing contracts',
    ],
    hero: {
      headline: 'Roofing software that keeps projects on track',
      subheadline: 'Quote accurately, schedule around weather, and manage crews from one platform.',
    },
    trustSignals: [
      'Weather-aware scheduling',
      'Material cost tracking',
      'Trusted by 250+ roofing contractors',
    ],
  },

  'locksmiths': {
    slug: 'locksmiths',
    name: 'Locksmith',
    namePlural: 'Locksmiths',
    description: 'Emergency and commercial locksmith services',
    seo: {
      titleSuffix: 'for Locksmiths',
      industry: 'locksmith',
    },
    terminology: {
      customer: 'customer',
      customers: 'customers',
      job: 'callout',
      jobs: 'callouts',
      service: 'locksmith service',
      services: 'locksmith services',
      appointment: 'callout',
      quote: 'quote',
      team: 'team',
      technician: 'locksmith',
    },
    painPoints: [
      {
        title: '24/7 emergency callouts',
        description: 'Lockouts happen at 3am. Managing dispatch and response times is critical.',
      },
      {
        title: 'Pricing transparency issues',
        description: 'Customers are wary of locksmith pricing. Clear quotes build trust.',
      },
      {
        title: 'Stock and van inventory',
        description: 'Running out of common locks on a job means lost revenue.',
      },
      {
        title: 'Multiple service areas',
        description: 'Covering a wide area means optimizing routes for fastest response.',
      },
    ],
    stats: [
      { value: '15min', label: 'Average response', description: 'with optimized dispatch' },
      { value: '95%', label: 'Customer satisfaction', description: 'with transparent pricing' },
      { value: '30%', label: 'More jobs daily', description: 'with route optimization' },
    ],
    useCases: [
      'Emergency lockouts',
      'Lock changes and upgrades',
      'Commercial security',
      'Safe opening and installation',
      'Access control systems',
    ],
    hero: {
      headline: 'Locksmith software built for rapid response',
      subheadline: 'Dispatch fast, quote transparently, and manage 24/7 operations with ease.',
    },
    trustSignals: [
      '24/7 dispatch support',
      'GPS tracking built-in',
      'Trusted by 200+ locksmiths',
    ],
  },

  'window-cleaners': {
    slug: 'window-cleaners',
    name: 'Window Cleaner',
    namePlural: 'Window Cleaners',
    description: 'Residential and commercial window cleaning services',
    seo: {
      titleSuffix: 'for Window Cleaners',
      industry: 'window cleaning',
    },
    terminology: {
      customer: 'customer',
      customers: 'customers',
      job: 'clean',
      jobs: 'cleans',
      service: 'window cleaning',
      services: 'window cleaning services',
      appointment: 'cleaning round',
      quote: 'quote',
      team: 'team',
      technician: 'window cleaner',
    },
    painPoints: [
      {
        title: 'Managing round routes',
        description: 'Hundreds of regular customers across different days and areas is complex.',
      },
      {
        title: 'Weather cancellations',
        description: 'Rain cancels the day but you still need to reschedule everyone.',
      },
      {
        title: 'Payment collection',
        description: 'Chasing cash payments door-to-door wastes time and money.',
      },
      {
        title: 'Customer communication',
        description: 'Letting customers know you\'re coming or running late takes time.',
      },
    ],
    stats: [
      { value: '40%', label: 'Route efficiency', description: 'with optimized rounds' },
      { value: '80%', label: 'Online payments', description: 'reduce cash collection' },
      { value: '2hrs', label: 'Saved daily', description: 'on route planning' },
    ],
    useCases: [
      'Residential window rounds',
      'Commercial window cleaning',
      'Conservatory cleaning',
      'Gutter clearing',
      'Pressure washing',
    ],
    hero: {
      headline: 'Window cleaning software that optimizes your rounds',
      subheadline: 'Plan efficient routes, collect payments online, and communicate with customers effortlessly.',
    },
    trustSignals: [
      'Round management built-in',
      'Weather-aware scheduling',
      'Trusted by 450+ window cleaners',
    ],
  },

  'garage-doors': {
    slug: 'garage-doors',
    name: 'Garage Door Installer',
    namePlural: 'Garage Door Companies',
    description: 'Garage door installation and repair services',
    seo: {
      titleSuffix: 'for Garage Door Companies',
      industry: 'garage door',
    },
    terminology: {
      customer: 'customer',
      customers: 'customers',
      job: 'installation',
      jobs: 'installations',
      service: 'garage door service',
      services: 'garage door services',
      appointment: 'service call',
      quote: 'quote',
      team: 'installation team',
      technician: 'installer',
    },
    painPoints: [
      {
        title: 'Complex quoting process',
        description: 'Door sizes, styles, and motors create thousands of combinations.',
      },
      {
        title: 'Long lead times on orders',
        description: 'Coordinating delivery dates with installation dates is tricky.',
      },
      {
        title: 'Emergency repair callouts',
        description: 'Broken doors need fast response but planned installs take priority.',
      },
      {
        title: 'Warranty and service tracking',
        description: 'Remembering what was installed where and warranty expiry is difficult.',
      },
    ],
    stats: [
      { value: '50%', label: 'Faster quotes', description: 'with product configurator' },
      { value: '30%', label: 'More installations', description: 'per month with better scheduling' },
      { value: '100%', label: 'Warranty tracking', description: 'with customer records' },
    ],
    useCases: [
      'New garage door installations',
      'Door repairs and maintenance',
      'Motor and automation fitting',
      'Commercial roller shutters',
      'Emergency repairs',
    ],
    hero: {
      headline: 'Garage door software that handles the complexity',
      subheadline: 'Quote faster, coordinate deliveries, and track installations from enquiry to completion.',
    },
    trustSignals: [
      'Product configuration tools',
      'Delivery coordination',
      'Trusted by 150+ garage door companies',
    ],
  },

  'appliance-repair': {
    slug: 'appliance-repair',
    name: 'Appliance Repair Tech',
    namePlural: 'Appliance Repair Companies',
    description: 'Home appliance repair and servicing',
    seo: {
      titleSuffix: 'for Appliance Repair',
      industry: 'appliance repair',
    },
    terminology: {
      customer: 'customer',
      customers: 'customers',
      job: 'repair',
      jobs: 'repairs',
      service: 'repair service',
      services: 'repair services',
      appointment: 'service call',
      quote: 'repair quote',
      team: 'service team',
      technician: 'technician',
    },
    painPoints: [
      {
        title: 'Diagnosing without seeing',
        description: 'Customers describe symptoms badly, so you arrive unprepared.',
      },
      {
        title: 'Parts sourcing delays',
        description: 'Finding the right part for older appliances wastes time.',
      },
      {
        title: 'Return visits for parts',
        description: 'Diagnose on day one, return with parts on day two. Inefficient.',
      },
      {
        title: 'Appliance model tracking',
        description: 'Knowing what appliances a customer has speeds up future repairs.',
      },
    ],
    stats: [
      { value: '70%', label: 'First-time fix rate', description: 'with better preparation' },
      { value: '45min', label: 'Saved per job', description: 'on diagnostics and admin' },
      { value: '25%', label: 'More jobs weekly', description: 'with efficient scheduling' },
    ],
    useCases: [
      'Washing machine repairs',
      'Fridge and freezer servicing',
      'Oven and cooker repairs',
      'Dishwasher repairs',
      'Tumble dryer servicing',
    ],
    hero: {
      headline: 'Appliance repair software that gets it right first time',
      subheadline: 'Diagnose faster, track appliances, and complete more repairs with fewer return visits.',
    },
    trustSignals: [
      'Appliance database built-in',
      'Parts ordering integration',
      'Trusted by 300+ repair companies',
    ],
  },
};

// Get all industry slugs for static generation
export const industrySlugs = Object.keys(industries);

// Helper to get industry by slug
export function getIndustry(slug: string): IndustryData | undefined {
  return industries[slug];
}
