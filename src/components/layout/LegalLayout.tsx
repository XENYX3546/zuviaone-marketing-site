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
            <div className="legal-content max-w-4xl">
              {children}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
