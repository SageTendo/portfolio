import {ProjectCard} from "./ProjectCard.tsx";

export function ProjectSection() {
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