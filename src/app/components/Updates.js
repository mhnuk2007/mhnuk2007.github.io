'use client';

const updates = [
  {
    title: 'Eclipse JNoSQL Open Source',
    date: '2026',
    description:
        'Contributing to Eclipse JNoSQL by investigating issues, improving compatibility, adding regression tests, and working on API and repository improvements within the Java ecosystem.',
    repo: 'jnosql',
    repoLabel: 'JNoSQL Repository',
  },
  {
    title: 'Jakarta EE Learning Journey',
    date: '2026',
    description:
        'Deepening my understanding of Jakarta EE, enterprise Java applications, specifications, APIs, dependency injection, persistence, and modern enterprise application architecture.',
    repo: 'learning-jakarta-ee-11',
    repoLabel: 'Jakarta EE Learning',
  },
  {
    title: 'Java DSA Practice',
    date: '2026',
    description:
        'Maintaining a structured problem-solving practice focused on algorithms, data structures, dynamic programming, trees, graphs, sliding window, binary search, and other core patterns.',
    repo: 'leetcodepractice',
    repoLabel: 'Java DSA Repository',
  },
  {
    title: 'Cloud-Native Development',
    date: '2026',
    description:
        'Building and experimenting with containerized applications and cloud infrastructure using Docker, Kubernetes, Terraform, AWS, and CI/CD workflows.',
    repo: 'jobscheduler',
    repoLabel: 'Cloud-Native Project',
  },
];

export default function Updates() {
  return (
      <section
          id="updates"
          className="section-spacing bg-slate-950 border-t border-slate-900"
      >
        <div className="container-width">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              Recent Updates
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              A snapshot of what I am currently learning, building, and
              contributing to across the Java and cloud-native ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {updates.map((item) => (
                <article
                    key={item.title}
                    className="card-base p-8 flex flex-col h-full hover:bg-slate-900/80 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-slate-200">
                      {item.title}
                    </h3>

                    <span className="text-xs font-mono text-slate-500 shrink-0">
                  {item.date}
                </span>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="mt-auto">
                    <a
                        href={`https://github.com/mhnuk2007/${item.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-indigo-400 transition-colors"
                    >
                      {item.repoLabel}
                      <span>-&gt;</span>
                    </a>
                  </div>
                </article>
            ))}
          </div>

        </div>
      </section>
  );
}