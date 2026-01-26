// Customer Import Feature Page

import type { FeaturePageData } from '../types';

export const customerImport: FeaturePageData = {
  slug: 'customer-import',
  seo: {
    title: 'Customer Data Import Tool | CSV Import',
    description: 'Import your existing customer data easily. CSV, Excel, and other systems. Migrate without losing any information.',
    keywords: ['data import', 'CSV import', 'customer import', 'data migration', 'import customers', 'data transfer'],
  },
  hero: {
    badge: 'Data Import',
    title: 'Bring your data.',
    highlight: 'Lose nothing.',
    description: 'Import existing customers, contacts, and history. Switch systems without starting from scratch.',
    stats: [
      { value: '100%', label: 'Data preserved' },
      { value: '5min', label: 'Import time' },
      { value: '0', label: 'Lost records' },
    ],
  },
  problemSolution: {
    title: 'Switching systems shouldn\'t mean starting over',
    description: 'Your data is valuable. Keep all of it.',
    items: [
      {
        problem: 'Years of customer data stuck in old systems',
        solution: 'Import everything — customers, history, and custom fields',
      },
      {
        problem: 'Messy spreadsheets with inconsistent data',
        solution: 'Smart mapping and cleaning handles messy data',
      },
      {
        problem: 'Fear of losing important information during migration',
        solution: 'Validation and preview before any data is imported',
      },
      {
        problem: 'No time to manually re-enter thousands of records',
        solution: 'Bulk import handles thousands of records in minutes',
      },
    ],
  },
  solution: {
    title: 'Import made easy',
    description: 'Bring your data with confidence.',
    features: [
      { icon: 'upload', title: 'CSV/Excel Import', description: 'Import from spreadsheets in standard formats.' },
      { icon: 'git-branch', title: 'Smart Mapping', description: 'Map your columns to our fields easily.' },
      { icon: 'check-circle', title: 'Validation', description: 'Errors caught before import, not after.' },
      { icon: 'eye', title: 'Preview', description: 'See exactly what will be imported.' },
      { icon: 'layers', title: 'Bulk Import', description: 'Import thousands of records at once.' },
      { icon: 'clock', title: 'History Import', description: 'Bring over historical data and notes.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'Keep everything, lose nothing.',
    items: [
      { title: 'Preserve your data', description: 'All your customer information comes with you.' },
      { title: 'Start immediately', description: 'No weeks of manual data entry.' },
      { title: 'Import with confidence', description: 'Validation ensures data quality.' },
      { title: 'Keep your history', description: 'Past interactions and notes preserved.' },
    ],
  },
  useCases: {
    title: 'Import from anywhere',
    items: [
      { industry: 'From Spreadsheets', description: 'Migrate from Excel or Google Sheets.' },
      { industry: 'From Other CRMs', description: 'Export from old system, import to ZuviaOne.' },
      { industry: 'From Legacy Systems', description: 'Bring data from any system that exports.' },
    ],
  },
  cta: {
    title: 'Ready to bring your data?',
    description: 'Import your customers in minutes. Free trial.',
  },
};
