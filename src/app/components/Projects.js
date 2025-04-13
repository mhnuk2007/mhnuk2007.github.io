'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/mhnuk2007/repos");
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-[#1e293b]">
      <h2 className="text-4xl font-bold text-center mb-12 text-sky-400 tracking-wide">My Projects</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {repos.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">Loading...</p>
        ) : (
          repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-[#0f172a] p-6 rounded-xl shadow-md border border-[#334155] hover:shadow-sky-400/30 transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-400 mb-5">
                {repo.description ? repo.description : "No description available"}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>⭐ {repo.stargazers_count}</span>
                <span>Forks: {repo.forks_count}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
