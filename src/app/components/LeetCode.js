import React from 'react';

export default function LeetCode() {
    return (
        <section id="leetcode" className="section-spacing bg-slate-950 border-t border-slate-900">
            <div className="container-width">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold tracking-wider uppercase text-brand-primary">
                            Engineering Discipline
                        </span>

                        <h2 className="text-3xl font-bold text-slate-100 mt-3 mb-4">
                            Problem Solving & DSA
                        </h2>

                        <p className="text-slate-400 leading-relaxed">
                            Consistent problem-solving through LeetCode demonstrates core competencies in data structures, algorithms, and logical breakdown. It reflects daily coding discipline and strong technical interview readiness.
                        </p>
                    </div>

                    <a
                        href="https://github.com/mhnuk2007/leetcodepractice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-primary font-medium hover:text-indigo-400 transition-colors whitespace-nowrap"
                    >
                        View DSA Repository
                        <span>-&gt;</span>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* LeetCode Intro Card */}
                    <article className="card-base p-8 hover:bg-slate-900/80 transition-colors">
                        <h3 className="text-xl font-bold text-slate-200 mb-4">
                            Algorithms & Patterns
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6">
                            My focus centers around Java-based implementations of core computer science patterns. Instead of brute-forcing solutions, I focus on optimal time and space complexity, utilizing advanced structural techniques.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {['Dynamic Programming', 'Graph Theory', 'Trees & Tries', 'Sliding Window', 'Two Pointers', 'Backtracking', 'Binary Search'].map((pattern) => (
                                <span
                                    key={pattern}
                                    className="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-medium rounded-md border border-slate-700 hover:border-brand-primary/40 cursor-default transition-colors"
                                >
                                    {pattern}
                                </span>
                            ))}
                        </div>
                    </article>

                    {/* LeetCode Repo Info Card */}
                    <a
                        href="https://github.com/mhnuk2007/leetcodepractice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-base p-8 group flex flex-col hover:bg-slate-900/80 hover:shadow-lg hover:shadow-brand-primary/5 transition-all"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-200 group-hover:text-brand-primary transition-colors">
                                LeetCode Practice Archive
                            </h3>
                            <div className="p-2 bg-slate-800 rounded group-hover:bg-brand-primary/10 transition-colors">
                                <svg
                                    className="w-5 h-5 text-slate-400 group-hover:text-brand-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                            A highly organized GitHub repository charting progression across hundreds of solved problems, heavily commented with alternative approaches, edge cases, and runtime analyses.
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                            <span className="text-xs font-mono text-slate-500 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                Java
                            </span>

                            <span className="text-xs font-medium text-brand-primary group-hover:text-indigo-400 transition-colors flex items-center gap-1">
                                View Solutions
                                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
