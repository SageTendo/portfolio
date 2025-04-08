import {ProjectCard} from "./ProjectCard.tsx";
import {useEffect, useState} from "react";
import {ProjectResponseObject, getProjects} from "../api/Projects.ts";

export function ProjectSection() {
    const [projects, setProjects]
        = useState<ProjectResponseObject[]>([]);

    useEffect(() => {
        getProjects().then(
            (response: ProjectResponseObject[]) => {
                setProjects(response)
                console.log(response)
            }
        );
    }, []);

    return (
        <>
            <section id="projects" className="project-section" style={
                {
                    backgroundColor: "#1c142c", color: "#ffffff"
                }
            }
            >
                <h1>Projects</h1>
                <div className="content-box">
                    {
                        projects.map((project, index) => (
                            <ProjectCard key={index} image={project.image} title={project.title}
                                         description={project.description} tools={project.tools}
                                         codeLink={project.github} demoLink={project.demo}/>
                        ))
                    }
                </div>
            </section>
        </>
    );
}