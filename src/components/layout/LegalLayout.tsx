import { type ReactNode } from 'react';
import { Container, Section } from '@/components/ui';
import { Header } from './Header';
import { Footer } from './Footer';

type LegalLayoutProps = {
  children: ReactNode;
  title: string;
  lastUpdated: string;
};

export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Section compact className="bg-neutral-50 border-b border-neutral-200">
          <Container>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900">{title}</h1>
            <p className="mt-2 text-neutral-600">Last updated: {lastUpdated}</p>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-neutral-600 prose-li:text-neutral-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
              {children}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
