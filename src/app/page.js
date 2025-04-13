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
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-gray-800 px-6 py-4 shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-white">Mohan Lal</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            <a href="https://github.com/mhnuk2007" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center py-16 bg-gradient-to-r from-gray-800 to-gray-700">
        <h2 className="text-4xl font-bold">Java Backend Developer</h2>
        <p className="mt-3 text-xl text-gray-300">Full Stack Enthusiast | Cloud Learner</p>
        <p className="mt-6 max-w-2xl mx-auto text-gray-400">
          Welcome to my portfolio! Explore my GitHub repositories and get to know my work and passion for backend development.
        </p>
      </header>

      {/* About */}
      <section id="about" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          I&apos;m a passionate Java Backend Developer with hands-on experience in Spring Boot, Hibernate, REST APIs, MySQL, and Cloud tools.
          I love building scalable, secure applications and constantly exploring new technologies.
        </p>
      </section>

{/* Projects */}
<section id="projects" className="py-20 px-6 bg-[#1a1a2e]">
  <h2 className="text-4xl font-bold text-center mb-12 text-[#00bcd4] tracking-wide">
    My Projects
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {repos.length === 0 ? (
      <p className="text-center text-gray-400 col-span-full">Loading...</p>
    ) : (
      repos.map((repo) => (
        <div
          key={repo.id}
          className="bg-[#16213e] p-6 rounded-xl shadow-lg border border-[#293462] hover:shadow-[#00bcd4]/40 transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold mb-3 text-white">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00bcd4] hover:underline"
            >
              {repo.name}
            </a>
          </h3>
          <p className="text-gray-300 mb-5">
            {repo.description ? repo.description : "No description available"}
          </p>
          <div className="flex justify-between text-sm text-gray-400">
            <span>⭐ {repo.stargazers_count}</span>
            <span>Forks: {repo.forks_count}</span>
          </div>
        </div>
      ))
    )}
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">Contact Me</h2>
        <p className="text-lg mb-4 text-gray-300">Let&apos;s connect on LinkedIn or GitHub.</p>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/mohan-lal-b79790126/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-xl hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mhnuk2007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-xl hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center border-t border-gray-700">
        <p>&copy; 2025 Mohan Lal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
