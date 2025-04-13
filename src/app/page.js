'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
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
    <div className="bg-[#0f172a] text-gray-100 min-h-screen font-sans leading-relaxed tracking-wide">
      
      {/* Navbar */}
      <nav className="bg-[#1e293b] px-6 py-4 shadow-lg sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-white">Mohan Lal</h1>
          <div className="space-x-6 text-sm sm:text-base">
            <a href="#about" className="hover:text-sky-400 transition">About</a>
            <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
            <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
            <a href="https://github.com/mhnuk2007" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero / Header */}
      <header className="text-center py-20 bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
        <h2 className="text-4xl sm:text-5xl font-bold">Java Backend Developer</h2>
        <p className="mt-4 text-xl text-gray-300">Full Stack Enthusiast | Cloud Learner</p>
        <p className="mt-6 max-w-xl mx-auto text-gray-400">
          Welcome to my portfolio! Explore my GitHub repositories and get to know my work and passion for backend development.
        </p>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center bg-[#0f172a]">
        <h2 className="text-3xl font-semibold mb-6 text-sky-400">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          I&apos;m a passionate Java Backend Developer with hands-on experience in Spring Boot, Hibernate, REST APIs, MySQL, and Cloud tools.
          I love building scalable, secure applications and constantly exploring new technologies.
        </p>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-[#0f172a]">
        <h2 className="text-3xl font-semibold mb-6 text-sky-400">Contact Me</h2>
        <p className="text-lg mb-4 text-gray-300">Let&apos;s connect on LinkedIn or GitHub.</p>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/mohan-lal-b79790126/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 text-xl hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mhnuk2007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 text-xl hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e293b] text-gray-500 py-6 text-center border-t border-gray-700">
        <p>&copy; 2025 Mohan Lal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
