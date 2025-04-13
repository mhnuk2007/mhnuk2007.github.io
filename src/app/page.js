'use client'; // Mark this file as a client component

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
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Mohan Lal</h1>
        <p className="text-xl mt-2">Java Backend Developer | Full Stack Enthusiast</p>
        <p className="mt-4 text-lg">
          Welcome to my professional portfolio! Below are some of my GitHub repositories and projects.
        </p>
      </header>

      {/* About */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto">
          I&apos;m a passionate Java Backend Developer with experience in Spring Boot, Hibernate, and cloud technologies.
          I enjoy building scalable and secure applications, and I continuously strive to improve my skills.
        </p>
      </section>

      {/* Projects */}
      <section className="bg-white py-10 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">My Projects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {repos.length === 0 ? (
            <p className="text-center">Loading...</p>
          ) : (
            repos.map((repo) => (
              <div key={repo.id} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {repo.name}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">
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

      {/* Contact */}
      <section className="p-10 text-center bg-gray-200">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out to me via LinkedIn or GitHub.</p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/mohan-lal-b79790126/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-xl"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mhnuk2007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-xl"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Mohan Lal. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
