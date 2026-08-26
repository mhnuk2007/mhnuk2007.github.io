'use client';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Backend Engineering',
            description:
                'Designing reliable APIs, services, and backend systems with the Java ecosystem.',
            skills: [
                'Java',
                'Spring Boot',
                'Spring Framework',
                'REST APIs',
                'Microservices',
                'JPA / Hibernate',
                'Maven',
                'PostgreSQL',
                'MySQL',
                'Redis',
                'Kafka',
            ],
        },
        {
            title: 'Frontend Development',
            description:
                'Building responsive and maintainable web applications with modern JavaScript technologies.',
            skills: [
                'React',
                'Next.js',
                'TypeScript',
                'JavaScript',
                'Angular',
                'Tailwind CSS',
                'HTML',
                'CSS',
                'RxJS',
            ],
        },
        {
            title: 'Cloud & DevOps',
            description:
                'Containerizing applications, automating infrastructure, and working with cloud-native environments.',
            skills: [
                'AWS',
                'Docker',
                'Kubernetes',
                'Terraform',
                'GitHub Actions',
                'CI/CD',
                'Linux',
                'LocalStack',
            ],
        },
        {
            title: 'AI & Data',
            description:
                'Exploring AI-powered applications and connecting LLMs with structured and vector-based data.',
            skills: [
                'Spring AI',
                'RAG',
                'Vector Databases',
                'pgvector',
                'OpenAI API',
                'LangChain',
                'Embeddings',
                'AI Integration',
            ],
        },
        {
            title: 'Engineering & Architecture',
            description:
                'Applying software engineering principles to build maintainable and scalable systems.',
            skills: [
                'System Design',
                'Object-Oriented Design',
                'Design Patterns',
                'Data Structures',
                'Algorithms',
                'Distributed Systems',
                'API Design',
                'Git',
            ],
        },
        {
            title: 'Java Ecosystem & Open Source',
            description:
                'Learning and contributing to modern enterprise Java and open-source projects.',
            skills: [
                'Jakarta EE',
                'Eclipse JNoSQL',
                'Enterprise Java',
                'Open Source',
                'ServiceLoader',
                'SPI',
                'Maven',
                'JUnit',
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="section-spacing bg-slate-950 relative"
        >
            <div className="container-width relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-100 mb-4">
                        Technical Expertise
                    </h2>

                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My primary focus is the Java ecosystem, complemented by modern
                        frontend development, cloud-native infrastructure, DevOps, and
                        AI-powered application development.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="card-base p-8 hover:bg-slate-900/80 group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-200 mb-2">
                                        {category.title}
                                    </h3>

                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-md border border-slate-700 transition-colors cursor-default"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}