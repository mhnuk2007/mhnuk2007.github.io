'use client';

import { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'mhnuk2007';
const PER_PAGE = 100;

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isActive = true;
    const controller = new AbortController();

    async function fetchProjects() {
      setLoading(true);
      setErrorMessage('');

      try {
        const allProjects = [];
        let page = 1;

        while (true) {
          const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=${PER_PAGE}&page=${page}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error('GitHub API request failed');
          }

          const batch = await res.json();
          allProjects.push(...batch);

          if (batch.length < PER_PAGE) break;
          page += 1;
        }

        if (isActive) {
          setProjects(allProjects);
        }
      } catch (error) {
        if (error.name !== 'AbortError' && isActive) {
          console.error('Error loading projects', error);
          setErrorMessage('Unable to load repositories right now. Please try again later.');
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchProjects();
    return () => {
      isActive = false;
      controller.abort();
    };
  }, []);

  return (
    <section id="projects" className="section-spacing bg-slate-950 border-t border-slate-900">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Projects</h2>
            <p className="text-slate-400">
              A live snapshot of my public GitHub repositories. Browse the full list below.
            </p>
          </div>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-primary font-medium hover:text-indigo-400 transition-colors"
          >
            View GitHub Profile <span>-&gt;</span>
          </a>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-slate-900 rounded-xl animate-pulse border border-slate-800" />
            ))}
          </div>
        ) : errorMessage ? (
          <div className="card-base p-6 border-rose-500/40 text-rose-200">
            {errorMessage}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-base p-6 group flex flex-col h-full hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/5 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors text-slate-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    {new Date(project.updated_at).getFullYear()}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-200 mb-3 group-hover:text-brand-primary transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-slate-400 mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {project.description || 'No description available for this project.'}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {project.language || 'Code'}
                  </span>

                  <span className="text-xs font-medium text-slate-400 group-hover:text-brand-primary transition-colors flex items-center gap-1">
                    Source
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
