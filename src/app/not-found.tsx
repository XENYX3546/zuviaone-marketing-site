import Link from 'next/link';
import { LandingLayout } from '@/components/layout';
import { Container, Section, Icon } from '@/components/ui';
import { siteConfig } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
  robots: {
    index: false,
    follow: true,
  },
};

const helpfulLinks = [
  { label: 'Home', href: '/', description: 'Go back to the homepage' },
  { label: 'Features', href: '/#features', description: 'Explore our features' },
  { label: 'Pricing', href: '/pricing', description: 'View our pricing plans' },
  { label: 'Blog', href: '/blog', description: 'Read our latest articles' },
];

export default function NotFound() {
  return (
    <LandingLayout>
      {/* JSON-LD for 404 page */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- JSON-LD structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Page Not Found',
            description: 'The requested page could not be found.',
            url: siteConfig.url,
            isPartOf: {
              '@type': 'WebSite',
              name: siteConfig.name,
              url: siteConfig.url,
            },
          }),
        }}
      />

      <Section className="min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Indicator */}
            <div className="mb-8">
              <span className="inline-block text-8xl md:text-9xl font-bold text-blue-100">
                404
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Page not found
            </h1>

            {/* Description */}
            <p className="text-lg text-neutral-600 mb-8">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been
              moved, deleted, or the URL might be incorrect.
            </p>

            {/* Primary CTA */}
            <div className="mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Icon name="arrow-left" size={20} />
                Back to Home
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="border-t border-neutral-200 pt-8">
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-6">
                Helpful Links
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {helpfulLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-start gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors text-left"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Icon name="arrow-right" size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                        {link.label}
                      </span>
                      <p className="text-sm text-neutral-500">{link.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-8 text-sm text-neutral-500">
              Need help?{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Contact support
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  );
}
