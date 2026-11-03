import React from 'react';

export default function OpenSource() {
    return (
        <section id="opensource" className="section-spacing bg-slate-950 border-t border-slate-900">
            <div className="container-width">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold tracking-wider uppercase text-brand-primary">
                            Community Contributions
                        </span>

                        <h2 className="text-3xl font-bold text-slate-100 mt-3 mb-4">
                            Open Source Contributions
                        </h2>

                        <p className="text-slate-400 leading-relaxed">
                            Contributing to the Java ecosystem through bug fixes, issue investigation, testing, and API improvements. My core focus has been within enterprise specifications and frameworks.
                        </p>
                    </div>

                    <a
                        href="https://github.com/mhnuk2007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand-primary font-medium hover:text-indigo-400 transition-colors whitespace-nowrap"
                    >
                        View GitHub Profile
                        <span>-&gt;</span>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Eclipse JNoSQL */}
                    <a
                        href="https://github.com/eclipse-jnosql/jnosql"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-base p-8 group flex flex-col h-full hover:bg-slate-900/80 transition-colors"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-200 group-hover:text-brand-primary transition-colors">
                                Eclipse JNoSQL
                            </h3>
                            <span className="text-xs text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap border border-brand-primary/20">
                                Open Source
                            </span>
                        </div>

                        <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                            Open-source contributions to Eclipse JNoSQL, including investigating issues, implementing fixes, writing reproducible regression tests, and actively communicating fixes via pull requests. Experience primarily relates to the underlying APIs and storage structures.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Java', 'Jakarta EE', 'Testing', 'NoSQL'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded border border-slate-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                            <span className="text-xs font-medium text-slate-400 group-hover:text-brand-primary flex items-center gap-1 transition-colors">
                                View Original Source
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 002 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                        </div>
                    </a>

                    {/* Jakarta EE */}
                    <a
                        href="https://github.com/jakartaee/nosql"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-base p-8 group flex flex-col h-full hover:bg-slate-900/80 transition-colors"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-200 group-hover:text-brand-primary transition-colors">
                                Jakarta NoSQL
                            </h3>
                            <span className="text-xs text-brand-primary bg-brand-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap border border-brand-primary/20">
                                Open Source
                            </span>
                        </div>

                        <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                            Engagement with the overall Jakarta EE ecosystem, maintaining continuous working knowledge of Java enterprise specifications. Working closely with enterprise API structures and Java standards evolution.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Java', 'API Design', 'Jakarta EE', 'ServiceLoader'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded border border-slate-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                            <span className="text-xs font-medium text-slate-400 group-hover:text-brand-primary flex items-center gap-1 transition-colors">
                                View Original Source
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 002 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
