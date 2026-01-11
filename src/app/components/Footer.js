'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#timeline', label: 'Journey' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      href: 'https://github.com/mhnuk2007',
      label: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      href: 'https://www.linkedin.com/in/mohan-lal-b79790126/',
      label: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  // Easter egg in console
  if (typeof window !== 'undefined') {
    console.log(
      '%c🚀 Hey there, fellow developer!',
      'font-size: 20px; font-weight: bold; color: #6366f1;'
    );
    console.log(
      '%cYou found the easter egg! 🎉\nI appreciate your curiosity. Let\'s connect: https://github.com/mhnuk2007',
      'font-size: 14px; color: #8b5cf6;'
    );
  }

  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block mb-4"
            >
              <img
                src="/logo.svg"
                alt="Mohan Lal - Full Stack Developer"
                className="h-10 w-auto"
              />
            </a>
            <p
              className="text-sm mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Full-Stack Developer building intelligent,
              scalable systems without boundaries.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg transition-all hover:bg-[var(--bg-tertiary)] hover:scale-110"
                  style={{ color: 'var(--text-muted)' }}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--accent-primary)]"
                    style={{ color: 'var(--text-muted)' }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Let&apos;s Build Together
            </h4>
            <p
              className="text-sm mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Open to new opportunities and collaborations.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <p
            className="text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            © {currentYear} Mohan Lal. Built with 💜 and lots of ☕
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full transition-all hover:scale-110"
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
            }}
            aria-label="Back to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: 'var(--text-secondary)' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
