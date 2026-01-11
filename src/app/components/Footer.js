'use client';

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900">
      <div className="container-width flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-4">
          {/* Footer Logo */}
          <img src="/logo.svg" alt="ML" className="h-8 w-auto opacity-80" />

          <div className="h-6 w-px bg-slate-800"></div>

          <div className="flex flex-col">
            <span className="font-bold text-slate-200 leading-none">Mohan Lal</span>
            <span className="text-xs text-slate-500 mt-1">Full Stack Engineer</span>
          </div>
        </div>

        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
