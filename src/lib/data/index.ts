// Data Index - Central Export for All Data

// Types
export * from './types';

// Features
export {
  featurePages,
  featurePageSlugs,
  getFeaturePage,
  featureCategories,
  type FeatureSlug,
} from './features';

// Competitors
export {
  competitors,
  competitorSlugs,
  getCompetitor,
  competitorsByCategory,
  alternatives,
  alternativeSlugs,
  type CompetitorSlug,
  type AlternativeSlug,
} from './competitors';

// Problems
export {
  problems,
  problemSlugs,
  getProblem,
  problemsByCategory,
  type ProblemSlug,
} from './problems';

// Integrations
export {
  integrations,
  integrationSlugs,
  getIntegration,
  integrationsByCategory,
  type IntegrationSlug,
} from './integrations';

// Templates
export {
  templates,
  templateSlugs,
  getTemplate,
  templatesByCategory,
  type TemplateSlug,
} from './templates';
