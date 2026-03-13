'use client';

const updates = [
  {
    title: 'C#/.NET Learning Journey',
    date: '2026',
    description:
      'Built console apps covering C# fundamentals, OOP, exception handling, collections, string operations, and parsing/type conversion.',
    repo: 'learning-dotnet',
    repoLabel: 'C#/.NET Practice',
  },
  {
    title: 'Python DSA Journey',
    date: '2026',
    description:
      'Practiced Big-O analysis, recursion, number problems, and algorithm optimization strategies with iterative, recursive, and dynamic programming approaches.',
    repo: 'python-dsa',
    repoLabel: 'Python DSA Practice',
  },
  {
    title: 'Python Learning Milestone',
    date: '2026',
    description:
      'Completed a structured Python path covering OOP, data structures, file handling, exceptions, regex, and event-driven programming.',
    repo: 'learning-python',
    repoLabel: 'Python Learning Repository',
  },
  {
    title: 'Current DSA Focus (Java)',
    date: '2026',
    description:
      'Daily LeetCode practice with a pattern-based plan: two pointers, sliding window, recursion, binary search, and hashing.',
    repo: 'leetcodepractice',
    repoLabel: 'Java DSA Repository',
  },
];

export default function Updates() {
  return (
    <section id="updates" className="section-spacing bg-slate-950 border-t border-slate-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Recent Updates</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A concise view of my latest learning milestones and the repositories where I document progress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {updates.map((item) => (
            <article key={item.title} className="card-base p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-200">{item.title}</h3>
                <span className="text-xs font-mono text-slate-500">{item.date}</span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">{item.description}</p>

              <div className="mt-auto">
                <a
                  href={`https://github.com/mhnuk2007/${item.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-indigo-400 transition-colors"
                >
                  {item.repoLabel} <span>-&gt;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
