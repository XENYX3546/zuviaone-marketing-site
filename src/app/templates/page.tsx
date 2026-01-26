import { LandingLayout } from '@/components/layout';
import { Container, Section, Button, Badge, Icon } from '@/components/ui';
import { siteConfig, ctaLinks } from '@/lib/constants';
import { templates, templateSlugs } from '@/lib/data';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Templates | Ready-to-Use Automations',
  description: 'Browse our library of automation and email templates. Set up follow-ups, reminders, and campaigns in minutes.',
  alternates: {
    canonical: `${siteConfig.url}/templates`,
  },
};

const categoryLabels: Record<string, string> = {
  automation: 'Automation Workflows',
  email: 'Email Templates',
  sms: 'SMS Templates',
};

export default function TemplatesPage() {
  // Group templates by category
  const grouped = templateSlugs.reduce((acc, slug) => {
    const template = templates[slug];
    const category = template.category;
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
              Templates & <span className="text-blue-600">automations</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              Don't start from scratch. Use our proven templates to automate follow-ups, reminders, and campaigns.
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
                <div className="grid md:grid-cols-2 gap-6">
                  {slugs.map((slug) => {
                    const template = templates[slug];
                    return (
                      <Link
                        key={slug}
                        href={`/templates/${slug}`}
                        className="group bg-white border border-neutral-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors">
                            <Icon name="zap" className="text-purple-600 group-hover:text-white transition-colors" size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                                {template.name}
                              </h3>
                              <Badge variant="default" className="text-xs">
                                {template.category}
                              </Badge>
                            </div>
                            <p className="text-neutral-600 text-sm line-clamp-2">
                              {template.hero.description}
                            </p>
                          </div>
                          <Icon name="arrow-right" className="text-neutral-400 group-hover:text-blue-600 transition-colors mt-1" size={20} />
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

      <Section className="bg-purple-600 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to automate?</h2>
            <p className="mt-4 text-purple-100">
              All templates are included free with your ZuviaOne account.
            </p>
            <div className="mt-8">
              <Button href={ctaLinks.signUp} size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Start Free Trial
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
