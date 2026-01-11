'use client';

import ScrollReveal from './ScrollReveal';

export default function About() {
  const highlights = [
    {
      icon: '🚀',
      label: 'Self-Taught',
      description: 'Driven by passion',
      color: 'from-blue-500/20 to-purple-500/20',
      border: 'blue-500/30'
    },
    {
      icon: '☁️',
      label: 'Cloud Native',
      description: 'AWS & Azure',
      color: 'from-orange-500/20 to-amber-500/20',
      border: 'orange-500/30'
    },
    {
      icon: '🤖',
      label: 'AI Integrator',
      description: 'RAG & Embeddings',
      color: 'from-emerald-500/20 to-teal-500/20',
      border: 'emerald-500/30'
    },
    {
      icon: '🔧',
      label: 'DevOps',
      description: 'CI/CD & Docker',
      color: 'from-pink-500/20 to-rose-500/20',
      border: 'pink-500/30'
    },
  ];

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container">
        <ScrollReveal>
          <h2 className="section-title text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Card - Spans 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal animation="slide-right" delay={100}>
              <div className="glass-card p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-3xl">👨‍💻</span>
                  <span style={{ color: 'var(--text-primary)' }}>The Story So Far</span>
                </h3>

                <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    I&apos;m a <strong className="text-[var(--accent-primary)]">Full-Stack Developer</strong> who doesn&apos;t just write code—I solve problems. My journey began with simple curiosity and evolved into an obsession with building systems that scale.
                  </p>
                  <p>
                    I specialize in the <strong className="text-white">Java ecosystem</strong> (Spring Boot) and modern frontends (<strong className="text-white">Angular/React</strong>), but my real passion lies in the <strong className="gradient-text">Cloud & AI</strong> frontier.
                  </p>
                  <p>
                    Whether it&apos;s architecting microservices on AWS or integrating semantic search into legacy apps, I build software that&apos;s ready for the future.
                  </p>
                </div>

                {/* Certification Badge */}
                <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF9900] to-[#FFCC00] flex items-center justify-center text-white text-xl shadow-lg">
                    ☁️
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">AWS Emerging Talent</h4>
                    <p className="text-xs text-[var(--text-muted)]">Recognized Cloud Practitioner</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Highlights Grid - Spans 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            {/* Bento Grid Styling */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <ScrollReveal key={item.label} animation="fade-up" delay={200 + index * 50}>
                  <div
                    className="p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col justify-center items-center text-center group"
                    style={{
                      background: `linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)`,
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ background: 'var(--bg-tertiary)' }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-[var(--text-primary)]">{item.label}</h4>
                    <p className="text-xs text-[var(--text-muted)]">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Fun Fact */}
            <ScrollReveal animation="fade-u;" delay={400}>
              <div
                className="p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
                  boxShadow: 'var(--shadow-glow)'
                }}
              >
                <div className="relative z-10 flex items-start gap-4">
                  <span className="text-3xl bg-white/20 p-2 rounded-lg backdrop-blur-sm">💡</span>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Philosophy</h4>
                    <p className="text-white/90 text-sm italic">
                      &quot;Every bug is a puzzle, and every solution is a lesson. Curiosity is the best compiler.&quot;
                    </p>
                  </div>
                </div>

                {/* Decoration */}
                <div className="absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12 select-none">
                  ⚡
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
