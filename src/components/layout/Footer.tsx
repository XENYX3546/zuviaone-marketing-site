import Link from 'next/link';
import { Container } from '@/components/ui';
import { siteConfig, navigation, industries, industrySlugs } from '@/lib/constants';

// Top industries for footer (most common service businesses)
const topIndustries = [
  'carpet-cleaners',
  'plumbers',
  'electricians',
  'hvac',
  'cleaning-services',
  'landscapers',
].map((slug) => ({
  label: industries[slug].namePlural,
  href: `/for/${slug}`,
}));

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container className="py-12 md:py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="font-semibold text-lg text-neutral-900">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm text-neutral-600 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Features */}
          <FooterSection title="Features" links={navigation.features} />

          {/* Industries */}
          <FooterSection
            title="Industries"
            links={topIndustries}
            showViewAll
            viewAllHref="/for"
            viewAllLabel="All industries"
          />

          {/* Company */}
          <FooterSection title="Company" links={[...navigation.main, { label: 'Pricing', href: '/pricing' }]} />

          {/* Legal */}
          <FooterSection title="Legal" links={navigation.legal} />
        </div>

        {/* Industry tags - crawlable links for all industries */}
        <div className="mt-10 pt-8 border-t border-neutral-200">
          <p className="text-xs font-medium text-neutral-500 mb-3">
            Software for service businesses:
          </p>
          <div className="flex flex-wrap gap-2">
            {industrySlugs.map((slug) => (
              <Link
                key={slug}
                href={`/for/${slug}`}
                className="text-xs text-neutral-500 hover:text-blue-600 transition-colors"
              >
                {industries[slug].namePlural}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <ContactInfo />
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterSection({
  title,
  links,
  showViewAll,
  viewAllHref,
  viewAllLabel,
}: {
  title: string;
  links: readonly { readonly label: string; readonly href: string }[] | { label: string; href: string }[];
  showViewAll?: boolean;
  viewAllHref?: string;
  viewAllLabel?: string;
}) {
  return (
    <div>
      <h3 className="font-semibold text-neutral-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
        {showViewAll && viewAllHref && (
          <li>
            <Link
              href={viewAllHref}
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors font-medium"
            >
              {viewAllLabel || 'View all'} →
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-neutral-600">
      <a
        href={`tel:${siteConfig.contact.phone}`}
        className="hover:text-neutral-900 transition-colors"
      >
        {siteConfig.contact.phone}
      </a>
      <span className="hidden sm:inline text-neutral-300">|</span>
      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="hover:text-neutral-900 transition-colors"
      >
        {siteConfig.contact.email}
      </a>
    </div>
  );
}
