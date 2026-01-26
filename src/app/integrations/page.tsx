import { LandingLayout } from '@/components/layout';
import { Container, Section, Button, Icon } from '@/components/ui';
import { siteConfig, ctaLinks } from '@/lib/constants';
import { integrations, integrationSlugs } from '@/lib/data';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations | Connect Your Tools',
  description: 'Connect ZuviaOne to QuickBooks, Xero, Stripe, Google Calendar, and more. Sync data automatically and eliminate double entry.',
  alternates: {
    canonical: `${siteConfig.url}/integrations`,
  },
};

const categoryLabels: Record<string, string> = {
  accounting: 'Accounting',
  payments: 'Payments',
  calendar: 'Calendar',
  communication: 'Communication',
  automation: 'Automation',
  marketing: 'Marketing',
};

export default function IntegrationsPage() {
  // Group integrations by category
  const grouped = integrationSlugs.reduce((acc, slug) => {
    const integration = integrations[slug];
    const category = integration.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(slug);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <LandingLayout>
      <Section className="bg-gradient-to-b from-blue-50/50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
              Connect your <span className="text-blue-600">tools</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              ZuviaOne integrates with the tools you already use. Sync data automatically and eliminate double entry.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-12">
            {Object.entries(grouped).map(([category, slugs]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  {categoryLabels[category] || category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {slugs.map((slug) => {
                    const integration = integrations[slug];
                    return (
                      <Link
                        key={slug}
                        href={`/integrations/${slug}`}
                        className="group bg-white border border-neutral-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                            style={{ backgroundColor: integration.color }}
                          >
                            {integration.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                              {integration.name}
                            </h3>
                            <p className="text-sm text-neutral-500">
                              {integration.category}
                            </p>
                          </div>
                          <Icon name="arrow-right" className="text-neutral-400 group-hover:text-blue-600 transition-colors" size={20} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Need a different integration?</h2>
            <p className="mt-4 text-neutral-400">
              We're always adding new integrations. Let us know what you need.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg">
                Start Free Trial
              </Button>
              <Button href={ctaLinks.demo} variant="outline" size="lg" className="border-neutral-600 text-white hover:bg-neutral-800">
                Request Integration
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
