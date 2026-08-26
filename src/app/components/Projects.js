'use client';

import { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'mhnuk2007';
const PER_PAGE = 100;

const FEATURED_PROJECTS = [
  {
    owner: 'mhnuk2007',
    repo: 'oerms',
    title: 'Online Exam & Result Management System',
    category: 'Flagship Project',
    featuredDescription:
        'A full-featured microservices platform for managing the complete online examination lifecycle, from user registration and question management to exam attempts and results.',
    technologies: ['Java', 'Spring Boot', 'Next.js', 'Microservices'],
  },
  {
    owner: 'mhnuk2007',
    repo: 'bankingapp',
    title: 'Banking Application',
    category: 'Full-Stack Application',
    featuredDescription:
        'A modern full-stack banking application featuring JWT authentication, secure account management, transactions, and a modern web interface.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'JWT'],
  },
  {
    owner: 'mhnuk2007',
    repo: 'leetcodepractice',
    title: 'LeetCode Practice',
    category: 'DSA & Problem Solving',
    featuredDescription:
        'A long-term Java Data Structures and Algorithms repository containing hundreds of solved LeetCode problems organized by topics and problem-solving patterns.',
    technologies: ['Java', 'DSA', 'Algorithms', 'Problem Solving'],
  },
  {
    owner: 'mhnuk2007',
    repo: 'jobscheduler',
    title: 'Distributed Job Scheduler',
    category: 'Distributed Systems',
    featuredDescription:
        'A distributed job scheduling system designed to support reliable and exactly-once job execution across worker replicas.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Distributed Systems'],
  },
  {
    owner: 'mhnuk2007',
    repo: 'quizappmicroservices',
    title: 'QuizApp Microservices',
    category: 'Microservices',
    featuredDescription:
        'A microservices-based quiz platform built with Spring Boot, service discovery, authentication, and independently structured services.',
    technologies: ['Java', 'Spring Boot', 'Eureka', 'JWT'],
  },
  {
    owner: 'mhnuk2007',
    repo: 'task-manager-api',
    title: 'Task Manager API',
    category: 'Backend Application',
    featuredDescription:
        'A Trello-inspired task management backend with JWT authentication, boards, tasks, and role-based user management.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT'],
  },
  {
    owner: 'eclipse-jnosql',
    repo: 'jnosql',
    title: 'Eclipse JNoSQL Contributions',
    category: 'Open Source',
    featuredDescription:
        'Open-source contributions to Eclipse JNoSQL, including investigating issues, implementing fixes, writing regression tests, and contributing through pull requests.',
    technologies: ['Java', 'Jakarta EE', 'NoSQL', 'Open Source'],
  },
  {
    owner: 'jakartaee',
    repo: 'nosql',
    title: 'Jakarta NoSQL Contributions',
    category: 'Open Source',
    featuredDescription:
        'Contributions and participation in the Jakarta EE ecosystem, working with enterprise Java specifications and open-source projects.',
    technologies: ['Java', 'Jakarta EE', 'Specifications', 'Open Source'],
  },
  {
    owner: 'mhnuk2007',
    repo: 'terraform-aws-practice',
    title: 'Terraform AWS Practice',
    category: 'Cloud & DevOps',
    featuredDescription:
        'Hands-on infrastructure-as-code project for provisioning AWS-style infrastructure using Terraform, Docker, and LocalStack.',
    technologies: ['Terraform', 'AWS', 'Docker', 'LocalStack'],
  },
  {
    owner: 'mhnuk2007',
    repo: 'student-app',
    title: 'Student Application',
    category: 'Docker & Deployment',
    featuredDescription:
        'A multi-container application demonstrating containerized application development and service deployment using Docker.',
    technologies: ['Java', 'Spring Boot', 'Docker', 'Containers'],
  },
];

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
        const projectRequests = FEATURED_PROJECTS.map(
            async (featuredProject) => {
              const res = await fetch(
                  `https://api.github.com/repos/${featuredProject.owner}/${featuredProject.repo}`,
                  {
                    signal: controller.signal,
                  }
              );

              if (!res.ok) {
                throw new Error(
                    `Unable to load ${featuredProject.owner}/${featuredProject.repo}`
                );
              }

              const repository = await res.json();

              return {
                ...repository,
                ...featuredProject,
              };
            }
        );

        const featuredRepositories = await Promise.all(projectRequests);

        if (isActive) {
          setProjects(featuredRepositories);
        }
      } catch (error) {
        if (error.name !== 'AbortError' && isActive) {
          console.error('Error loading projects', error);
          setErrorMessage(
              'Unable to load projects right now. Please try again later.'
          );
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
      <section
          id="projects"
          className="section-spacing bg-slate-950 border-t border-slate-900"
      >
        <div className="container-width">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-wider uppercase text-brand-primary">
              Featured Work
            </span>

              <h2 className="text-3xl font-bold text-slate-100 mt-3 mb-4">
                Projects & Open Source
              </h2>

              <p className="text-slate-400 leading-relaxed">
                A selection of my major projects, long-term engineering work,
                algorithm practice, cloud infrastructure projects, and open-source
                contributions.
              </p>
            </div>

            <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary font-medium hover:text-indigo-400 transition-colors whitespace-nowrap"
            >
              View All Repositories
              <span>-&gt;</span>
            </a>
          </div>

          {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={index}
                        className="h-80 bg-slate-900 rounded-xl animate-pulse border border-slate-800"
                    />
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
                        key={`${project.owner}-${project.repo}`}
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-base p-6 group flex flex-col h-full hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/5 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="p-2.5 bg-slate-800 rounded-lg group-hover:bg-brand-primary/10 group-hover:text-brand-primary transition-colors text-slate-400">
                          <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                          >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                            />
                          </svg>
                        </div>

                        <span className="text-xs text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-200 mb-3 group-hover:text-brand-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-400 mb-5 flex-grow leading-relaxed">
                        {project.featuredDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-2 py-1 rounded-md"
                            >
                      {technology}
                    </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {project.language || 'Code'}
                  </span>

                        <span className="text-xs font-medium text-slate-400 group-hover:text-brand-primary transition-colors flex items-center gap-1">
                    View Source
                    <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 002 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                      </div>
                    </a>
                ))}
              </div>
          )}

          {!loading && !errorMessage && (
              <div className="mt-10 text-center">
                <p className="text-sm text-slate-500">
                  These are selected projects from my work and open-source
                  contributions. More repositories are available on GitHub.
                </p>
              </div>
          )}
        </div>
      </section>
  );
}