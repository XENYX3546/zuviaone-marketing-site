import { FeatureLandingPage } from '@/features/landing/client';
import { featurePages, siteConfig } from '@/lib/constants';
import type { Metadata } from 'next';

const data = featurePages.automation;

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

export default function AutomationPage() {
  return <FeatureLandingPage data={data} />;
}
