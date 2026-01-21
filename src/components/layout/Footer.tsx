import Link from 'next/link';
import { Container } from '@/components/ui';
import { siteConfig, navigation } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

          <FooterSection title="Product" links={navigation.features} />
          <FooterSection title="Company" links={navigation.main} />
          <FooterSection title="Legal" links={navigation.legal} />
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
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
}: {
  title: string;
  links: readonly { readonly label: string; readonly href: string }[];
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
