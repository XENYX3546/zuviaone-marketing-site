import { notFound } from 'next/navigation';
import { LandingLayout } from '@/components/layout';
import { IndustryFeatureBenefits } from '@/features/industry/client/IndustryFeatureBenefits';
import { IndustryFeatureCapabilities } from '@/features/industry/client/IndustryFeatureCapabilities';
import { IndustryFeatureCTA } from '@/features/industry/client/IndustryFeatureCTA';
import { IndustryFeatureHero } from '@/features/industry/client/IndustryFeatureHero';
import { IndustryFeatureOtherFeatures } from '@/features/industry/client/IndustryFeatureOtherFeatures';
import { IndustryFeaturePainPoints } from '@/features/industry/client/IndustryFeaturePainPoints';
import { IndustryFeatureSameFeature } from '@/features/industry/client/IndustryFeatureSameFeature';
import {
  industries,
  siteConfig,
  featurePages,
  featurePageSlugs,
  getIndustryFeatureContent,
  getAllIndustryFeatureCombinations,
} from '@/lib/constants';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ industry: string; feature: string }>;
};

// Generate static pages for all industry + feature combinations
export function generateStaticParams() {
  return getAllIndustryFeatureCombinations();
}

// Generate metadata for each industry + feature page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: industrySlug, feature: featureSlug } = await params;
  const industry = industries[industrySlug];
  const feature = featurePages[featureSlug];

  if (!industry || !feature) {
    return {
      title: 'Page Not Found',
    };
  }

  const content = getIndustryFeatureContent(industrySlug, featureSlug, industry);

  // Create SEO-optimized title and description
  const title = `${content.headline} | ${siteConfig.name}`;
  const description = content.subheadline;

  // Build comprehensive keywords
  const featureKeywords = feature.seo.keywords || [];
  const industryKeywords = [
    `${industry.seo.industry} ${featureSlug}`,
    `${featureSlug} for ${industry.namePlural.toLowerCase()}`,
    `${industry.name.toLowerCase()} ${featureSlug} software`,
    `best ${featureSlug} for ${industry.seo.industry}`,
  ];

  return {
    title,
    description,
    keywords: [...industryKeywords, ...featureKeywords.slice(0, 4)],
    alternates: {
      canonical: `${siteConfig.url}/for/${industrySlug}/${featureSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/for/${industrySlug}/${featureSlug}`,
      type: 'website',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// Schema markup for industry + feature page
function IndustryFeatureSchema({
  industry,
  feature,
  content,
}: {
  industry: typeof industries[string];
  feature: typeof featurePages[string];
  content: ReturnType<typeof getIndustryFeatureContent>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: content.headline,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: content.subheadline,
    url: `${siteConfig.url}/for/${industry.slug}/${feature.slug}`,
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '99',
      priceCurrency: 'GBP',
      offerCount: 3,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1000',
      bestRating: '5',
      worstRating: '1',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: industry.namePlural,
    },
    featureList: content.benefits,
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `For ${industry.namePlural}`,
        item: `${siteConfig.url}/for/${industry.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: content.headline,
        item: `${siteConfig.url}/for/${industry.slug}/${feature.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default async function IndustryFeaturePage({ params }: Props) {
  const { industry: industrySlug, feature: featureSlug } = await params;
  const industry = industries[industrySlug];
  const feature = featurePages[featureSlug];

  if (!industry || !feature) {
    notFound();
  }

  // Get the customized content for this combination
  const content = getIndustryFeatureContent(industrySlug, featureSlug, industry);

  // Get other features for cross-linking
  const otherFeatures = featurePageSlugs
    .filter((s) => s !== featureSlug)
    .slice(0, 4)
    .map((s) => ({
      ...featurePages[s],
      slug: s,
    }));

  return (
    <LandingLayout>
      <IndustryFeatureSchema industry={industry} feature={feature} content={content} />
      <IndustryFeatureHero industry={industry} feature={feature} content={content} />
      <IndustryFeatureBenefits industry={industry} content={content} />
      <IndustryFeaturePainPoints industry={industry} feature={feature} />
      <IndustryFeatureCapabilities industry={industry} feature={feature} />
      <IndustryFeatureOtherFeatures industry={industry} features={otherFeatures} />
      <IndustryFeatureSameFeature currentIndustry={industry} feature={feature} />
      <IndustryFeatureCTA industry={industry} feature={feature} />
    </LandingLayout>
  );
}
