import { LandingLayout } from '@/components/layout';
import { Container, Section, Button, Icon } from '@/components/ui';
import { siteConfig, ctaLinks } from '@/lib/constants';
import { problems, problemSlugs } from '@/lib/data';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Fix Your Business Problems',
  description: 'Discover how ZuviaOne solves common business challenges. Stop double bookings, reduce no-shows, get paid faster, and more.',
  alternates: {
    canonical: `${siteConfig.url}/solutions`,
  },
};

export default function SolutionsPage() {
  return (
    <LandingLayout>
      <Section className="bg-gradient-to-b from-blue-50/50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
              Solutions for every <span className="text-blue-600">challenge</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              Running a service business is hard. We solve the problems that slow you down.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {problemSlugs.map((slug) => {
              const problem = problems[slug];
              return (
                <Link
                  key={slug}
                  href={`/solutions/${slug}`}
                  className="group bg-white border border-neutral-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <Icon name="zap" className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-semibold text-lg text-neutral-900 group-hover:text-blue-600 transition-colors">
                        {problem.hero.title} {problem.hero.highlight}
                      </h2>
                      <p className="mt-2 text-neutral-600 text-sm line-clamp-2">
                        {problem.hero.description}
                      </p>
                      {problem.hero.stat && (
                        <div className="mt-3 inline-flex items-center gap-2 text-sm text-green-600 font-medium">
                          <span>{problem.hero.stat.value}</span>
                          <span>{problem.hero.stat.label}</span>
                        </div>
                      )}
                    </div>
                    <Icon name="arrow-right" className="text-neutral-400 group-hover:text-blue-600 transition-colors" size={20} />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-blue-600 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to solve your challenges?</h2>
            <p className="mt-4 text-blue-100">
              Start your free trial and see results in the first week.
            </p>
            <div className="mt-8">
              <Button href={ctaLinks.signUp} size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Free Trial
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
