'use client';

const missionColumns = [
  {
    title: 'Building',
    items: ['Java + Spring Boot backend projects', 'C#/.NET console practice repositories'],
  },
  {
    title: 'Learning',
    items: ['Java DSA roadmap', 'Trees, Graphs, and Dynamic Programming'],
  },
  {
    title: 'Open To',
    items: ['Backend collaborations', 'DSA-focused peer learning'],
  },
];

export default function Mission() {
  return (
    <section id="mission" className="section-spacing bg-slate-950 border-t border-slate-900">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Current Mission</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            What I am building, learning, and actively open to right now.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {missionColumns.map((column) => (
            <div key={column.title} className="card-base p-6">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">{column.title}</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {column.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-primary mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
