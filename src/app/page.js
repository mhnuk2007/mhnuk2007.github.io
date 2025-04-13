// app/page.js
'use client';

import Head from 'next/head'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="XxlM4WYjht7yWIOupK_FfJ-69vi7BhFQc8aaYk-kKyY" />
        <title>Your Portfolio</title>
      </Head>

      <div className="bg-[#0f172a] text-gray-100 min-h-screen font-sans leading-relaxed tracking-wide">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
