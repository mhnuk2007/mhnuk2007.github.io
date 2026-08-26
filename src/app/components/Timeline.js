'use client';

import ScrollReveal from './ScrollReveal';

const milestones = [
    {
        period: '2025',
        title: 'Focused on Java & Backend Development',
        description:
            'Committed to a Java-centered learning path, strengthening core Java, object-oriented programming, Spring Boot, databases, REST APIs, and backend development fundamentals.',
    },
    {
        period: '2025',
        title: 'Building Full-Stack Applications',
        description:
            'Expanded into full-stack development by combining Spring Boot services with modern frontend technologies including React, Next.js, TypeScript, and Tailwind CSS.',
    },
    {
        period: '2026',
        title: 'Data Structures & Algorithms',
        description:
            'Developed a structured problem-solving routine using LeetCode, with continued practice across dynamic programming, trees, graphs, sliding window, binary search, and other patterns.',
    },
    {
        period: '2026',
        title: 'Cloud, Containers & Infrastructure',
        description:
            'Deepened practical knowledge of Docker, Kubernetes, Terraform, AWS concepts, PostgreSQL, and local cloud environments while building and deploying backend-focused projects.',
    },
    {
        period: '2026',
        title: 'Jakarta EE & Enterprise Java',
        description:
            'Started a structured journey into Jakarta EE and enterprise Java technologies, exploring APIs, specifications, architecture, and the wider Java ecosystem.',
    },
    {
        period: '2026',
        title: 'Open Source Contributions',
        description:
            'Began contributing to Eclipse JNoSQL by investigating issues, creating reproducible tests, implementing fixes, and participating in technical discussions through pull requests.',
    },
    {
        period: 'Now',
        title: 'Continuing to Build',
        description:
            'Focused on becoming a stronger Java full-stack engineer through open source, system design, backend architecture, cloud-native development, and consistent hands-on practice.',
    },
];

export default function Timeline() {
    return (
        <section id="timeline" className="section-spacing bg-slate-950">
            <div className="container-width">
                <ScrollReveal>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-sm font-medium text-brand-primary mb-3">
                            LEARNING JOURNEY
                        </p>

                        <h2 className="text-3xl font-bold text-slate-100 mb-4">
                            My Journey So Far
                        </h2>

                        <p className="text-slate-400 leading-relaxed">
                            A practical, hands-on journey from learning Java fundamentals to
                            building full-stack applications and contributing to open-source
                            software.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <ScrollReveal
                                key={`${item.period}-${item.title}`}
                                animation="fade-up"
                                delay={Math.min(index * 80, 400)}
                            >
                                <div
                                    className={`relative flex flex-col md:flex-row ${
                                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                                >
                                    <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 md:-translate-x-1/2 flex items-center justify-center z-10">
                                        <div className="w-4 h-4 rounded-full bg-brand-primary ring-4 ring-slate-950 shadow-lg shadow-brand-primary/30" />
                                    </div>

                                    <div className="ml-14 md:ml-0 md:w-1/2 md:px-12">
                                        <div
                                            className={
                                                index % 2 === 0
                                                    ? 'md:text-left'
                                                    : 'md:text-right'
                                            }
                                        >
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono font-medium mb-3 bg-slate-900 border border-slate-800 text-brand-primary">
                        {item.period}
                      </span>

                                            <h3 className="text-xl font-bold text-slate-200 mb-3">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-slate-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}