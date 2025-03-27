import '../styles/ProjectSection.css'
import {ProjectCard} from "./ProjectCard.tsx";

export function ProjectSection() {
    return (
        <>
            <section id="projects" className="project-section">
                <h1>Projects</h1>
                <div className="project-box">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </section>
        </>
    );
}