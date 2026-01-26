// Industry Page Types

export type IndustryPainPoint = {
  title: string;
  description: string;
};

export type IndustryStat = {
  value: string;
  label: string;
  description: string;
};

export type IndustryTerminology = {
  customer: string;
  customers: string;
  job: string;
  jobs: string;
  service: string;
  services: string;
  appointment: string;
  quote: string;
  team: string;
  technician: string;
};

export type IndustryData = {
  slug: string;
  name: string;
  namePlural: string;
  description: string;
  seo: {
    titleSuffix: string;
    industry: string;
  };
  terminology: IndustryTerminology;
  painPoints: IndustryPainPoint[];
  stats: IndustryStat[];
  useCases: string[];
  hero: {
    headline: string;
    subheadline: string;
  };
  trustSignals: string[];
};
