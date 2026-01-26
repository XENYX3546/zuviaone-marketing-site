// Feature Page Types

export type FeatureStat = {
  value: string;
  label: string;
};

export type ProblemSolutionItem = {
  problem: string;
  solution: string;
};

export type SolutionFeature = {
  icon: string;
  title: string;
  description: string;
};

export type BenefitItem = {
  title: string;
  description: string;
};

export type UseCaseItem = {
  industry: string;
  description: string;
};

export type FeaturePageData = {
  slug: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    stats?: FeatureStat[];
  };
  problemSolution: {
    title: string;
    description: string;
    items: ProblemSolutionItem[];
  };
  solution: {
    title: string;
    description: string;
    features: SolutionFeature[];
  };
  benefits: {
    title: string;
    description: string;
    items: BenefitItem[];
  };
  useCases: {
    title: string;
    items: UseCaseItem[];
  };
  cta: {
    title: string;
    description: string;
  };
};
