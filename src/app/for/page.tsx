import Link from 'next/link';
import { LandingLayout } from '@/components/layout';
import { Container, Section, Icon } from '@/components/ui';
import { industries, industrySlugs, siteConfig } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Software by Industry',
  description: 'Find the perfect business management software for your industry. CRM, scheduling, invoicing, and more — built specifically for service businesses.',
  keywords: [
    'service business software',
    'industry software',
    'trade business software',
    'field service software',
    'small business software by industry',
  ],
  alternates: {
    canonical: `${siteConfig.url}/for`,
  },
  openGraph: {
    title: 'Business Software by Industry | ZuviaOne',
    description: 'Find the perfect business management software for your industry.',
    url: `${siteConfig.url}/for`,
  },
};

// Schema for industries list
function IndustriesSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Business Software by Industry',
    description: 'Industry-specific business management software solutions',
    numberOfItems: industrySlugs.length,
    itemListElement: industrySlugs.map((slug, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `Software for ${industries[slug].namePlural}`,
      url: `${siteConfig.url}/for/${slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function IndustriesPage() {
  return (
    <LandingLayout>
      <IndustriesSchema />

      {/* Hero */}
      <Section className="bg-gradient-to-b from-blue-50/50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Built for <span className="text-blue-600">your industry</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              ZuviaOne is designed for service businesses like yours. Find your industry
              below to see how we can help you book more jobs, get paid faster, and grow.
            </p>
          </div>
        </Container>
      </Section>

      {/* Industries Grid */}
      <Section>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySlugs.map((slug) => {
              const industry = industries[slug];
              return (
                <Link
                  key={slug}
                  href={`/for/${slug}`}
                  className="group block bg-white rounded-xl p-6 border border-neutral-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {industry.namePlural}
                  </h2>
                  <p className="mt-2 text-neutral-600 text-sm line-clamp-2">
                    {industry.hero.subheadline.split('.')[0]}.
                  </p>

                  {/* Quick stats */}
                  <div className="mt-4 flex gap-4">
                    {industry.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label} className="text-sm">
                        <span className="font-semibold text-blue-600">{stat.value}</span>
                        <span className="text-neutral-500 ml-1">{stat.label.toLowerCase()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    Learn more
                    <Icon name="arrow-right" size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-blue-600">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white">
              Don&apos;t see your industry?
            </h2>
            <p className="mt-4 text-blue-100">
              ZuviaOne works for all service businesses. Start your free trial
              and see how it fits your workflow.
            </p>
            <div className="mt-8">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
