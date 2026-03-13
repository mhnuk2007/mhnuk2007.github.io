'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-width relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sm font-medium text-brand-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Open to Collaboration
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-100">
              Full Stack Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Java, Cloud, and AI Systems
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am a self-taught full stack engineer in Karachi, Pakistan, specializing in Java,
              Spring Boot, and cloud-native architectures. I build secure backends, scalable
              microservices, and modern frontend experiences with Angular and React.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-brand-primary hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-all hover:bg-slate-900"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium">
              <span>Java + Spring</span>
              <span>AWS + Azure</span>
              <span>Angular + React</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              <div className="absolute inset-0 rounded-full border-2 border-slate-800 rotate-12 scale-105 transition-transform duration-700 group-hover:rotate-45"></div>
              <div className="absolute inset-0 rounded-full border-2 border-brand-primary/20 -rotate-6 scale-110 transition-transform duration-700 group-hover:-rotate-12"></div>

              <div className="relative w-full h-full rounded-2xl rotate-3 overflow-hidden shadow-2xl bg-slate-900 border border-slate-800 transition-transform duration-500 group-hover:rotate-0">
                <img
                  src="/myphoto.png"
                  alt="Mohan Lal"
                  className="w-full h-full object-cover grayscale-0 hover:grayscale-[0.2] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
