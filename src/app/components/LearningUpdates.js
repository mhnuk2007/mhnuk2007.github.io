'use client';

const GITHUB_USERNAME = 'mhnuk2007';
const LEETCODE_PROFILE_URL = '';

const learningUpdates = [
  {
    title: 'C#/.NET Learning Journey',
    description:
      'Built hands-on console apps covering C# fundamentals, OOP, exception handling, collections, string operations, and parsing/type conversion.',
    highlight: 'Expanded backend perspective by learning C# alongside Java and Python.',
    repoName: 'learning-dotnet',
    repoLabel: 'C#/.NET Practice',
  },
  {
    title: 'Python DSA Journey',
    description:
      'Practiced Big-O analysis, recursion, number problems, and algorithm optimization strategies.',
    highlight:
      'Compared iterative, recursive, memoization, and dynamic programming approaches to reduce TLE.',
    repoName: 'python-dsa',
    repoLabel: 'Python DSA Practice',
  },
  {
    title: 'Python Learning Milestone',
    description:
      'Completed a full Python path including OOP, data structures, file handling, exceptions, regex, and event-driven/polling programming.',
    highlight: 'Structured notes and practice exercises across the full learning path.',
    repoName: 'learning-python',
    repoLabel: 'Python Learning Repository',
  },
  {
    title: 'Current DSA Focus (Java)',
    description:
      'Practicing daily on LeetCode with a pattern-based plan: two pointers, sliding window, recursion, binary search, and hashing.',
    highlight:
      'Tracking complexity for every solution and pushing clean Java implementations to GitHub.',
    repoName: 'leetcodepractice',
    repoLabel: 'Java DSA Repository',
    leetcode: true,
  },
];

export default function LearningUpdates() {
  return (
    <section id="learning" className="section-spacing bg-slate-950 border-t border-slate-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Recent Learning Updates (2026)</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My latest learning focus areas and the repositories where I track daily practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {learningUpdates.map((update) => {
            const repoUrl = update.repoName
              ? `https://github.com/${GITHUB_USERNAME}/${update.repoName}`
              : null;
            return (
              <div key={update.title} className="card-base p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold text-slate-200 mb-3">{update.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{update.description}</p>
                <p className="text-sm text-slate-400 mb-6">{update.highlight}</p>

                <div className="mt-auto flex flex-wrap gap-3 text-xs text-slate-400">
                  {repoUrl ? (
                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 hover:border-brand-primary/60 hover:text-brand-primary transition-colors"
                    >
                      Repo: {update.repoLabel}
                    </a>
                  ) : null}
                  {update.leetcode && LEETCODE_PROFILE_URL ? (
                    <a
                      href={LEETCODE_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 hover:border-brand-primary/60 hover:text-brand-primary transition-colors"
                    >
                      LeetCode Profile
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
