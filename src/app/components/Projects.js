'use client';

import { useEffect, useMemo, useState } from 'react';

const GITHUB_USERNAME = 'mhnuk2007';
const PER_PAGE = 100;
const FEATURED_REPO_NAMES = [
  'leetcodepractice',
  'learning-java',
  'learning-dotnet',
  'python-dsa',
  'learning-python',
  'programming-with-python',
  'html-css-javascript-revision',
  'java-junit-practice',
  'bankingapp',
  'learning-angular',
  'user-management-backend',
  'user-management-frontend',
];

const formatNumber = (value) =>
  new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);

const formatDate = (value) => {
  if (!value) return 'N/A';
  return new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

const normalizeUrl = (value) => {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  return `https://${trimmed}`;
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('All');
  const [sort, setSort] = useState('updated');
  const [includeForks, setIncludeForks] = useState(true);

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

  const languageOptions = useMemo(() => {
    const unique = new Set();
    let hasOther = false;

    projects.forEach((project) => {
      if (project.language) {
        unique.add(project.language);
      } else {
        hasOther = true;
      }
    });

    const list = ['All', ...Array.from(unique).sort()];
    if (hasOther) list.push('Other');
    return list;
  }, [projects]);

  const stats = useMemo(() => {
    if (!projects.length) {
      return {
        totalRepos: 0,
        totalStars: 0,
        totalForks: 0,
        lastUpdated: null,
      };
    }

    const totalStars = projects.reduce((sum, project) => sum + project.stargazers_count, 0);
    const totalForks = projects.reduce((sum, project) => sum + project.forks_count, 0);
    const lastUpdated = projects.reduce((latest, project) => {
      if (!latest) return project.updated_at;
      return new Date(project.updated_at) > new Date(latest) ? project.updated_at : latest;
    }, null);

    return {
      totalRepos: projects.length,
      totalStars,
      totalForks,
      lastUpdated,
    };
  }, [projects]);

  const featuredProjects = useMemo(() => {
    if (!projects.length) return [];
    const byName = new Map(projects.map((project) => [project.name.toLowerCase(), project]));
    return FEATURED_REPO_NAMES.map((name) => byName.get(name.toLowerCase())).filter(Boolean);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    let filtered = projects.filter((project) => (includeForks ? true : !project.fork));

    if (normalizedQuery) {
      filtered = filtered.filter((project) => {
        const description = project.description || '';
        return (
          project.name.toLowerCase().includes(normalizedQuery) ||
          description.toLowerCase().includes(normalizedQuery)
        );
      });
    }

    if (language !== 'All') {
      filtered = filtered.filter((project) => {
        if (language === 'Other') return !project.language;
        return project.language === language;
      });
    }

    switch (sort) {
      case 'stars':
        return [...filtered].sort((a, b) => b.stargazers_count - a.stargazers_count);
      case 'name':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return [...filtered].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    }
  }, [projects, query, language, sort, includeForks]);

  return (
    <section id="projects" className="section-spacing bg-slate-950 border-t border-slate-900">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">All Repositories</h2>
            <p className="text-slate-400">
              Live snapshot of my public GitHub work, pulled directly from the GitHub API.
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
          <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-52 bg-slate-900 rounded-xl animate-pulse border border-slate-800" />
            ))}
          </div>
        ) : featuredProjects.length ? (
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">Featured Work</h3>
                <p className="text-slate-400 text-sm">
                  Recent repositories highlighted from my GitHub profile.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-base p-6 group flex flex-col h-full hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/5 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-slate-200 group-hover:text-brand-primary transition-colors">
                      {project.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-mono">
                      {formatDate(project.updated_at)}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                    {project.description || 'No description available.'}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-800/50">
                    <span>{project.language || 'Other'}</span>
                    <span>Stars {formatNumber(project.stargazers_count)}</span>
                    <span>Forks {formatNumber(project.forks_count)}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : null}

        <div className="card-base p-6 mb-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">Repositories</p>
              <p className="text-2xl font-semibold text-slate-100">{stats.totalRepos}</p>
            </div>
            <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">Total Stars</p>
              <p className="text-2xl font-semibold text-slate-100">{formatNumber(stats.totalStars)}</p>
            </div>
            <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">Total Forks</p>
              <p className="text-2xl font-semibold text-slate-100">{formatNumber(stats.totalForks)}</p>
            </div>
            <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">Last Updated</p>
              <p className="text-2xl font-semibold text-slate-100">{formatDate(stats.lastUpdated)}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <input
                type="search"
                placeholder="Search repositories"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full sm:w-64 bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
              />
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="w-full sm:w-44 bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
              >
                {languageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="w-full sm:w-44 bg-slate-900 border border-slate-800 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
              >
                <option value="updated">Recently Updated</option>
                <option value="stars">Most Stars</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeForks}
                  onChange={(event) => setIncludeForks(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-brand-primary focus:ring-brand-primary/40"
                />
                Include forks
              </label>
              <span>
                Showing {filteredProjects.length} of {projects.length} repositories
              </span>
            </div>
          </div>
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
        ) : filteredProjects.length === 0 ? (
          <div className="card-base p-6 text-slate-300">
            No repositories match your filters. Try clearing the search or selecting a different language.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const homepageUrl = normalizeUrl(project.homepage);
              return (
                <article
                  key={project.id}
                  className="card-base p-6 group flex flex-col h-full hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/5 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors text-slate-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">
                      Updated {formatDate(project.updated_at)}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-slate-200 mb-3 group-hover:text-brand-primary transition-colors"
                    >
                      {project.name}
                    </a>
                    {project.archived ? (
                      <span className="text-[10px] uppercase tracking-wider text-amber-300 border border-amber-400/30 px-2 py-1 rounded-full">
                        Archived
                      </span>
                    ) : null}
                  </div>

                  <p className="text-sm text-slate-400 mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {project.description || 'No description available for this project.'}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {project.language || 'Other'}
                    </span>
                    <span>Stars {formatNumber(project.stargazers_count)}</span>
                    <span>Forks {formatNumber(project.forks_count)}</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-400 group-hover:text-brand-primary transition-colors flex items-center gap-1"
                    >
                      Source
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    {homepageUrl ? (
                      <a
                        href={homepageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-slate-400 group-hover:text-brand-primary transition-colors"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="text-xs text-slate-500">No demo</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
