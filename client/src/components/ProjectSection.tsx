import { ProjectCard } from "./ProjectCard.tsx";
import { useEffect, useState } from "react";
import { ProjectResponseObject, getProjects } from "../api/Projects.ts";

export function ProjectSection() {
  const [projects, setProjects] = useState<ProjectResponseObject[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    getProjects().then((response: ProjectResponseObject[]) => {
      setProjects(response);
      console.log(response);
    });
  }, []);

  return (
    <section id="projects" className="w-full px-2 py-20 text-white">
      <h1 className="px-4 text-2xl md:text-3xl font-extrabold text-white mb-10">
        Projects
      </h1>
      <div className="flex flex-col max-w-7xl mx-auto items-center justify-center space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {projects
            .slice(0, expanded ? projects.length : 2)
            .map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                tools={project.tools}
                codeLink={project.github}
                demoLink={project.demo}
              />
            ))}
        </div>

        <button
          className="border rounded-md border-fuchsia-200 px-4 py-2 
          text-gray-300 text-lg md:text-xl xl:text-2xl 
          font-semibold hover:bg-fuchsia-400/10 transition-all duration-300"
          onClick={() => setExpanded(!expanded)}
        >
          {!expanded ? "Show More" : "Show Less"}
        </button>
      </div>
    </section>
  );
}
