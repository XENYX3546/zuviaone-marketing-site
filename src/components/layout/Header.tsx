'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Button, Icon } from '@/components/ui';
import { siteConfig, navigation, ctaLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold text-lg text-neutral-900">
              {siteConfig.name}
            </span>
          </Link>

          <DesktopNav />

          <div className="hidden md:flex items-center gap-3">
            <Button href={ctaLinks.login} variant="ghost" size="sm">
              Log in
            </Button>
            <Button href={ctaLinks.signUp} size="sm">
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900"
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
          </button>
        </nav>
      </Container>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}

function Logo() {
  return (
    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">Z</span>
    </div>
  );
}

function DesktopNav() {
  return (
    <ul className="hidden md:flex items-center gap-1">
      {navigation.main.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={cn(
              'px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900',
              'transition-colors duration-200 rounded-md hover:bg-neutral-100'
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-neutral-200 bg-white"
        >
          <Container className="py-4">
            <ul className="space-y-1">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-3 py-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-neutral-200 flex flex-col gap-2">
              <Button href={ctaLinks.login} variant="outline" className="w-full">
                Log in
              </Button>
              <Button href={ctaLinks.signUp} className="w-full">
                Get Started
              </Button>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
