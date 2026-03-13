'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LearningUpdates from './components/LearningUpdates';
import Skills from './components/Skills';
import Mission from './components/Mission';
import Projects from './components/Projects';
import GitHubAnalytics from './components/GitHubAnalytics';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div
      className="min-h-screen font-sans leading-relaxed"
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <LearningUpdates />
        <Skills />
        <Mission />
        <Projects />
        <GitHubAnalytics />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
