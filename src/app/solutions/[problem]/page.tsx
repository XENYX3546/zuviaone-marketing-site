import { notFound } from 'next/navigation';
import { LandingLayout } from '@/components/layout';
import { Container, Section, Button, Badge, Icon } from '@/components/ui';
import { siteConfig, ctaLinks } from '@/lib/constants';
import { getProblem, problemSlugs } from '@/lib/data';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ problem: string }>;
};

// Generate static pages
export function generateStaticParams() {
  return problemSlugs.map((problem) => ({ problem }));
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { problem: slug } = await params;
  const problem = getProblem(slug);

  if (!problem) {
    return { title: 'Page Not Found' };
  }

  return {
    title: problem.seo.title,
    description: problem.seo.description,
    keywords: problem.seo.keywords,
    alternates: {
      canonical: `${siteConfig.url}/solutions/${slug}`,
    },
    openGraph: {
      title: problem.seo.title,
      description: problem.seo.description,
      url: `${siteConfig.url}/solutions/${slug}`,
      type: 'website',
      siteName: siteConfig.name,
    },
  };
}

export default async function ProblemPage({ params }: Props) {
  const { problem: slug } = await params;
  const problem = getProblem(slug);

  if (!problem) {
    notFound();
  }

  return (
    <LandingLayout>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-red-50/50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-6">
              {problem.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
              {problem.hero.title}
              <span className="text-blue-600"> {problem.hero.highlight}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              {problem.hero.description}
            </p>
            {problem.hero.stat && (
              <div className="mt-8 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <span className="text-2xl font-bold">{problem.hero.stat.value}</span>
                <span>{problem.hero.stat.label}</span>
              </div>
            )}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg">
                Solve This Now
              </Button>
              <Button href={ctaLinks.demo} variant="outline" size="lg">
                See How It Works
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem Deep Dive */}
      <Section className="bg-neutral-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{problem.problem.title}</h2>
              <p className="mt-4 text-lg text-neutral-400">{problem.problem.description}</p>
            </div>

            <div className="space-y-4 mb-12">
              {problem.problem.painPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="x" className="text-red-400" size={16} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{point.title}</h3>
                      <p className="text-neutral-400 mt-1">{point.description}</p>
                      {point.cost && (
                        <div className="mt-2 text-sm text-red-400">
                          Cost: {point.cost}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              {problem.problem.impactStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-red-400">{stat.value}</div>
                  <div className="text-sm text-neutral-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Solution */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{problem.solution.title}</h2>
              <p className="mt-4 text-lg text-neutral-600">{problem.solution.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {problem.solution.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-blue-50 rounded-xl p-6"
                >
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

      {/* Results */}
      <Section className="bg-green-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {problem.results.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {problem.results.items.map((item) => (
                <div key={item.metric} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-600">
                    {item.improvement}
                  </div>
                  <div className="font-semibold mt-2">{item.metric}</div>
                  <div className="text-neutral-600 text-sm mt-1">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {problem.howItWorks.title}
            </h2>
            <div className="space-y-8">
              {problem.howItWorks.steps.map((step) => (
                <div key={step.step} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">{step.title}</h3>
                    <p className="text-neutral-600 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-blue-600 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {problem.cta.title}
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              {problem.cta.description}
            </p>
            {problem.cta.urgency && (
              <p className="mt-4 text-blue-200 italic">
                {problem.cta.urgency}
              </p>
            )}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Free Trial
              </Button>
              <Button href={ctaLinks.demo} variant="outline" size="lg" className="border-white text-white hover:bg-blue-500">
                Book a Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-blue-200">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
