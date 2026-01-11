'use client';

import { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';

const phrases = [
  'Full-Stack Developer',
  'Cloud-Native Architect',
  'AI Enthusiast',
  'Backend Specialist',
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentPhraseIndex, isDeleting]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, var(--bg-primary) 70%)',
        }}
      />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-72 h-72 rounded-full animate-float opacity-20"
          style={{
            background: 'var(--accent-gradient)',
            filter: 'blur(80px)',
            top: '10%',
            left: '10%',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full animate-float opacity-15"
          style={{
            background: 'linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent-tertiary) 100%)',
            filter: 'blur(100px)',
            bottom: '10%',
            right: '10%',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        {/* Avatar/Profile Area */}
        <div className="mb-8 animate-fade-in-down">
          <div
            className="w-40 h-40 mx-auto rounded-full p-1 animate-glow relative group"
            style={{
              background: 'var(--accent-gradient)',
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg-card)] relative z-10">
              <img
                src="/myphoto.png"
                alt="Mohan Lal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Pulsing ring effect */}
            <div
              className="absolute inset-0 rounded-full z-0 animate-ping opacity-30"
              style={{
                background: 'var(--accent-gradient)',
                animationDuration: '3s'
              }}
            />
          </div>
        </div>

        {/* Greeting */}
        <p
          className="text-lg md:text-xl mb-4 animate-fade-in-up"
          style={{ color: 'var(--accent-primary)' }}
        >
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          <span style={{ color: 'var(--text-primary)' }}>Mohan </span>
          <span className="gradient-text">Lal</span>
        </h1>

        {/* Typing Animation */}
        <div
          className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 h-10 animate-fade-in-up"
          style={{ color: 'var(--text-secondary)', animationDelay: '200ms' }}
        >
          <span>{displayText}</span>
          <span
            className="inline-block w-0.5 h-8 ml-1 animate-pulse"
            style={{
              backgroundColor: 'var(--accent-primary)',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </div>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ color: 'var(--text-muted)', animationDelay: '300ms' }}
        >
          Building intelligent, scalable systems without boundaries.
          <br className="hidden md:block" />
          Self-taught developer passionate about cloud-native architectures and AI.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <button
            onClick={() => scrollToSection('#projects')}
            className="btn-primary"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: '500ms' }}
        >
          <a
            href="https://github.com/mhnuk2007"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
            }}
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mohan-lal-b79790126/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
            }}
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-secondary)' }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ animationDelay: '1s' }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: 'var(--text-muted)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </header>
  );
}
