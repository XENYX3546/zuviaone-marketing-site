import { notFound } from 'next/navigation';
import { LandingLayout } from '@/components/layout';
import { Container, Section, Button, Badge, Icon } from '@/components/ui';
import { siteConfig, ctaLinks } from '@/lib/constants';
import { competitorSlugs, getCompetitor } from '@/lib/data';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ competitor: string }>;
};

// Generate static pages for all competitors
export function generateStaticParams() {
  return competitorSlugs.map((competitor) => ({ competitor }));
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor: slug } = await params;
  const competitor = getCompetitor(slug);

  if (!competitor) {
    return { title: 'Competitor Not Found' };
  }

  return {
    title: competitor.seo.title,
    description: competitor.seo.description,
    keywords: competitor.seo.keywords,
    alternates: {
      canonical: `${siteConfig.url}/vs/${slug}`,
    },
    openGraph: {
      title: competitor.seo.title,
      description: competitor.seo.description,
      url: `${siteConfig.url}/vs/${slug}`,
      type: 'website',
      siteName: siteConfig.name,
    },
  };
}

// Comparison schema
function ComparisonSchema({ competitor }: { competitor: NonNullable<ReturnType<typeof getCompetitor>> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: competitor.seo.title,
    description: competitor.seo.description,
    url: `${siteConfig.url}/vs/${competitor.slug}`,
    mainEntity: {
      '@type': 'Product',
      name: siteConfig.name,
      description: siteConfig.description,
      brand: {
        '@type': 'Brand',
        name: siteConfig.name,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ComparisonPage({ params }: Props) {
  const { competitor: slug } = await params;
  const competitor = getCompetitor(slug);

  if (!competitor) {
    notFound();
  }

  return (
    <LandingLayout>
      <ComparisonSchema competitor={competitor} />

      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              {competitor.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              {competitor.hero.title}
              <span className="text-blue-600"> {competitor.hero.highlight}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              {competitor.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg">
                Start Free Trial
              </Button>
              <Button href={ctaLinks.demo} variant="outline" size="lg">
                Book a Demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Overview */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              About {competitor.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-semibold mb-2">What they do</h3>
                <p className="text-neutral-600">{competitor.overview.whatTheyDo}</p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-semibold mb-2">Target market</h3>
                <p className="text-neutral-600">{competitor.overview.targetMarket}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section className="bg-neutral-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{competitor.comparison.title}</h2>
              <p className="mt-4 text-lg text-neutral-400">{competitor.comparison.description}</p>
            </div>

            <div className="bg-neutral-800 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 border-b border-neutral-700 font-semibold">
                <div>Feature</div>
                <div className="text-center text-blue-400">ZuviaOne</div>
                <div className="text-center">{competitor.name}</div>
              </div>
              {competitor.comparison.features.map((feature) => (
                <div
                  key={feature.feature}
                  className="grid grid-cols-3 gap-4 p-4 border-b border-neutral-700/50 last:border-0"
                >
                  <div className="text-neutral-300">{feature.feature}</div>
                  <div className="text-center">
                    {feature.us === true ? (
                      <Icon name="check" className="text-green-400 mx-auto" size={20} />
                    ) : feature.us === false ? (
                      <Icon name="x" className="text-red-400 mx-auto" size={20} />
                    ) : (
                      <span className="text-sm text-neutral-400">{feature.us}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {feature.them === true ? (
                      <Icon name="check" className="text-green-400 mx-auto" size={20} />
                    ) : feature.them === false ? (
                      <Icon name="x" className="text-red-400 mx-auto" size={20} />
                    ) : (
                      <span className="text-sm text-neutral-400">{feature.them}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Comparison */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Pricing comparison</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="text-blue-600 font-semibold mb-2">ZuviaOne</div>
                <div className="text-3xl font-bold">{competitor.pricing.ourPrice}</div>
                <div className="text-sm text-neutral-600 mt-2">Everything included</div>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="font-semibold mb-2">{competitor.name}</div>
                <div className="text-3xl font-bold">{competitor.pricing.theirPrice}</div>
                <div className="text-sm text-neutral-600 mt-2">Plus add-ons and extras</div>
              </div>
            </div>
            <div className="mt-6 text-lg font-semibold text-green-600">
              {competitor.pricing.savings}
            </div>
          </div>
        </Container>
      </Section>

      {/* Limitations */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {competitor.limitations.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {competitor.limitations.items.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="alert-circle" className="text-amber-500" size={20} />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Advantages */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {competitor.advantages.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {competitor.advantages.items.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="check" className="text-green-600" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-neutral-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      {competitor.testimonial && (
        <Section className="bg-blue-600 text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-xl md:text-2xl italic">
                "{competitor.testimonial.quote}"
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold">{competitor.testimonial.author}</div>
                <div className="text-blue-200">
                  {competitor.testimonial.role}, {competitor.testimonial.company}
                </div>
                <div className="text-sm text-blue-200 mt-1">
                  Switched from {competitor.testimonial.previousTool}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {competitor.migrationCta.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              {competitor.migrationCta.description}
            </p>
            <ul className="mt-6 space-y-2">
              {competitor.migrationCta.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center justify-center gap-2">
                  <Icon name="check" className="text-green-500" size={18} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg">
                Start Free Trial
              </Button>
              <Button href={ctaLinks.demo} variant="outline" size="lg">
                Book a Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
