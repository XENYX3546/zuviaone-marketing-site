// Template Page Types

export type TemplateCategory =
  | 'automation'
  | 'email'
  | 'sms'
  | 'document'
  | 'checklist'
  | 'workflow';

export type TemplateData = {
  slug: string;
  name: string;
  category: TemplateCategory;
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
    preview?: string;
  };
  overview: {
    title: string;
    description: string;
    useCases: string[];
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  customization: {
    title: string;
    options: Array<{
      label: string;
      description: string;
    }>;
  };
  howToUse: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  industries: string[];
  relatedTemplates: string[];
  cta: {
    title: string;
    description: string;
  };
};

export type EmailTemplateData = TemplateData & {
  subjectLine: string;
  previewText: string;
  category: 'email';
};
