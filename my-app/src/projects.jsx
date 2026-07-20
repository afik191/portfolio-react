import React, { useState, useEffect } from "react";

const projectsData = [
  {
    title: "ML Regression: House Prices",
    description:
      "Smart ML system that predicts California housing prices using features like income, house age, and population.",
    image: "/california.jpg",
    tech: ["Python","Jupyter Notebook"],
    githubLink: "https://github.com/afik191/MachineLearningProject",
    liveDemoLink: "#",
    status: "done",
  },
  {
    title: "GenAI Floor Plan Detector",
    description:
      "End-to-end AI pipeline detecting structural changes in architectural floor plans. Integrates DETR, SAM, and Stable Diffusion to generate synthetic data, achieving an F1 score of 0.81.",
    image: "/genai_floor_plan.jpg", // placeholder, assuming it might exist or they can update it
    tech: ["Python", "PyTorch", "Hugging Face", "Computer Vision"],
    githubLink: "#",
    liveDemoLink: "#",
    status: "done",
  },
  {
    title: "Intelligent robotic arm", 
    description:
      "An academic project developed at the Holon Institute of Technology (HIT). Demonstrates how low-cost hardware and AI-based vision can be integrated to create an autonomous robotic arm capable of sorting objects by color.",
    image: "/robotic_arm.jpg", 
    tech: ["React", "Arduino", "C++","Seeed Grove Vision AI"],
    githubLink: "https://github.com/afik191/intellegnt-robotic-arm.git",
    liveDemoLink: "https://www.youtube.com/watch?v=WaWYLHGAR-I",
    status: "done",
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevProject = () => {
    setCurrentIndex(prev => prev === 0 ? projectsData.length - 1 : prev - 1);
  };

  const nextProject = () => {
    setCurrentIndex(prev => prev === projectsData.length - 1 ? 0 : prev + 1);
  };

  const renderButtons = (githubLink, liveDemoLink, status) => (
    <div className="p-6 pt-0 flex items-center gap-3">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent border border-slate-200 bg-white hover:bg-slate-50 hover:-translate-y-0.5 text-slate-700 h-10 rounded-full px-4 shadow-sm hover:shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          GitHub
        </a>
      )}
      {liveDemoLink && liveDemoLink !== "#" && (
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent bg-primary text-white hover:bg-primary/90 hover:-translate-y-0.5 h-10 rounded-full px-4 shadow-md hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
          Live Demo
        </a>
      )}
      <div title={status === "done" ? "Completed" : "In Progress"} className="ml-auto flex items-center gap-2">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{status}</span>
        <span className={`w-3 h-3 rounded-full shadow-inner ${status === "done" ? "bg-emerald-500" : "bg-amber-400"}`}></span>
      </div>
    </div>
  );

  return (
    <section id="projects" className="bg-white py-24 px-6 min-h-svh border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Featured Projects</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl">A selection of my recent work, showcasing my skills in software engineering and web development.</p>
        </div>

        {isMobile ? (
          <div className="relative pb-12">
            <div className="rounded-2xl border border-slate-100 bg-white flex flex-col h-full overflow-hidden shadow-xl shadow-slate-200/50 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden group">
                <img
                  alt={projectsData[currentIndex].title}
                  src={projectsData[currentIndex].image}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col p-6 space-y-3">
                <h3 className="font-bold text-2xl text-slate-900">{projectsData[currentIndex].title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed min-h-[4rem]">{projectsData[currentIndex].description}</p>
              </div>
              <div className="p-6 pt-0 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {projectsData[currentIndex].tech.map((techName) => (
                    <span key={techName} className="inline-flex items-center rounded-full bg-secondary/80 text-primary px-3 py-1 text-xs font-semibold border border-primary/10">
                      {techName}
                    </span>
                  ))}
                </div>
              </div>
              {renderButtons(projectsData[currentIndex].githubLink, projectsData[currentIndex].liveDemoLink, projectsData[currentIndex].status)}
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4">
              <button onClick={prevProject} className="bg-white hover:bg-slate-50 text-slate-700 rounded-full p-3 shadow-md hover:shadow-lg border border-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Previous">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button onClick={nextProject} className="bg-white hover:bg-slate-50 text-slate-700 rounded-full p-3 shadow-md hover:shadow-lg border border-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Next">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projectsData.map(({ title, description, image, tech, githubLink, liveDemoLink, status }) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-white flex flex-col h-full overflow-hidden shadow-lg shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden group">
                  <img
                    alt={title}
                    src={image}
                    loading="lazy"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col p-8 space-y-4">
                  <h3 className="font-bold text-2xl text-slate-900">{title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed flex-grow">{description}</p>
                </div>
                <div className="p-8 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {tech.map((techName) => (
                      <span key={techName} className="inline-flex items-center rounded-full bg-secondary text-primary px-3 py-1.5 text-xs font-semibold border border-primary/10">
                        {techName}
                      </span>
                    ))}
                  </div>
                </div>
                {renderButtons(githubLink, liveDemoLink, status)}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
