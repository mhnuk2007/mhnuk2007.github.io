'use client';

import ScrollReveal from './ScrollReveal';

export default function Timeline() {
  const milestones = [
    {
      year: '2026',
      title: 'Learning Updates + DSA Focus',
      description:
        'Deepened C#/.NET fundamentals, advanced Python DSA practice, and continued daily Java DSA routines with pattern-based problem solving.',
    },
    {
      year: '2023',
      title: 'AWS Emerging Talent Community',
      description:
        'Recognized as a member of the AWS Emerging Talent Community, reinforcing my cloud-native focus.',
    },
    {
      year: '2022',
      title: 'Microservices Architecture',
      description:
        'Mastered distributed systems with Spring Boot, Docker, and Kubernetes. Deployed production microservices.',
    },
    {
      year: '2021',
      title: 'Full-Stack Development',
      description:
        'Expanded into frontend development with Angular and built complete end-to-end applications.',
    },
    {
      year: '2020',
      title: 'Backend Development Focus',
      description:
        'Built deep expertise in Java and Spring Boot, delivering RESTful APIs and enterprise-ready systems.',
    },
    {
      year: '2019',
      title: 'The Beginning',
      description:
        'Started my self-taught programming journey and committed to learning through real projects.',
    },
  ];

  return (
    <section id="timeline" className="section-spacing bg-slate-950 border-t border-slate-900">
      <div className="container-width">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-slate-100 text-center mb-16">The Journey</h2>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={index * 100}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-[20px] md:left-1/2 w-10 h-10 md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-brand-primary ring-4 ring-slate-950 shadow-lg shadow-brand-primary/50" />
                  </div>

                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                    <div className={`group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold mb-3 bg-slate-900 border border-slate-800 text-brand-primary">
                        {item.year}
                      </span>

                      <h3 className="text-xl font-bold mb-2 text-slate-200 group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex md:w-1/2 items-center justify-center opacity-0"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-16 card-base p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-200 mb-4">The Journey Continues</h3>
          <p className="text-slate-400 leading-relaxed">
            No formal CS degree. No bootcamp. Just curiosity and relentless practice. I have spent
            over 10,000 hours building real projects, debugging production issues, and learning from
            every failure. The best part? I am just getting started.
          </p>
        </div>
      </div>
    </section>
  );
}
