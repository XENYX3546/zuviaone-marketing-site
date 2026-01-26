import { LandingLayout } from '@/components/layout';
import { Container, Section, Button, Icon } from '@/components/ui';
import { siteConfig, ctaLinks } from '@/lib/constants';
import { competitors, competitorSlugs, competitorsByCategory } from '@/lib/data';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare | ZuviaOne vs Competitors',
  description: 'See how ZuviaOne compares to ServiceTitan, Jobber, Housecall Pro, and other field service software. Feature comparisons and pricing.',
  alternates: {
    canonical: `${siteConfig.url}/vs`,
  },
};

const categoryLabels: Record<string, string> = {
  'field-service': 'Field Service Software',
  'scheduling': 'Scheduling Software',
  'invoicing': 'Invoicing Software',
  'marketing': 'Marketing Software',
  'crm': 'CRM Software',
};

export default function ComparePage() {
  return (
    <LandingLayout>
      <Section className="bg-gradient-to-b from-blue-50/50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
              Compare <span className="text-blue-600">ZuviaOne</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              See how we stack up against other software. Spoiler: we do more for less.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-12">
            {Object.entries(competitorsByCategory).map(([category, slugs]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  vs {categoryLabels[category] || category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {slugs.map((slug) => {
                    const competitor = competitors[slug as keyof typeof competitors];
                    if (!competitor) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/vs/${slug}`}
                        className="group bg-white border border-neutral-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-lg text-neutral-900 group-hover:text-blue-600 transition-colors">
                            vs {competitor.name}
                          </h3>
                          <Icon name="arrow-right" className="text-neutral-400 group-hover:text-blue-600 transition-colors" size={20} />
                        </div>
                        <p className="text-sm text-neutral-600 line-clamp-2">
                          {competitor.hero.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-sm">
                          <span className="text-neutral-500">Their price:</span>
                          <span className="font-medium text-neutral-900">{competitor.pricing.theirPrice}</span>
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
            <h2 className="text-3xl font-bold">Ready to switch?</h2>
            <p className="mt-4 text-neutral-400">
              We'll help you migrate your data for free.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg">
                Start Free Trial
              </Button>
              <Button href={ctaLinks.demo} variant="outline" size="lg" className="border-neutral-600 text-white hover:bg-neutral-800">
                Book Migration Call
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
