// Competitor Comparison Page Types

export type ComparisonFeature = {
  feature: string;
  us: boolean | string;
  them: boolean | string;
  note?: string;
};

export type PricingComparison = {
  ourPrice: string;
  theirPrice: string;
  savings: string;
};

export type CompetitorData = {
  slug: string;
  name: string;
  category: 'field-service' | 'scheduling' | 'invoicing' | 'crm' | 'marketing' | 'communication';
  logo?: string;
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
    whatTheyDo: string;
    targetMarket: string;
    founded?: string;
    headquarters?: string;
  };
  comparison: {
    title: string;
    description: string;
    features: ComparisonFeature[];
  };
  pricing: PricingComparison;
  advantages: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  limitations: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  migrationCta: {
    title: string;
    description: string;
    benefits: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    previousTool: string;
  };
};

export type AlternativePageData = {
  slug: string;
  competitor: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  reasons: Array<{
    title: string;
    description: string;
  }>;
};
