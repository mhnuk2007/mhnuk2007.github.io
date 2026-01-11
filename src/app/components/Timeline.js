'use client';

import ScrollReveal from './ScrollReveal';

export default function Timeline() {
    const milestones = [
        {
            year: '2023',
            title: 'AWS Emerging Talent Community',
            description: 'Recognized as a member of the AWS Emerging Talent Community, marking my commitment to cloud-native development.',
            icon: '☁️',
            type: 'achievement',
        },
        {
            year: '2023',
            title: 'Exploring AI & Semantic Search',
            description: 'Deep-dived into embeddings, vector databases (pgvector), and building RAG systems with Spring AI.',
            icon: '🤖',
            type: 'learning',
        },
        {
            year: '2022',
            title: 'Microservices Architecture',
            description: 'Mastered building distributed systems with Spring Boot, Docker, and Kubernetes. Deployed first production microservices.',
            icon: '🔧',
            type: 'project',
        },
        {
            year: '2022',
            title: 'Cloud Journey Begins',
            description: 'Started learning AWS and Azure cloud services. Built first serverless applications and embraced Infrastructure as Code.',
            icon: '🚀',
            type: 'learning',
        },
        {
            year: '2021',
            title: 'Full-Stack Development',
            description: 'Expanded skills to frontend development with Angular. Built complete end-to-end applications.',
            icon: '🎨',
            type: 'learning',
        },
        {
            year: '2020',
            title: 'Backend Development Focus',
            description: 'Deep expertise in Java and Spring Boot. Built RESTful APIs, worked with databases, and understood enterprise patterns.',
            icon: '⚙️',
            type: 'project',
        },
        {
            year: '2019',
            title: 'The Beginning',
            description: 'Started my self-taught programming journey with Java. Wrote my first lines of code and fell in love with problem-solving.',
            icon: '💡',
            type: 'milestone',
        },
    ];

    return (
        <section id="timeline" className="section relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
            <div className="container px-4">
                <ScrollReveal>
                    <h2 className="section-title text-center mb-16">
                        My <span className="gradient-text">Journey</span>
                    </h2>
                </ScrollReveal>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-1 rounded-full md:-translate-x-1/2"
                        style={{
                            background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent)'
                        }}
                    />

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                                <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-[20px] md:left-1/2 w-10 h-10 md:-translate-x-1/2 flex items-center justify-center z-10">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center border-4 border-[var(--bg-primary)] shadow-[0_0_20px_rgba(99,102,241,0.5)] transform transition-transform hover:scale-110"
                                            style={{ background: 'var(--bg-card)' }}
                                        >
                                            <span className="text-sm">{item.icon}</span>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                                        <div
                                            className={`glass-card p-6 relative group transition-all duration-300 hover:-translate-y-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                                        >
                                            {/* Date Badge */}
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] bg-[var(--accent-primary)]/10`}
                                            >
                                                {item.year}
                                            </span>

                                            <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                                                {item.title}
                                            </h3>

                                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                                {item.description}
                                            </p>

                                            {/* Glow effect on hover */}
                                            <div
                                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                style={{
                                                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.15)'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Empty half for alignment */}
                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Start Marker */}
                    <div className="relative flex justify-center mt-12">
                        <div
                            className="w-4 h-4 rounded-full bg-[var(--text-muted)] opacity-50 relative left-[20px] md:left-0 md:-translate-x-1/2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
