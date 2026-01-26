// Problem/Solution Page Types

export type ProblemCategory =
  | 'scheduling'
  | 'communication'
  | 'payments'
  | 'operations'
  | 'growth'
  | 'team'
  | 'financial'
  | 'customer-experience';

export type ProblemData = {
  slug: string;
  category: ProblemCategory;
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
    stat?: {
      value: string;
      label: string;
    };
  };
  problem: {
    title: string;
    description: string;
    painPoints: Array<{
      title: string;
      description: string;
      cost?: string;
    }>;
    impactStats: Array<{
      value: string;
      label: string;
    }>;
  };
  solution: {
    title: string;
    description: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  results: {
    title: string;
    items: Array<{
      metric: string;
      improvement: string;
      description: string;
    }>;
  };
  howItWorks: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    urgency?: string;
  };
  relatedProblems: string[];
};
