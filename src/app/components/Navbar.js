'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const desktopNavLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#opensource', label: 'Open Source' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const mobileNavLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#opensource', label: 'Open Source' },
  { href: '#skills', label: 'Skills' },
  { href: '#leetcode', label: 'LeetCode' },
  { href: '#updates', label: 'Updates' },
  { href: '#timeline', label: 'Journey' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scrollspy
      const sections = ['projects', 'opensource', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
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
            <Image
              src="/logo.svg"
              alt="Mohan Lal"
              width={40}
              height={40}
              priority
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <span className="font-bold text-lg tracking-tight text-slate-100 border-l border-slate-700 pl-4">
            Mohan Lal
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {desktopNavLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-brand-primary font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}

          <a
            href="https://github.com/mhnuk2007"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-sm font-medium rounded-lg border border-slate-700 hover:border-brand-primary/40 transition-all flex items-center gap-2"
          >
            <span>GitHub</span>
            <svg
              className="w-3.5 h-3.5 text-slate-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
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
            {mobileNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-sm font-medium text-slate-300 hover:text-brand-primary transition-colors"
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
              className="mt-3 py-3 text-center rounded-lg bg-slate-900 border border-slate-800 text-sm font-medium text-slate-200 hover:text-brand-primary hover:border-brand-primary/30 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
