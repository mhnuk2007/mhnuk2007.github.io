'use client';

import ScrollReveal from './ScrollReveal';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Backend Development',
            icon: '⚙️',
            color: '#10B981',
            skills: [
                { name: 'Java', level: 90 },
                { name: 'Spring Boot', level: 85 },
                { name: 'Spring AI', level: 70 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'MySQL', level: 80 },
                { name: 'pgvector', level: 65 },
                { name: 'REST APIs', level: 90 },
                { name: 'Microservices', level: 80 },
            ],
        },
        {
            title: 'Frontend Development',
            icon: '🎨',
            color: '#6366F1',
            skills: [
                { name: 'Angular', level: 80 },
                { name: 'HTML5', level: 90 },
                { name: 'CSS3', level: 85 },
                { name: 'JavaScript', level: 85 },
                { name: 'TypeScript', level: 80 },
                { name: 'Responsive Design', level: 85 },
            ],
        },
        {
            title: 'Cloud & DevOps',
            icon: '☁️',
            color: '#FF9900',
            skills: [
                { name: 'AWS', level: 75 },
                { name: 'Azure', level: 70 },
                { name: 'Docker', level: 80 },
                { name: 'Kubernetes', level: 65 },
                { name: 'Terraform', level: 60 },
                { name: 'CI/CD', level: 75 },
            ],
        },
        {
            title: 'AI & Emerging Tech',
            icon: '🤖',
            color: '#8B5CF6',
            skills: [
                { name: 'Embeddings', level: 70 },
                { name: 'Semantic Search', level: 70 },
                { name: 'Cosine Similarity', level: 65 },
                { name: 'Memory Advisors', level: 60 },
                { name: 'RAG Systems', level: 65 },
            ],
        },
    ];

    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="section-subtitle">
                        Technologies I work with to build scalable, intelligent applications
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <ScrollReveal
                            key={category.title}
                            animation="fade-up"
                            delay={categoryIndex * 150}
                        >
                            <div className="glass-card p-6 h-full card-hover">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                        style={{
                                            background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}10 100%)`,
                                            border: `1px solid ${category.color}40`,
                                        }}
                                    >
                                        {category.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-bold"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skill.name} className="group">
                                            <div className="flex justify-between items-center mb-1">
                                                <span
                                                    className="font-medium text-sm group-hover:text-white transition-colors"
                                                    style={{ color: 'var(--text-secondary)' }}
                                                >
                                                    {skill.name}
                                                </span>
                                                <span
                                                    className="text-xs"
                                                    style={{ color: 'var(--text-muted)' }}
                                                >
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div
                                                className="h-2 rounded-full overflow-hidden"
                                                style={{ background: 'var(--bg-tertiary)' }}
                                            >
                                                <div
                                                    className="h-full rounded-full transition-all duration-1000 ease-out"
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}80 100%)`,
                                                        boxShadow: `0 0 10px ${category.color}40`,
                                                        animationDelay: `${skillIndex * 100}ms`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Tech Stack Badges */}
                <ScrollReveal animation="fade-up" delay={600}>
                    <div className="mt-12 text-center">
                        <p
                            className="text-sm mb-6"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            Also experienced with
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Git', 'GitHub Actions', 'Maven', 'Gradle', 'JUnit', 'Mockito', 'Hibernate', 'JPA', 'Linux', 'Nginx', 'Redis'].map((tech) => (
                                <span key={tech} className="skill-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
