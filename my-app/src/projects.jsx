import React, { useState, useEffect } from "react";

const projectsData = [
  {
    title: "ML Regression: House Prices",
    description:
      "Smart ML system that predicts California housing prices using features like income, house age, and population.",
    image: "/california.jpg",
    tech: ["Python", "Juypter-notebook"],
    githubLink: "https://github.com/afik191/MachineLearningProject",
    liveDemoLink: "#",
    status: "done",
  },
  {
    title: "Real-Time Location Sharing App",
    description:
      "A full-stack web app for real-time location sharing in groups, Users can create accounts, join groups, and share live locations with others. Still in active development.",
    image: "/realtime_location_app.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary"],
    githubLink: "https://github.com/afik191/realtime-location-app",
    liveDemoLink: "https://realtime-location-app.onrender.com",
    status: "in-progress",
  },
  {
    title: "Intelligent robotic arm",
    description:
      "An academic project developed at the Holon Institute of Technology (HIT) as part of the Robotics & Software Engineering course. The project demonstrates how low-cost hardware and AI-based vision can be integrated to create an autonomous robotic arm capable of sorting objects by color.",
    image: "/robotic_arm.jpg",
    tech: ["React", "Arduino", "C++", "Seeed grove vision AI"],
    githubLink: "https://github.com/afik191/intellegnt-robotic-arm.git",
    liveDemoLink: "https://www.youtube.com/watch?v=WaWYLHGAR-I",
    status: "done",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevProject = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

  const renderButtons = (githubLink, liveDemoLink, status) => (
    <div className="items-center p-6 pt-0 flex justify-start gap-2">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-input bg-background hover:bg-accent h-9 rounded-md px-3"
        >
          GitHub
        </a>
      )}
      {liveDemoLink && liveDemoLink !== "#" && (
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-primary text-white hover:bg-primary/90 h-9 rounded-md px-3"
        >
          Live Demo
        </a>
      )}
      {/* Status Light Inline */}
      <span
        className={`w-3 h-3 rounded-full ${
          status === "done" ? "bg-green-500" : "bg-orange-400"
        }`}
      ></span>
    </div>
  );

  return (
    <section id="projects" className="bg-gray-50 py-16 px-6 min-h-svh">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Projects</h2>

        {isMobile ? (
          <div className="relative">
            <div className="relative rounded-lg border bg-card text-card-foreground flex flex-col h-full overflow-hidden shadow-lg transition-shadow duration-300">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="aspect-video relative mb-4 rounded-t-md overflow-hidden">
                  <img
                    alt={projectsData[currentIndex].title}
                    src={projectsData[currentIndex].image}
                    loading="lazy"
                    decoding="async"
                    className="object-cover transition-transform duration-300 hover:scale-105 absolute inset-0 w-full h-full"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="font-semibold tracking-tight text-2xl">
                  {projectsData[currentIndex].title}
                </div>
                <div className="text-muted-foreground text-sm min-h-[3em]">
                  {projectsData[currentIndex].description}
                </div>
              </div>
              <div className="p-6 pt-0 flex-grow">
                <h4 className="font-semibold mb-2 text-sm text-muted-foreground">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projectsData[currentIndex].tech.map((techName) => (
                    <div
                      key={techName}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold bg-gray-300 text-xs"
                    >
                      {techName}
                    </div>
                  ))}
                </div>
              </div>
              {renderButtons(
                projectsData[currentIndex].githubLink,
                projectsData[currentIndex].liveDemoLink,
                projectsData[currentIndex].status
              )}
            </div>

            <button
              onClick={prevProject}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-md"
              aria-label="Previous project"
            >
              ‹
            </button>
            <button
              onClick={nextProject}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-md"
              aria-label="Next project"
            >
              ›
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map(
              ({
                title,
                description,
                image,
                tech,
                githubLink,
                liveDemoLink,
                status,
              }) => (
                <div
                  key={title}
                  className="relative rounded-lg border bg-card text-card-foreground flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="aspect-video relative mb-4 rounded-t-md overflow-hidden">
                      <img
                        alt={title}
                        src={image}
                        loading="lazy"
                        decoding="async"
                        className="object-cover transition-transform duration-300 hover:scale-105 absolute inset-0 w-full h-full"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="font-semibold tracking-tight text-2xl">
                      {title}
                    </div>
                    <div className="text-muted-foreground text-sm min-h-[3em]">
                      {description}
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex-grow">
                    <h4 className="font-semibold mb-2 text-sm text-muted-foreground">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.map((techName) => (
                        <div
                          key={techName}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold bg-gray-300 text-xs"
                        >
                          {techName}
                        </div>
                      ))}
                    </div>
                  </div>
                  {renderButtons(githubLink, liveDemoLink, status)}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
