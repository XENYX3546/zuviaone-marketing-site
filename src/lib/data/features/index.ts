// Features Index - Aggregates all feature pages

// Re-export types
export type { FeaturePageData } from '../types';

// Import all features
import { crm } from './crm';
import { scheduling } from './scheduling';
import { fieldService } from './field-service';
import { invoicing } from './invoicing';
import { communication } from './communication';
import { automation } from './automation';
import { customerPortal } from './customer-portal';
import { analytics } from './analytics';
import { booking } from './booking';
import { quotes } from './quotes';
import { aiChatbot } from './ai-chatbot';
import { aiBlogGenerator } from './ai-blog-generator';
import { emailMarketing } from './email-marketing';
import { smsMarketing } from './sms-marketing';
import { voip } from './voip';
import { payroll } from './payroll';
import { fleetManagement } from './fleet-management';
import { teamManagement } from './team-management';
import { leadManagement } from './lead-management';
import { taskManagement } from './task-management';
import { recurringBilling } from './recurring-billing';
import { paymentProcessing } from './payment-processing';
import { emailBuilder } from './email-builder';
import { commissionTracking } from './commission-tracking';
import { mileageTracking } from './mileage-tracking';
import { jobChecklists } from './job-checklists';
import { customerFeedback } from './customer-feedback';
import { bookingCalendar } from './booking-calendar';
import { contactManagement } from './contact-management';
import { serviceCatalog } from './service-catalog';
import { reporting } from './reporting';
import { documentManagement } from './document-management';
import { staffTracking } from './staff-tracking';
import { shiftManagement } from './shift-management';
import { emailInbox } from './email-inbox';
import { segmentation } from './segmentation';
import { linkInBio } from './link-in-bio';
import { aiAssistant } from './ai-assistant';
import { globalSearch } from './global-search';
import { customerImport } from './customer-import';
import { bulkInvoicing } from './bulk-invoicing';
import { automatedReminders } from './automated-reminders';
import { reviewRequests } from './review-requests';
import { conversionTracking } from './conversion-tracking';
import { multiLocation } from './multi-location';
import { seoTools } from './seo-tools';

// Aggregate all feature pages by slug
export const featurePages = {
  // Core features (existing)
  'crm': crm,
  'scheduling': scheduling,
  'field-service': fieldService,
  'invoicing': invoicing,
  'communication': communication,
  'automation': automation,
  'customer-portal': customerPortal,
  'analytics': analytics,

  // New feature pages
  'booking-software': booking,
  'quote-software': quotes,
  'ai-chatbot': aiChatbot,
  'ai-blog-generator': aiBlogGenerator,
  'email-marketing': emailMarketing,
  'sms-marketing': smsMarketing,
  'voip-phone-system': voip,
  'payroll-software': payroll,
  'fleet-management': fleetManagement,
  'team-management': teamManagement,
  'lead-management': leadManagement,
  'task-management': taskManagement,
  'recurring-billing': recurringBilling,
  'payment-processing': paymentProcessing,
  'drag-drop-email-builder': emailBuilder,
  'commission-tracking': commissionTracking,
  'mileage-tracking': mileageTracking,
  'job-checklists': jobChecklists,
  'customer-feedback': customerFeedback,
  'booking-calendar': bookingCalendar,
  'contact-management': contactManagement,
  'service-catalog': serviceCatalog,
  'reporting-analytics': reporting,
  'document-management': documentManagement,
  'staff-tracking': staffTracking,
  'shift-management': shiftManagement,
  'email-inbox': emailInbox,
  'audience-segmentation': segmentation,
  'link-in-bio': linkInBio,
  'ai-assistant': aiAssistant,
  'global-search': globalSearch,
  'customer-import': customerImport,
  'bulk-invoicing': bulkInvoicing,
  'automated-reminders': automatedReminders,
  'review-requests': reviewRequests,
  'conversion-tracking': conversionTracking,
  'multi-location': multiLocation,
  'seo-keyword-research': seoTools,
} as const;

// Export slug list
export const featurePageSlugs = Object.keys(featurePages) as (keyof typeof featurePages)[];

// Type for feature slugs
export type FeatureSlug = keyof typeof featurePages;

// Helper function to get feature by slug
export function getFeaturePage(slug: string) {
  return featurePages[slug as FeatureSlug];
}

// Group features by category for navigation
export const featureCategories = {
  'Core Operations': [
    'crm',
    'scheduling',
    'field-service',
    'invoicing',
    'booking-software',
    'quote-software',
  ],
  'Team & Staff': [
    'team-management',
    'payroll-software',
    'commission-tracking',
    'shift-management',
    'staff-tracking',
    'task-management',
  ],
  'Communication': [
    'communication',
    'email-marketing',
    'sms-marketing',
    'voip-phone-system',
    'email-inbox',
    'automated-reminders',
  ],
  'Customer Experience': [
    'customer-portal',
    'booking-calendar',
    'customer-feedback',
    'review-requests',
    'ai-chatbot',
  ],
  'AI & Automation': [
    'automation',
    'ai-assistant',
    'ai-blog-generator',
  ],
  'Payments & Billing': [
    'payment-processing',
    'recurring-billing',
    'bulk-invoicing',
  ],
  'Analytics & Data': [
    'analytics',
    'reporting-analytics',
    'conversion-tracking',
    'global-search',
  ],
  'Marketing': [
    'drag-drop-email-builder',
    'audience-segmentation',
    'seo-keyword-research',
    'link-in-bio',
  ],
  'Business Management': [
    'fleet-management',
    'mileage-tracking',
    'document-management',
    'service-catalog',
    'contact-management',
    'lead-management',
    'job-checklists',
    'customer-import',
    'multi-location',
  ],
} as const;
