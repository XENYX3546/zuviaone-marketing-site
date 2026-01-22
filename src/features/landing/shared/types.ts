export type LandingPageData = {
  hero: {
    badge?: string;
    title: string;
    highlight?: string;
    description: string;
  };
  features: {
    title: string;
    description: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  benefits?: {
    title: string;
    items: string[];
  };
};
