'use client';

import { LandingLayout } from '@/components/layout';
import { type FeaturePageData } from '@/lib/constants';
import { FeatureLandingHero } from './FeatureLandingHero';
import { ProblemSolutionSection } from './ProblemSolutionSection';
import { SolutionSection } from './SolutionSection';
import { BenefitsSection } from './BenefitsSection';
import { UseCasesSection } from './UseCasesSection';
import { FeatureIndustries } from './FeatureIndustries';
import { FeatureCTA } from './FeatureCTA';

type FeatureLandingPageProps = {
  data: FeaturePageData;
};

export function FeatureLandingPage({ data }: FeatureLandingPageProps) {
  return (
    <LandingLayout>
      <FeatureLandingHero
        badge={data.hero.badge}
        title={data.hero.title}
        highlight={data.hero.highlight}
        description={data.hero.description}
        stats={data.hero.stats}
      />
      <ProblemSolutionSection
        title={data.problemSolution.title}
        description={data.problemSolution.description}
        items={data.problemSolution.items}
      />
      <SolutionSection
        title={data.solution.title}
        description={data.solution.description}
        features={data.solution.features}
      />
      <BenefitsSection
        title={data.benefits.title}
        description={data.benefits.description}
        items={data.benefits.items}
      />
      <UseCasesSection title={data.useCases.title} items={data.useCases.items} />
      <FeatureIndustries featureSlug={data.slug} featureName={data.hero.badge} />
      <FeatureCTA title={data.cta.title} description={data.cta.description} />
    </LandingLayout>
  );
}
