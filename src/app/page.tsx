import { LandingLayout } from '@/components/layout';
import {
  HeroSection,
  FeaturesSection,
  SocialProofSection,
  CTASection,
} from '@/features/home/client';

export default function HomePage() {
  return (
    <LandingLayout>
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <CTASection />
    </LandingLayout>
  );
}
