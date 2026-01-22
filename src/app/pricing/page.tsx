import type { Metadata } from 'next';
import { LandingLayout } from '@/components/layout';
import { PricingHero, PricingCards, PricingFAQ } from '@/features/pricing/client';
import { CTASection } from '@/features/home/client';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for teams of all sizes. Start free, upgrade when you\'re ready. Plans from free to enterprise.',
  keywords: [
    'ZuviaOne pricing',
    'CRM pricing',
    'field service management cost',
    'business software pricing',
    'SaaS pricing',
    'free trial',
    'small business software cost',
  ],
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
  openGraph: {
    title: 'Pricing - Simple, Transparent Plans | ZuviaOne',
    description: 'Simple, transparent pricing for teams of all sizes. Start free, upgrade when you\'re ready.',
    url: `${siteConfig.url}/pricing`,
  },
};

// Pricing schema for rich snippets
function PricingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'ZuviaOne Business Management Software',
    description: siteConfig.description,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '99',
      priceCurrency: 'GBP',
      offerCount: 3,
      offers: [
        {
          '@type': 'Offer',
          name: 'Starter Plan',
          price: '0',
          priceCurrency: 'GBP',
          description: 'Perfect for getting started. Free forever for small teams.',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Professional Plan',
          price: '29',
          priceCurrency: 'GBP',
          description: 'For growing businesses that need more power.',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '29',
            priceCurrency: 'GBP',
            billingDuration: 'P1M',
            unitText: 'per user per month',
          },
        },
        {
          '@type': 'Offer',
          name: 'Business Plan',
          price: '99',
          priceCurrency: 'GBP',
          description: 'For teams that need advanced features and support.',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '99',
            priceCurrency: 'GBP',
            billingDuration: 'P1M',
            unitText: 'per user per month',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PricingPage() {
  return (
    <LandingLayout>
      <PricingSchema />
      <PricingHero />
      <PricingCards />
      <PricingFAQ />
      <CTASection />
    </LandingLayout>
  );
}
