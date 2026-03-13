'use client';

const profileSnippet = `const mohanLal = {
  role: "Full Stack Engineer",
  location: "Karachi, Pakistan",
  background: "Self-Taught Developer (No CS Degree Required)",

  expertise: {
    backend: ["Java", "Spring Boot", "Spring Security", "Spring AI", "Microservices"],
    frontend: ["Angular", "React", "Next.js", "TypeScript"],
    cloud: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    data: ["PostgreSQL", "MySQL", "pgvector", "Vector Embeddings"]
  },

  currentFocus: [
    "Practicing Java DSA daily (patterns + complexity analysis)",
    "Building C#/.NET console projects to strengthen fundamentals",
    "Solving optimization-focused Python DSA problems",
    "Applying algorithmic thinking to backend API design"
  ],

  achievements: ["AWS Emerging Talent Community Member"],

  philosophy: "Code is poetry; architecture is storytelling",

  funFact: "Built everything without formal CS education, just curiosity and relentless practice"
};`;

const focusTags = [
  'Java + Spring Boot',
  'Angular + React',
  'Microservices',
  'Cloud-Native Architecture',
  'AI Integration',
];

const achievements = [
  'AWS Emerging Talent Community Member',
  'Self-taught developer with 10,000+ hours of hands-on learning',
  'Cloud-native full stack delivery focus',
];

export default function About() {
  return (
    <section id="about" className="section-spacing bg-slate-950">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              I am a self-taught full stack engineer based in Karachi, Pakistan. I focus on
              building resilient backend systems with Java and Spring Boot, then bring them to
              life with Angular and modern React/Next.js frontends.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              I specialize in secure APIs, microservices, and cloud-native architecture while
              integrating AI capabilities such as embeddings, vector search, and RAG patterns.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Philosophy: <span className="text-slate-200">Code is poetry; architecture is storytelling.</span>
            </p>

            <div className="pt-6 border-t border-slate-800">
              <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-3">Current Focus</h3>
              <div className="flex flex-wrap gap-2">
                {focusTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-3">Achievements & Milestones</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-primary mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-base p-6 bg-slate-900/60 border border-slate-800">
            <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4">Profile Snapshot</h3>
            <pre className="text-xs md:text-sm text-slate-300 whitespace-pre-wrap overflow-auto max-h-[520px] leading-relaxed">
              {profileSnippet}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
