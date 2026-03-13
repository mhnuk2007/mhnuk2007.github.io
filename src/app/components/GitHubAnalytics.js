'use client';

const GITHUB_USERNAME = 'mhnuk2007';

const analyticsCards = [
  {
    title: 'GitHub Stats',
    image: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true`,
  },
  {
    title: 'Streak Stats',
    image: `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true`,
  },
  {
    title: 'Top Languages',
    image: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true`,
  },
];

const activityGraph = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=tokyo-night&hide_border=true`;

export default function GitHubAnalytics() {
  return (
    <section id="analytics" className="section-spacing bg-slate-950 border-t border-slate-900">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">GitHub Analytics</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Snapshot of my GitHub activity, streaks, and language focus.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {analyticsCards.map((card) => (
            <div key={card.title} className="card-base p-4 flex flex-col items-center">
              <p className="text-sm text-slate-400 mb-3">{card.title}</p>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto rounded-lg border border-slate-800"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 card-base p-4">
          <p className="text-sm text-slate-400 mb-3 text-center">Activity Graph</p>
          <img
            src={activityGraph}
            alt="GitHub Activity Graph"
            className="w-full h-auto rounded-lg border border-slate-800"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
