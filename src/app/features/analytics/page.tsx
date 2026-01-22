import type { Metadata } from 'next';
import { featurePages, siteConfig } from '@/lib/constants';
import { FeatureLandingPage } from '@/features/landing/client';

const data = featurePages.analytics;

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  keywords: data.seo.keywords,
  alternates: {
    canonical: `${siteConfig.url}/features/${data.slug}`,
  },
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    url: `${siteConfig.url}/features/${data.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: data.seo.title,
    description: data.seo.description,
  },
};

export default function AnalyticsPage() {
  return <FeatureLandingPage data={data} />;
}
