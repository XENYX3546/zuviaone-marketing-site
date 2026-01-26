import { LandingLayout } from '@/components/layout';
import { Container, Section, Button, Icon } from '@/components/ui';
import { siteConfig, ctaLinks, navigation } from '@/lib/constants';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | Everything You Need to Run Your Business',
  description: 'CRM, scheduling, field service, invoicing, communication, automation, customer portal, and analytics. All in one platform.',
  alternates: {
    canonical: `${siteConfig.url}/features`,
  },
};

const featureDetails: Record<string, { icon: string; description: string; highlights: string[] }> = {
  '/features/crm': {
    icon: 'users',
    description: 'Manage all your customer relationships in one place. Track interactions, notes, and history.',
    highlights: ['Contact management', 'Interaction history', 'Custom fields', 'Segmentation'],
  },
  '/features/scheduling': {
    icon: 'calendar',
    description: 'Smart scheduling that prevents double bookings and optimizes your calendar.',
    highlights: ['Online booking', 'Team calendars', 'Conflict detection', 'Reminders'],
  },
  '/features/field-service': {
    icon: 'map-pin',
    description: 'Dispatch, track, and manage your field team with real-time visibility.',
    highlights: ['Job dispatch', 'GPS tracking', 'Mobile app', 'Digital forms'],
  },
  '/features/invoicing': {
    icon: 'file-text',
    description: 'Create and send professional invoices. Get paid faster with online payments.',
    highlights: ['Invoice builder', 'Online payments', 'Recurring billing', 'Payment tracking'],
  },
  '/features/communication': {
    icon: 'message-square',
    description: 'Email, SMS, and phone all in one inbox. Never miss a customer message.',
    highlights: ['Unified inbox', 'SMS messaging', 'Email', 'Call tracking'],
  },
  '/features/automation': {
    icon: 'zap',
    description: 'Automate repetitive tasks. Follow-ups, reminders, and workflows run themselves.',
    highlights: ['Workflow builder', 'Triggers', 'Auto follow-ups', 'Task automation'],
  },
  '/features/customer-portal': {
    icon: 'globe',
    description: 'Give customers a self-service portal to book, pay, and communicate.',
    highlights: ['Online booking', 'Invoice payment', 'Message center', 'Job history'],
  },
  '/features/analytics': {
    icon: 'bar-chart',
    description: 'Understand your business with real-time dashboards and reports.',
    highlights: ['Revenue tracking', 'Team performance', 'Lead analytics', 'Custom reports'],
  },
};

export default function FeaturesPage() {
  return (
    <LandingLayout>
      <Section className="bg-gradient-to-b from-blue-50/50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
              Everything you need, <span className="text-blue-600">nothing you don't</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              One platform with all the tools to run your service business. No more juggling multiple apps.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {navigation.features.map((feature) => {
              const details = featureDetails[feature.href];
              return (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="group bg-white border border-neutral-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <Icon name={details?.icon as any || 'zap'} className="text-blue-600 group-hover:text-white transition-colors" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h2 className="font-bold text-xl text-neutral-900 group-hover:text-blue-600 transition-colors">
                          {feature.label}
                        </h2>
                        <Icon name="arrow-right" className="text-neutral-400 group-hover:text-blue-600 transition-colors" size={20} />
                      </div>
                      <p className="mt-2 text-neutral-600">
                        {details?.description}
                      </p>
                      {details?.highlights && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {details.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
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
            <h2 className="text-3xl font-bold">All features included</h2>
            <p className="mt-4 text-blue-100">
              No feature tiers. No per-user pricing. One price, everything included.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href={ctaLinks.signUp} size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Free Trial
              </Button>
              <Button href="/pricing" variant="outline" size="lg" className="border-white text-white hover:bg-blue-500">
                See Pricing
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
