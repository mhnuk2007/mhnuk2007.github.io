'use client';

export default function Contact() {
  return (
    <section id="contact" className="section-spacing bg-slate-950">
      <div className="container-width max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Get In Touch</h2>
          <p className="text-slate-400">
            For professional inquiries, please send an email or connect via LinkedIn.
          </p>
        </div>

        <div className="card-base p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-200 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-brand-primary transition-colors">
                    <span className="text-lg">✉️</span>
                    <span>Mohan Lal</span>
                  </a>
                  <a href="https://www.linkedin.com/in/mhnuk2007/" className="flex items-center gap-3 text-slate-400 hover:text-brand-primary transition-colors">
                    <span className="text-lg">💼</span>
                    <span>https://www.linkedin.com/in/mhnuk2007/</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Preferred Stack</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-900 text-slate-400 rounded-full text-xs border border-slate-800">Java</span>
                  <span className="px-3 py-1 bg-slate-900 text-slate-400 rounded-full text-xs border border-slate-800">Spring Boot</span>
                  <span className="px-3 py-1 bg-slate-900 text-slate-400 rounded-full text-xs border border-slate-800">AWS</span>
                </div>
              </div>
            </div>

            {/* Simple Form Placeholder (since explicit backend isn't set up, mailto is better or visual form) */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Name</label>
                <input
                  type="text"
                  disabled
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all cursor-not-allowed opacity-70"
                  placeholder="Contact form disabled (Demo)"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea
                  rows="4"
                  disabled
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all cursor-not-allowed opacity-70"
                  placeholder="Please use email to reach out."
                ></textarea>
              </div>
              <a
                href="mailto:mohan.lal@example.com"
                className="block w-full text-center bg-slate-200 hover:bg-white text-slate-900 font-bold py-3 rounded-lg transition-all"
              >
                Send Email
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
