'use client';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Backend Engineering',
            description: 'Building robust, scalable server-side applications.',
            skills: ['Java 21', 'Spring Boot 3', 'Microservices', 'Hibernate/JPA', 'PostgreSQL', 'Redis', 'Kafka'],
            icon: '⚙️'
        },
        {
            title: 'Frontend Development',
            description: 'Creating responsive, accessible user interfaces.',
            skills: ['Angular', 'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'RxJS'],
            icon: '⚛️'
        },
        {
            title: 'Cloud & DevOps',
            description: 'Automating deployment and managing infrastructure.',
            skills: ['AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Terraform', 'Linux'],
            icon: '☁️'
        },
        {
            title: 'AI & Data',
            description: 'Integrating intelligence into applications.',
            skills: ['LangChain', 'Spring AI', 'Vector Databases (pgvector)', 'RAG Pipelines', 'OpenAI API'],
            icon: '🤖'
        },
    ];

    return (
        <section id="skills" className="section-spacing bg-slate-950 relative">
            <div className="container-width relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-100 mb-4">Technical Expertise</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My stack is focused on the Java ecosystem for the backend and modern JavaScript frameworks for the frontend, deployed on cloud infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="card-base p-8 hover:bg-slate-900/80 group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-200 mb-2 flex items-center gap-2">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-slate-400">{category.description}</p>
                                </div>
                                <span className="text-2xl opacity-50 grayscale group-hover:grayscale-0 transition-all">{category.icon}</span>
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
