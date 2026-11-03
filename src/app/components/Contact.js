'use client';

const contactLinks = [
  {
    name: 'LinkedIn',
    description: 'Professional profile, engineering network, and career updates',
    href: 'https://www.linkedin.com/in/mhnuk2007/',
    type: 'linkedin',
  },
  {
    name: 'GitHub',
    description: 'Public repositories, open-source PRs, and code artifacts',
    href: 'https://github.com/mhnuk2007',
    type: 'github',
  },
  {
    name: 'LeetCode',
    description: 'Data structures, algorithms, and daily technical problem solving',
    href: 'https://leetcode.com/u/mhnuk2007/',
    type: 'leetcode',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-spacing bg-slate-950 border-t border-slate-900"
    >
      <div className="container-width max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-primary mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl font-bold text-slate-100 mb-4">
            Let&apos;s Connect
          </h2>

          <p className="text-slate-400 leading-relaxed">
            I&apos;m open to connecting with engineering teams, collaborating on
            open-source projects, discussing Java and backend systems architecture, and
            exploring full-stack software development opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base p-8 group flex flex-col items-center text-center hover:-translate-y-1 hover:border-brand-primary/40 transition-all duration-300"
            >
              <div className="w-14 h-14 mb-6 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-colors flex items-center justify-center">
                {link.type === 'linkedin' && (
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {link.type === 'github' && (
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                )}
                {link.type === 'leetcode' && (
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                  >
                    <title>LeetCode</title>
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.562 5.81 5.81 0 0 0 3.613-.935 5.768 5.768 0 0 0 1.488-1.523l3.524-4.237a1.378 1.378 0 0 0-1.066-2.261 1.36 1.36 0 0 0-.996.438l-3.473 4.175a3.03 3.03 0 0 1-2.288 1.049 3.14 3.14 0 0 1-2.28-1.049 3.12 3.12 0 0 1-.806-2.175c0-.829.309-1.603.873-2.175l3.854-4.126 5.176-5.545A1.375 1.375 0 0 0 13.483 0zm-2.88 14.49a1.376 1.376 0 0 0-1.375 1.375 1.376 1.376 0 0 0 1.375 1.375h11.018a1.376 1.376 0 0 0 1.375-1.375 1.376 1.376 0 0 0-1.375-1.375H10.603z" />
                  </svg>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-brand-primary transition-colors">
                {link.name}
              </h3>

              <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                {link.description}
              </p>

              <span className="text-sm font-medium text-brand-primary mt-auto">
                Visit Profile →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-400 mb-4 font-medium">
            Currently focused on
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Java',
              'Spring Boot',
              'Jakarta EE',
              'Microservices',
              'Cloud Native',
              'Open Source',
            ].map((technology) => (
              <span
                key={technology}
                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
