import type { Metadata } from 'next';
import { featurePages } from '@/lib/constants';
import { FeatureLandingPage } from '@/features/landing/client';

const data = featurePages.automation;

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  keywords: data.seo.keywords,
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
  },
};

export default function AutomationPage() {
  return <FeatureLandingPage data={data} />;
}
