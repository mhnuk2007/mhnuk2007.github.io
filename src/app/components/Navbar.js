'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#updates', label: 'Updates' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
      <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled
                  ? 'glass-nav py-3'
                  : 'bg-transparent py-5'
          }`}
      >
        <div className="container-width flex items-center justify-between">
          {/* Brand */}
          <a
              href="#"
              className="flex items-center gap-3 group"
              onClick={(event) => {
                event.preventDefault();

                setIsMobileMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
          >
            <div className="h-10 flex items-center">
              <img
                  src="/logo.svg"
                  alt="Mohan Lal"
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <span className="font-bold text-lg tracking-tight text-slate-100 border-l border-slate-700 pl-4">
            Mohan Lal
          </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-slate-400 hover:text-brand-primary transition-colors"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                >
                  {link.label}
                </a>
            ))}

            <a
                href="https://github.com/mhnuk2007"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-sm font-medium rounded-lg border border-slate-700 hover:border-brand-primary/40 transition-all"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Button */}
          <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
          >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                  />
              ) : (
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                  />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-xl">
              <div className="container-width py-5 flex flex-col">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="py-3 text-sm font-medium text-slate-400 hover:text-brand-primary transition-colors"
                        onClick={(event) => {
                          event.preventDefault();
                          scrollToSection(link.href);
                        }}
                    >
                      {link.label}
                    </a>
                ))}

                <a
                    href="https://github.com/mhnuk2007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 py-3 text-center rounded-lg bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 hover:text-brand-primary hover:border-brand-primary/30 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                  View GitHub
                </a>
              </div>
            </div>
        )}
      </nav>
  );
}