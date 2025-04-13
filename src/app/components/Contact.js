'use client';

export default function Contact() {
  return (
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
  );
}
