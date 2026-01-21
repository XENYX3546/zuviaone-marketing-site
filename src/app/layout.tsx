import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - The Everything App for Business`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'CRM',
    'field service management',
    'scheduling software',
    'invoicing',
    'business management',
    'SaaS',
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - The Everything App for Business`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - The Everything App for Business`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased text-neutral-900 bg-white">
        {children}
      </body>
    </html>
  );
}

function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
