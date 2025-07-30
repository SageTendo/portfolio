import { ProjectCard } from "./shared/ProjectCard.tsx";
import { useEffect, useState } from "react";
import { ProjectResponseObject, getProjects } from "../api/Projects.ts";
import SkeletonCard from "./shared/SkeletonCard.tsx";

export function ProjectSection() {
  const [projects, setProjects] = useState<ProjectResponseObject[]>([]);
  const [remainingProjects, setRemainingProjects] = useState<
    ProjectResponseObject[]
  >([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    getProjects().then((response: ProjectResponseObject[]) => {
      setProjects(response.slice(0, 3));
      setRemainingProjects(response.slice(3));
      console.log(response);
    });
  }, []);

  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="w-full px-6 py-20 text-white">
      <h3 className="px-4 max-w-7xl mx-auto text-white mb-2">Projects</h3>
      <h6 className="px-4 max-w-7xl mx-auto text-fuchsia-200/70 mb-10">
        Some of the projects I've enjoyed working on...
      </h6>
      <div className="flex flex-col max-w-7xl mx-auto items-center justify-center space-y-10">
        {!hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-4">
              {projects.map((project, index) => (
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

              {/* expanded list */}
              {remainingProjects.map((project, index) => (
                <div className={expanded ? "block" : "hidden"}>
                  <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    tools={project.tools}
                    codeLink={project.github}
                    demoLink={project.demo}
                  />
                </div>
              ))}
            </div>

            {remainingProjects.length > 0 && (
              <button
                className="w-fit border rounded-md border-fuchsia-200 px-4 py-2 
          text-gray-300 text-lg md:text-xl xl:text-2xl 
          font-semibold hover:bg-fuchsia-400/10 transition-all duration-300"
                onClick={() => setExpanded(!expanded)}
              >
                {!expanded ? "Show More" : "Show Less"}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
