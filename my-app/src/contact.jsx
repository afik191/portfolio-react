import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-50 min-h-svh flex flex-col justify-center border-t border-slate-200/60 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center mb-6 tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Connect</span>
        </h2>
        <p className="text-center text-lg text-slate-600 mb-12 max-w-xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        <div className="bg-white rounded-2xl border border-slate-100 max-w-2xl mx-auto shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="flex flex-col space-y-2 p-8 bg-slate-50/50 border-b border-slate-100">
            <h3 className="font-bold tracking-tight text-2xl text-slate-900">
              Contact Information
            </h3>
            <p className="text-sm text-slate-500 font-medium">
              Feel free to reach out through any of the platforms below.
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* Email */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:afik3248@gmail.com"
              className="flex items-center space-x-6 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary flex-shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900">Email</h4>
                <p className="text-slate-600 group-hover:text-primary transition-colors break-all mt-1">
                  afik3248@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/afik-aharon/"
              className="flex items-center space-x-6 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary flex-shrink-0"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900">LinkedIn</h4>
                <p className="text-slate-600 group-hover:text-primary transition-colors break-all mt-1">
                  Afik Aharon
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/afik191"
              className="flex items-center space-x-6 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary flex-shrink-0"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900">GitHub</h4>
                <p className="text-slate-600 group-hover:text-primary transition-colors break-all mt-1">
                  afik191
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
