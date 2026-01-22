import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LandingLayout } from '@/components/layout';
import { industries, industrySlugs, siteConfig, featurePages, featurePageSlugs } from '@/lib/constants';
import { IndustryHero } from '@/features/industry/client/IndustryHero';
import { IndustryPainPoints } from '@/features/industry/client/IndustryPainPoints';
import { IndustryFeatures } from '@/features/industry/client/IndustryFeatures';
import { IndustryStats } from '@/features/industry/client/IndustryStats';
import { IndustryCTA } from '@/features/industry/client/IndustryCTA';

type Props = {
  params: Promise<{ industry: string }>;
};

// Generate static pages for all industries
export async function generateStaticParams() {
  return industrySlugs.map((industry) => ({
    industry,
  }));
}

// Generate metadata for each industry page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: industrySlug } = await params;
  const industry = industries[industrySlug];

  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  const title = `Business Software ${industry.seo.titleSuffix} | ${siteConfig.name}`;
  const description = `${industry.hero.subheadline} CRM, scheduling, invoicing, and more — all in one platform built for ${industry.seo.industry} businesses.`;

  return {
    title,
    description,
    keywords: [
      `${industry.seo.industry} software`,
      `${industry.seo.industry} CRM`,
      `${industry.name.toLowerCase()} business software`,
      `${industry.name.toLowerCase()} scheduling`,
      `${industry.name.toLowerCase()} invoicing`,
      `software for ${industry.namePlural.toLowerCase()}`,
      `${industry.seo.industry} management software`,
    ],
    alternates: {
      canonical: `${siteConfig.url}/for/${industrySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/for/${industrySlug}`,
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

// Schema markup for industry page
function IndustrySchema({ industry }: { industry: typeof industries[string] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${siteConfig.name} for ${industry.namePlural}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: `Business management software for ${industry.seo.industry} businesses. ${industry.hero.subheadline}`,
    url: `${siteConfig.url}/for/${industry.slug}`,
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function IndustryPage({ params }: Props) {
  const { industry: industrySlug } = await params;
  const industry = industries[industrySlug];

  if (!industry) {
    notFound();
  }

  // Get feature data for the features grid
  const features = featurePageSlugs.map((slug) => ({
    slug,
    ...featurePages[slug],
  }));

  return (
    <LandingLayout>
      <IndustrySchema industry={industry} />
      <IndustryHero industry={industry} />
      <IndustryStats industry={industry} />
      <IndustryPainPoints industry={industry} />
      <IndustryFeatures industry={industry} features={features} />
      <IndustryCTA industry={industry} />
    </LandingLayout>
  );
}
