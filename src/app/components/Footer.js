'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900">
      <div className="container-width flex flex-col md:flex-row items-center justify-between gap-6">
        <a
          href="#"
          className="flex items-center gap-4 group"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <Image
            src="/logo.svg"
            alt="Mohan Lal"
            width={36}
            height={36}
            className="h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />

          <div className="h-7 w-px bg-slate-800" />

          <div>
            <p className="font-semibold text-slate-200">Mohan Lal</p>
            <p className="text-xs text-slate-400 mt-1">
              Java Full-Stack Developer
            </p>
          </div>
        </a>

        <p className="text-sm text-slate-400 text-center">
          © {new Date().getFullYear()} Mohan Lal. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
