import Image from "next/image";
import axios from "axios";

// Fetch GitHub repositories server-side
export async function getServerSideProps() {
  const response = await axios.get("https://api.github.com/users/mhnuk2007/repos");
  const repos = response.data;

  return {
    props: { repos }, // Passing repos to the component as props
  };
}

export default function Home({ repos }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Your Portfolio Info */}
        <Image
          className="dark:invert"
          src="/your-photo.jpg" // Add your photo or logo path
          alt="Mohan Lal's Logo"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-4xl font-bold text-center sm:text-left">Welcome to My Portfolio!</h1>
        <p className="text-center sm:text-left text-lg">I'm Mohan Lal, a passionate Full-Stack Developer. Explore my projects and learn more about me.</p>

        {/* Display Repositories */}
        <section className="w-full mt-12">
          <h2 className="text-2xl font-bold text-center">My GitHub Repositories</h2>
          <ul className="space-y-4 mt-8">
            {repos.map((repo) => (
              <li key={repo.id} className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
                <h3 className="text-xl font-semibold">{repo.name}</h3>
                <p>{repo.description || "No description available."}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View Repository
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Action Links */}
        <div className="flex gap-4 items-center flex-col sm:flex-row mt-12">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://github.com/mhnuk2007"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My GitHub
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://www.linkedin.com/in/mohan-lal-b79790126/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
