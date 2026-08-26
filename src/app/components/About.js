'use client';

export default function About() {
  return (
      <section id="about" className="section-spacing bg-slate-950">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Main Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-100 mb-4">
                  About Me
                </h2>

                <div className="h-1 w-12 bg-brand-primary rounded-full" />
              </div>

              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  I am a self-taught{' '}
                  <strong className="text-slate-200">
                    Java Full-Stack Developer
                  </strong>{' '}
                  with a strong focus on backend engineering, application
                  architecture, and cloud-native development.
                </p>

                <p>
                  My primary stack is built around{' '}
                  <strong className="text-slate-200">
                    Java, Spring Boot, REST APIs, microservices, and relational
                    databases
                  </strong>
                  . On the frontend, I work with modern technologies such as
                  React, Next.js, TypeScript, and Angular to build complete
                  applications.
                </p>

                <p>
                  I am particularly interested in understanding how reliable
                  systems are designed—from API and database design to
                  asynchronous processing, distributed systems, containerization,
                  CI/CD, and cloud infrastructure.
                </p>

                <p>
                  I also actively explore{' '}
                  <strong className="text-brand-primary">
                    open-source software and AI engineering
                  </strong>
                  , including contributions to the Eclipse JNoSQL ecosystem,
                  Jakarta EE technologies, retrieval-augmented generation, and
                  vector databases.
                </p>
              </div>

              {/* Philosophy */}
              <div className="pt-8 border-t border-slate-800">
                <blockquote className="italic text-slate-500">
                  &quot;Good software is not only about making things work—it is
                  about making them understandable, reliable, and maintainable.&quot;
                </blockquote>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Primary Focus */}
              <div className="card-base p-6 hover:bg-slate-900 transition-colors">
                <div className="text-2xl font-bold text-slate-200 mb-2">
                  Java
                </div>

                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Primary Backend
                </div>
              </div>

              {/* Framework */}
              <div className="card-base p-6 hover:bg-slate-900 transition-colors">
                <div className="text-2xl font-bold text-brand-secondary mb-2">
                  Spring Boot
                </div>

                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  Application Framework
                </div>
              </div>

              {/* Open Source */}
              <div className="card-base p-6 col-span-1 sm:col-span-2 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-200 mb-2">
                    Open Source
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    Contributing to the Java ecosystem through open-source work,
                    including Eclipse JNoSQL and related Jakarta EE technologies.
                  </p>
                </div>
              </div>

              {/* Current Focus */}
              <div className="card-base p-6 col-span-1 sm:col-span-2">
                <h4 className="text-slate-300 font-semibold mb-3">
                  Current Focus
                </h4>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Java',
                    'Spring Boot',
                    'Microservices',
                    'System Design',
                    'Cloud Native',
                    'Open Source',
                    'AI Engineering',
                  ].map((tag) => (
                      <span
                          key={tag}
                          className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700"
                      >
                    {tag}
                  </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
  );
}