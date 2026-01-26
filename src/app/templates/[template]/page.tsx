import { notFound } from 'next/navigation';
import { LandingLayout } from '@/components/layout';
import { Container, Section, Button, Badge, Icon } from '@/components/ui';
import { siteConfig, ctaLinks } from '@/lib/constants';
import { getTemplate, templateSlugs } from '@/lib/data';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ template: string }>;
};

// Generate static pages
export function generateStaticParams() {
  return templateSlugs.map((template) => ({ template }));
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { template: slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    return { title: 'Template Not Found' };
  }

  return {
    title: template.seo.title,
    description: template.seo.description,
    keywords: template.seo.keywords,
    alternates: {
      canonical: `${siteConfig.url}/templates/${slug}`,
    },
    openGraph: {
      title: template.seo.title,
      description: template.seo.description,
      url: `${siteConfig.url}/templates/${slug}`,
      type: 'website',
      siteName: siteConfig.name,
    },
  };
}

export default async function TemplatePage({ params }: Props) {
  const { template: slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    notFound();
  }

  return (
    <LandingLayout>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-purple-50/50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              {template.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              {template.hero.title}
              <span className="text-blue-600"> {template.hero.highlight}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              {template.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg">
                Use This Template
              </Button>
              <Button href={ctaLinks.demo} variant="outline" size="lg">
                See Preview
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
              <h2 className="text-3xl md:text-4xl font-bold">{template.overview.title}</h2>
              <p className="mt-4 text-lg text-neutral-600">{template.overview.description}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {template.overview.useCases.map((useCase) => (
                <div key={useCase} className="flex items-center gap-3 bg-purple-50 rounded-lg p-4">
                  <Icon name="check-circle" className="text-purple-600" size={20} />
                  <span>{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Features/Steps */}
      <Section className="bg-neutral-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{template.features.title}</h2>
            <div className="space-y-4">
              {template.features.items.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
                >
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-neutral-400 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Customization */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{template.customization.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {template.customization.options.map((option) => (
                <div key={option.label} className="bg-neutral-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="settings" className="text-blue-600" size={18} />
                    <h3 className="font-semibold">{option.label}</h3>
                  </div>
                  <p className="text-neutral-600">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How to Use */}
      <Section className="bg-blue-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{template.howToUse.title}</h2>
            <div className="space-y-6">
              {template.howToUse.steps.map((step) => (
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

      {/* Industries */}
      {template.industries.length > 0 && (
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Works for</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {template.industries.map((industry) => (
                  <span
                    key={industry}
                    className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section className="bg-purple-600 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {template.cta.title}
            </h2>
            <p className="mt-4 text-lg text-purple-100">
              {template.cta.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Start Free Trial
              </Button>
              <Button href={ctaLinks.demo} variant="outline" size="lg" className="border-white text-white hover:bg-purple-500">
                Book a Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-purple-200">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
