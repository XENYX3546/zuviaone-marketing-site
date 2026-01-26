import { notFound } from 'next/navigation';
import { LandingLayout } from '@/components/layout';
import { Container, Section, Button, Badge, Icon } from '@/components/ui';
import { siteConfig, ctaLinks } from '@/lib/constants';
import { getIntegration, integrationSlugs } from '@/lib/data';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ integration: string }>;
};

// Generate static pages
export function generateStaticParams() {
  return integrationSlugs.map((integration) => ({ integration }));
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { integration: slug } = await params;
  const integration = getIntegration(slug);

  if (!integration) {
    return { title: 'Integration Not Found' };
  }

  return {
    title: integration.seo.title,
    description: integration.seo.description,
    keywords: integration.seo.keywords,
    alternates: {
      canonical: `${siteConfig.url}/integrations/${slug}`,
    },
    openGraph: {
      title: integration.seo.title,
      description: integration.seo.description,
      url: `${siteConfig.url}/integrations/${slug}`,
      type: 'website',
      siteName: siteConfig.name,
    },
  };
}

export default async function IntegrationPage({ params }: Props) {
  const { integration: slug } = await params;
  const integration = getIntegration(slug);

  if (!integration) {
    notFound();
  }

  return (
    <LandingLayout>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              {integration.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              {integration.hero.title}
              <span className="text-blue-600"> {integration.hero.highlight}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              {integration.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg">
                Connect {integration.name}
              </Button>
              <Button href={ctaLinks.demo} variant="outline" size="lg">
                See Integration
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Overview */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{integration.overview.title}</h2>
              <p className="mt-4 text-lg text-neutral-600">{integration.overview.description}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {integration.overview.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                  <Icon name="check-circle" className="text-green-600" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{integration.features.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {integration.features.items.map((feature) => (
                <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-neutral-600 mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Data Sync */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">{integration.sync.title}</h2>
              <p className="mt-4 text-neutral-600">{integration.sync.description}</p>
            </div>
            <div className="space-y-4">
              {integration.sync.dataPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-4 bg-neutral-50 rounded-xl p-4"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    point.direction === 'push' ? 'bg-blue-100' :
                    point.direction === 'pull' ? 'bg-green-100' : 'bg-purple-100'
                  }`}>
                    <Icon
                      name={point.direction === 'push' ? 'arrow-right' : point.direction === 'pull' ? 'arrow-left' : 'refresh-cw'}
                      className={
                        point.direction === 'push' ? 'text-blue-600' :
                        point.direction === 'pull' ? 'text-green-600' : 'text-purple-600'
                      }
                      size={18}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{point.label}</div>
                    <div className="text-sm text-neutral-600">{point.description}</div>
                  </div>
                  <div className="text-xs uppercase tracking-wide text-neutral-400">
                    {point.direction}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Setup */}
      <Section className="bg-blue-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">{integration.setup.title}</h2>
              <div className="mt-2 inline-flex items-center gap-2 text-blue-600">
                <Icon name="clock" size={18} />
                <span>{integration.setup.time}</span>
              </div>
            </div>
            <div className="space-y-6">
              {integration.setup.steps.map((step) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common use cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {integration.useCases.map((useCase) => (
                <div key={useCase.title} className="text-center">
                  <h3 className="font-semibold text-lg">{useCase.title}</h3>
                  <p className="text-neutral-600 mt-2">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-neutral-900 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {integration.cta.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              {integration.cta.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg">
                Start Free Trial
              </Button>
              <Button href={ctaLinks.demo} variant="outline" size="lg" className="border-neutral-600 text-white hover:bg-neutral-800">
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
