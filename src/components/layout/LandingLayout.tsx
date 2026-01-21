import { type ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LandingLayoutProps = {
  children: ReactNode;
};

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
