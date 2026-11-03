'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Skills from './components/Skills';
import LeetCode from './components/LeetCode';
import Updates from './components/Updates';
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
        <Projects />
        <OpenSource />
        <Skills />
        <LeetCode />
        <Updates />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
