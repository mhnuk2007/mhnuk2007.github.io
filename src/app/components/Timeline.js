'use client';

import ScrollReveal from './ScrollReveal';

export default function Timeline() {
    const milestones = [
        {
            year: '2023',
            title: 'AWS Emerging Talent Community',
            description: 'Recognized as a member of the AWS Emerging Talent Community, marking my commitment to cloud-native development.',
            icon: '☁️',
        },
        {
            year: '2023',
            title: 'Exploring AI & Semantic Search',
            description: 'Deep-dived into embeddings, vector databases (pgvector), and building RAG systems with Spring AI.',
            icon: '🤖',
        },
        {
            year: '2022',
            title: 'Microservices Architecture',
            description: 'Mastered building distributed systems with Spring Boot, Docker, and Kubernetes. Deployed first production microservices.',
            icon: '🔧',
        },
        {
            year: '2022',
            title: 'Cloud Journey Begins',
            description: 'Started learning AWS and Azure cloud services. Built first serverless applications and embraced Infrastructure as Code.',
            icon: '🚀',
        },
        {
            year: '2021',
            title: 'Full-Stack Development',
            description: 'Expanded skills to frontend development with Angular. Built complete end-to-end applications.',
            icon: '🎨',
        },
        {
            year: '2020',
            title: 'Backend Development Focus',
            description: 'Deep expertise in Java and Spring Boot. Built RESTful APIs, worked with databases, and understood enterprise patterns.',
            icon: '⚙️',
        },
        {
            year: '2019',
            title: 'The Beginning',
            description: 'Started my self-taught programming journey with Java. Wrote my first lines of code and fell in love with problem-solving.',
            icon: '💡',
        },
    ];

    return (
        <section id="timeline" className="section-spacing bg-slate-950">
            <div className="container-width">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold text-slate-100 text-center mb-16">
                        My Journey
                    </h2>
                </ScrollReveal>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {milestones.map((item, index) => (
                            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                                <div className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-[20px] md:left-1/2 w-10 h-10 md:-translate-x-1/2 flex items-center justify-center z-10">
                                        <div className="w-4 h-4 rounded-full bg-brand-primary ring-4 ring-slate-950 shadow-lg shadow-brand-primary/50" />
                                    </div>

                                    {/* Content Card */}
                                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                                        <div className={`group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold mb-3 bg-slate-900 border border-slate-800 text-brand-primary">
                                                {item.year}
                                            </span>

                                            <h3 className="text-xl font-bold mb-2 text-slate-200 group-hover:text-brand-primary transition-colors">
                                                {item.title}
                                            </h3>

                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Spacer/Icon (Optional Visual Balance) */}
                                    <div className="hidden md:flex md:w-1/2 items-center justify-center opacity-0"></div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
