import { LandingLayout } from '@/components/layout';
import { StatusPage } from '@/features/status';
import { siteConfig } from '@/lib/constants';
import { getStatusPage } from '@/lib/status/client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status',
  description:
    'Real-time system status and uptime monitoring for ZuviaOne. Check the health of all services, view uptime history, and see active incidents.',
  keywords: [
    'ZuviaOne status',
    'system status',
    'uptime monitoring',
    'service health',
    'incident reports',
  ],
  alternates: {
    canonical: `${siteConfig.url}/status`,
  },
  openGraph: {
    title: 'System Status | ZuviaOne',
    description:
      'Real-time system status and uptime monitoring for ZuviaOne.',
    url: `${siteConfig.url}/status`,
  },
};

export default async function StatusPageRoute() {
  const response = await getStatusPage();

  return (
    <LandingLayout>
      <StatusPage data={response.data} />
    </LandingLayout>
  );
}
