// Job Checklists Feature Page

import type { FeaturePageData } from '../types';

export const jobChecklists: FeaturePageData = {
  slug: 'job-checklists',
  seo: {
    title: 'Job Checklists for Field Service | Digital Checklists',
    description: 'Ensure consistent quality with digital job checklists. Photo evidence, signatures, and compliance tracking. Never miss a step.',
    keywords: ['job checklists', 'service checklists', 'digital checklists', 'field service checklists', 'quality control', 'inspection checklists'],
  },
  hero: {
    badge: 'Job Checklists',
    title: 'Same quality.',
    highlight: 'Every time.',
    description: 'Digital checklists ensure every job is completed to the same high standard. Photos, signatures, and proof of work.',
    stats: [
      { value: '99%', label: 'Completion rate' },
      { value: '0', label: 'Steps missed' },
      { value: '50%', label: 'Fewer callbacks' },
    ],
  },
  problemSolution: {
    title: 'Quality is inconsistent without checklists',
    description: 'When steps get skipped, customers complain.',
    items: [
      {
        problem: 'Different technicians do jobs differently with varying quality',
        solution: 'Standard checklists ensure everyone follows the same process',
      },
      {
        problem: 'Steps get skipped when technicians are rushing',
        solution: 'Required checkpoints can\'t be skipped before job completion',
      },
      {
        problem: 'No proof of work when customers dispute quality',
        solution: 'Photos and signatures create undeniable evidence',
      },
      {
        problem: 'Paper checklists get lost or can\'t be read',
        solution: 'Digital checklists sync instantly to the office',
      },
    ],
  },
  solution: {
    title: 'Checklists that ensure quality',
    description: 'Build quality into every job.',
    features: [
      { icon: 'check-square', title: 'Custom Checklists', description: 'Create checklists for any service or job type.' },
      { icon: 'camera', title: 'Photo Evidence', description: 'Require photos at key checkpoints.' },
      { icon: 'edit-3', title: 'Digital Signatures', description: 'Customer sign-off on completed work.' },
      { icon: 'lock', title: 'Required Steps', description: 'Mandatory items that can\'t be skipped.' },
      { icon: 'clipboard', title: 'Templates', description: 'Reusable templates for common job types.' },
      { icon: 'bar-chart', title: 'Completion Analytics', description: 'Track compliance and identify training needs.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Consistent quality, proof of work.',
    items: [
      { title: 'Guarantee quality', description: 'Standard processes mean consistent results every time.' },
      { title: 'Reduce callbacks', description: 'Nothing gets missed means fewer complaints and returns.' },
      { title: 'Protect yourself', description: 'Photo evidence protects against false claims.' },
      { title: 'Train faster', description: 'New staff follow checklists and learn the right way.' },
    ],
  },
  useCases: {
    title: 'Checklists for field service',
    items: [
      { industry: 'Cleaning', description: 'Room-by-room checklists with before/after photos.' },
      { industry: 'HVAC & Trades', description: 'Safety checks and maintenance procedures.' },
      { industry: 'Property Inspections', description: 'Standardised inspection reports with evidence.' },
    ],
  },
  cta: {
    title: 'Ready for consistent quality?',
    description: 'Start using digital checklists. Free 14-day trial.',
  },
};
