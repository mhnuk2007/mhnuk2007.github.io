'use client';

const offerings = [
  {
    title: 'Backend Engineering',
    description: 'Building scalable, secure systems.',
    bullets: [
      'RESTful API design with clean documentation',
      'Microservices architecture with event-driven resilience',
      'Spring ecosystem mastery (Boot, Security, Data, AI)',
      'Database optimization: tuning, indexing, query planning',
      'AI integration with embeddings, vector search, and RAG',
      'Authentication and security with OAuth2 and JWT',
    ],
    technologies: ['Java', 'Spring', 'Spring Boot', 'Spring Security', 'Microservices'],
  },
  {
    title: 'Frontend Development',
    description: 'Crafting modern, responsive experiences.',
    bullets: [
      'Component architecture that is modular and testable',
      'State management with RxJS, Redux, and NgRx patterns',
      'Responsive design with mobile-first accessibility',
      'TypeScript-first development for reliability',
      'Performance optimization with lazy loading and code splitting',
      'Modern frameworks: Angular, React, Next.js',
    ],
    technologies: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Deploying at scale with confidence.',
    bullets: [
      'Multi-cloud expertise across AWS and Azure',
      'Container orchestration with Kubernetes',
      'Infrastructure as Code with Terraform',
      'CI/CD pipelines for automated testing and deployment',
      'Monitoring and logging with observability-first design',
      'Cost optimization with efficient resource utilization',
    ],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'Data & AI',
    description: 'Making data intelligent and searchable.',
    bullets: [
      'Relational databases: PostgreSQL and MySQL',
      'Vector databases with pgvector for semantic search',
      'Spring AI framework implementation',
      'Embedding models for text-to-vector workflows',
      'Semantic search with cosine similarity and RAG patterns',
      'Data modeling and normalization strategies',
    ],
    technologies: ['PostgreSQL', 'MySQL', 'pgvector', 'Spring AI', 'Embeddings'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-spacing bg-slate-950">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">What I Bring to the Table</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A clear breakdown of how I build backend systems, craft interfaces, and deploy to
            production-grade infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {offerings.map((category) => (
            <div key={category.title} className="card-base p-8 flex flex-col h-full">
              <div className="mb-5">
                <h3 className="text-xl font-bold text-slate-200 mb-2">{category.title}</h3>
                <p className="text-sm text-slate-400">{category.description}</p>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 mb-6">
                {category.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-auto">
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
