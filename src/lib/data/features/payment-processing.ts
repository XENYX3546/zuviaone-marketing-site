// Payment Processing Feature Page

import type { FeaturePageData } from '../types';

export const paymentProcessing: FeaturePageData = {
  slug: 'payment-processing',
  seo: {
    title: 'Payment Processing for Business | Accept Payments Online',
    description: 'Accept credit cards, bank transfers, and online payments. Low fees, instant setup, no contracts. Start accepting payments today.',
    keywords: ['payment processing', 'accept payments', 'credit card processing', 'online payments', 'payment gateway', 'merchant services'],
  },
  hero: {
    badge: 'Payments',
    title: 'Get paid.',
    highlight: 'Any way they want.',
    description: 'Accept credit cards, bank transfers, and more. Low fees, instant payouts, and professional checkout.',
    stats: [
      { value: '1.4%', label: 'Transaction fee' },
      { value: '2 days', label: 'Payout time' },
      { value: '85%', label: 'Pay online' },
    ],
  },
  problemSolution: {
    title: 'Friction kills conversions',
    description: 'Make it easy to pay and customers will.',
    items: [
      {
        problem: 'Customers can\'t pay online so they delay or forget',
        solution: 'One-click online payments remove all friction',
      },
      {
        problem: 'Bank transfers take forever and require manual matching',
        solution: 'Automatic payment matching with instant confirmation',
      },
      {
        problem: 'High processing fees eat into your margins',
        solution: 'Competitive rates starting at 1.4% + 20p per transaction',
      },
      {
        problem: 'Waiting weeks for payouts hurts cash flow',
        solution: 'Fast payouts — money in your account in 2 days',
      },
    ],
  },
  solution: {
    title: 'Payments made simple',
    description: 'Every payment method your customers want.',
    features: [
      { icon: 'credit-card', title: 'Card Payments', description: 'Visa, Mastercard, Amex — all major cards accepted.' },
      { icon: 'building', title: 'Bank Transfers', description: 'Open Banking for instant bank-to-bank payments.' },
      { icon: 'smartphone', title: 'Mobile Payments', description: 'Apple Pay, Google Pay, and mobile-optimised checkout.' },
      { icon: 'link', title: 'Payment Links', description: 'Send payment links via email or SMS.' },
      { icon: 'shield', title: 'Secure Checkout', description: 'PCI compliant with 3D Secure protection.' },
      { icon: 'zap', title: 'Instant Confirmation', description: 'Automatic payment matching and notifications.' },
    ],
  },
  benefits: {
    title: 'What this means for your business',
    description: 'More payments, faster, at lower cost.',
    items: [
      { title: 'Get paid instantly', description: 'Customers pay in seconds. No waiting for cheques or transfers.' },
      { title: 'Lower fees', description: 'Competitive rates mean more money stays with you.' },
      { title: 'Professional checkout', description: 'Branded payment pages that build trust.' },
      { title: 'Automatic reconciliation', description: 'Payments matched to invoices automatically.' },
    ],
  },
  useCases: {
    title: 'Payments for every business',
    items: [
      { industry: 'Service Businesses', description: 'Invoice and collect payments in one flow.' },
      { industry: 'E-commerce', description: 'Checkout that converts with every payment method.' },
      { industry: 'Field Service', description: 'Take payments on-site with mobile-friendly links.' },
    ],
  },
  cta: {
    title: 'Ready to get paid faster?',
    description: 'Start accepting payments today. No setup fees.',
  },
};
