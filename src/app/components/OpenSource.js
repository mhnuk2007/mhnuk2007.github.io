import React from 'react';

export default function OpenSource() {
    const contributions = [
        {
            title: 'FinSim (Simulator)',
            badge: 'Creator & Lead',
            badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
            description:
                'Creator and architect of an open-source distributed financial network simulator. Connects independent services over a versioned HTTP contract, enforces idempotency, models first-class UNKNOWN state machines with ADR 0001 reconciliation, and injects reproducible distributed faults.',
            tags: ['Java 21', 'Spring Modulith', 'PostgreSQL 17', 'Distributed Systems', 'Flyway', 'ArchUnit'],
            url: 'https://github.com/mhnuk2007/finsim',
        },
        {
            title: 'Eclipse JNoSQL',
            badge: 'Merged PRs #765, #768, #209, #764',
            badgeClass: 'text-brand-primary bg-brand-primary/10 border-brand-primary/20',
            description:
                'Investigated and resolved ServiceLoader TCCL discovery issues in reactive Quarkus applications (#765, #768), fixed Page.totalElements outside transaction lifecycle (#209, #210), and implemented asynchronous repository methods with CompletionStage (#764).',
            tags: ['Java', 'Jakarta EE', 'ServiceLoader', 'Quarkus', 'TCCL', 'Testing'],
            url: 'https://github.com/eclipse-jnosql/jnosql',
        },
        {
            title: 'Jakarta Data',
            badge: 'Merged PRs #1556, #1561',
            badgeClass: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
            description:
                'Contributed portable TCK test coverage verifying exceptional async CompletionStage completion on entity constraints (#1556), and transaction flush mode semantics for QueryOptions on @JakartaQuery (#1561) verified against Open Liberty.',
            tags: ['Jakarta Data', 'TCK', 'Open Liberty', 'Async', 'Transactions'],
            url: 'https://github.com/jakartaee/data',
        },
        {
            title: 'Jakarta Agentic AI & Spring Lens',
            badge: 'Merged PRs #59, #270',
            badgeClass: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
            description:
                'Introduced JSR 354 MonetaryAmount into Jakarta Agentic AI fraud detection models (#59), and implemented immutable BeanDefinitionSummary records with defensive copying and test coverage for Spring Lens (#270).',
            tags: ['Spring AI', 'Jakarta EE', 'JSR 354', 'Spring Boot', 'Domain Modeling'],
            url: 'https://github.com/jakartaee/agentic-ai',
        },
    ];

    return (
        <section id="opensource" className="section-spacing bg-slate-950 border-t border-slate-900">
            <div className="container-width">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold tracking-wider uppercase text-brand-primary">
                            Community & Architecture
                        </span>

                        <h2 className="text-3xl font-bold text-slate-100 mt-3 mb-4">
                            Open Source Contributions & Projects
                        </h2>

                        <p className="text-slate-400 leading-relaxed">
                            Building high-assurance distributed systems and contributing to the Java ecosystem through root-cause bug fixes, TCK development, concurrency isolation, and enterprise specifications.
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
                    {contributions.map((item) => (
                        <a
                            key={item.title}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-base p-8 group flex flex-col h-full hover:bg-slate-900/80 transition-colors"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold text-slate-200 group-hover:text-brand-primary transition-colors">
                                    {item.title}
                                </h3>
                                <span className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap border ${item.badgeClass}`}>
                                    {item.badge}
                                </span>
                            </div>

                            <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {item.tags.map((tag) => (
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
                                    View Repository & Contributions
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 002 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
