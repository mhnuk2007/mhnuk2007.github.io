// app/page.js
'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-[#0f172a] text-gray-100 min-h-screen font-sans leading-relaxed tracking-wide">

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}
