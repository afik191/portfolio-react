import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-blue-200 min-h-svh flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        <div className="rounded-lg border bg-white  text-card-foreground max-w-2xl mx-auto shadow-xl">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="font-semibold tracking-tight text-2xl">
              Contact Information
            </div>
            <div className="text-sm text-muted-foreground">
              Feel free to reach out through any of the platforms below.
            </div>
          </div>

          <div className="p-6 pt-0 space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail h-8 w-8 text-accent flex-shrink-0"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <div>
                <h4 className="font-semibold text-lg text-primary">Email</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-accent hover:underline transition-colors break-all"
                  href="mailto:afik3248@gmail.com"
                >
                  afik3248@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin h-8 w-8 text-accent flex-shrink-0"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <div>
                <h4 className="font-semibold text-lg text-primary">LinkedIn</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-accent hover:underline transition-colors break-all"
                  href="https://www.linkedin.com/in/afik-aharon/"
                >
                  Afik Aharon
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github h-8 w-8 text-accent flex-shrink-0"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <div>
                <h4 className="font-semibold text-lg text-primary">GitHub</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-accent hover:underline transition-colors break-all"
                  href="https://github.com/afik191"
                >
                  afik191
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
