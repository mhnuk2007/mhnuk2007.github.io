'use client';

import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'java', label: 'Java' },
    { key: 'javascript', label: 'JavaScript' },
    { key: 'python', label: 'Python' },
    { key: 'spring', label: 'Spring Boot' },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/mhnuk2007/repos?sort=updated&per_page=30');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const filteredRepos = useMemo(() => {
    if (filter === 'all') return repos;

    return repos.filter(repo => {
      const language = (repo.language || '').toLowerCase();
      const name = repo.name.toLowerCase();
      const description = (repo.description || '').toLowerCase();

      if (filter === 'spring') {
        return name.includes('spring') || description.includes('spring') || description.includes('boot');
      }

      return language === filter;
    });
  }, [repos, filter]);

  const getLanguageColor = (language) => {
    const colors = {
      Java: '#b07219',
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      HTML: '#e34c26',
      CSS: '#563d7c',
      default: '#6366f1',
    };
    return colors[language] || colors.default;
  };

  const isSpecialProject = (repo) => {
    const name = repo.name.toLowerCase();
    const description = (repo.description || '').toLowerCase();
    return (
      name.includes('ai') ||
      name.includes('cloud') ||
      name.includes('spring') ||
      description.includes('ai') ||
      description.includes('cloud') ||
      description.includes('microservice')
    );
  };

  const SkeletonCard = () => (
    <div className="glass-card p-6">
      <div className="skeleton h-6 w-3/4 mb-4" />
      <div className="skeleton h-4 w-full mb-2" />
      <div className="skeleton h-4 w-2/3 mb-4" />
      <div className="flex gap-2 mb-4">
        <div className="skeleton h-6 w-16 rounded-full" />
        <div className="skeleton h-6 w-20 rounded-full" />
      </div>
      <div className="skeleton h-10 w-full rounded-lg" />
    </div>
  );

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore my latest work from GitHub - real projects showcasing my skills
          </p>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${filter === f.key
                    ? 'text-white'
                    : 'hover:bg-[var(--bg-tertiary)]'
                  }`}
                style={{
                  background: filter === f.key ? 'var(--accent-gradient)' : 'transparent',
                  color: filter === f.key ? 'white' : 'var(--text-secondary)',
                  border: filter === f.key ? 'none' : '1px solid var(--border-color)',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Skeleton Loading
            Array(6).fill(0).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          ) : filteredRepos.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p style={{ color: 'var(--text-muted)' }}>
                No projects found for this filter. Try another category!
              </p>
            </div>
          ) : (
            filteredRepos.slice(0, 12).map((repo, index) => (
              <ScrollReveal key={repo.id} animation="fade-up" delay={index * 50}>
                <div className="glass-card p-6 h-full flex flex-col card-hover group relative">
                  {/* Special Badge */}
                  {isSpecialProject(repo) && (
                    <div
                      className="absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: 'var(--accent-gradient)',
                        color: 'white',
                      }}
                    >
                      ⭐ Featured
                    </div>
                  )}

                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{ background: 'var(--bg-tertiary)' }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-3" style={{ color: 'var(--text-muted)' }}>
                      <span className="flex items-center gap-1 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1 text-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3
                    className="text-lg font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {repo.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm mb-4 flex-grow line-clamp-3"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {repo.description || 'No description available'}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && (
                      <span
                        className="tech-tag flex items-center gap-1"
                        style={{
                          background: `${getLanguageColor(repo.language)}20`,
                          color: getLanguageColor(repo.language),
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: getLanguageColor(repo.language) }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.topics?.slice(0, 2).map((topic) => (
                      <span key={topic} className="tech-tag">
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl font-medium text-sm text-center transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-color)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-primary)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-tertiary)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </ScrollReveal>
            ))
          )}
        </div>

        {/* View More Link */}
        {!loading && filteredRepos.length > 12 && (
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="text-center mt-10">
              <a
                href="https://github.com/mhnuk2007?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View All Projects on GitHub
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
