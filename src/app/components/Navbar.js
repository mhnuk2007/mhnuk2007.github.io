'use client';

export default function Navbar() {
  return (
    <nav className="bg-[#1e293b] px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-white">Mohan Lal</h1>
        <div className="space-x-6 text-sm sm:text-base">
          <a href="#about" className="hover:text-sky-400 transition">About</a>
          <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
          <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
          <a href="https://github.com/mhnuk2007" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">GitHub</a>
        </div>
      </div>
    </nav>
  );
}
