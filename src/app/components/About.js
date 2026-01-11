'use client';

export default function About() {
  return (
    <section id="about" className="section-spacing bg-slate-950">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-100">
              About Me
            </h2>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I am a self-taught software engineer driven by a deep curiosity for how complex systems work. My journey began with simple scripts and evolved into architecting <strong className="text-slate-200">cloud-native microservices</strong> for enterprise environments.
              </p>
              <p>
                Unlike many who focus solely on frontend trends, I prioritize the <strong className="text-slate-200">robustness of the backend</strong>. I believe that a great application is built on a foundation of secure APIs, efficient databases, and scalable infrastructure.
              </p>
              <p>
                Currently, I am exploring the intersection of <strong className="text-brand">AI Engineering</strong> and traditional software development, building RAG systems that bridge the gap between LLMs and structured enterprise data.
              </p>
            </div>

            {/* Signature/Philosophy */}
            <div className="pt-8 border-t border-slate-800">
              <blockquote className="italic text-slate-500">
                &quot;The code you write is your legacy. Make it clean, efficient, and maintainable.&quot;
              </blockquote>
            </div>
          </div>

          {/* Stats/Highlights Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Key Metric 1 */}
            <div className="card-base p-6 hover:bg-slate-900 transition-colors">
              <div className="text-4xl font-bold text-slate-200 mb-2">3+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years Exp</div>
            </div>

            {/* Key Metric 2 */}
            <div className="card-base p-6 hover:bg-slate-900 transition-colors">
              <div className="text-4xl font-bold text-brand-secondary mb-2">50+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Projects</div>
            </div>

            {/* Tech Highlight */}
            <div className="card-base p-6 col-span-1 sm:col-span-2 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-200 mb-2">AWS</h3>
                <p className="text-slate-400 text-sm">Emerging Talent Community Member</p>
              </div>
              <div className="absolute right-4 bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl">☁️</span>
              </div>
            </div>

            {/* Focus Area */}
            <div className="card-base p-6 col-span-1 sm:col-span-2">
              <h4 className="text-slate-300 font-semibold mb-3">Core Focus</h4>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'Microservices', 'Angular', 'System Design', 'DevOps'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
