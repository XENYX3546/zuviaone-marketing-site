import type { Metadata } from 'next';
import { LandingLayout } from '@/components/layout';
import { PricingHero, PricingCards, PricingFAQ } from '@/features/pricing/client';
import { CTASection } from '@/features/home/client';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for teams of all sizes. Start free, upgrade when you\'re ready.',
};

export default function PricingPage() {
  return (
    <LandingLayout>
      <PricingHero />
      <PricingCards />
      <PricingFAQ />
      <CTASection />
    </LandingLayout>
  );
}
