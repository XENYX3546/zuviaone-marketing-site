// Integration Page Types

export type IntegrationCategory =
  | 'accounting'
  | 'payments'
  | 'calendar'
  | 'communication'
  | 'lead-sources'
  | 'marketing'
  | 'storage'
  | 'automation';

export type IntegrationData = {
  slug: string;
  name: string;
  category: IntegrationCategory;
  logo?: string;
  color?: string;
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
  };
  overview: {
    title: string;
    description: string;
    benefits: string[];
  };
  features: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  sync: {
    title: string;
    description: string;
    dataPoints: Array<{
      direction: 'push' | 'pull' | 'sync';
      label: string;
      description: string;
    }>;
  };
  setup: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
    time: string;
  };
  useCases: Array<{
    title: string;
    description: string;
  }>;
  cta: {
    title: string;
    description: string;
  };
};
