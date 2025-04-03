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
                    <ProjectCard image="" title="" description="" technologies="" codeLink="" demoLink=""/>
                    <ProjectCard image="" title="" description="" technologies="" codeLink="" demoLink=""/>
                    <ProjectCard image="" title="" description="" technologies="" codeLink="" demoLink=""/>
                    <ProjectCard image="" title="" description="" technologies="" codeLink="" demoLink=""/>
                    <ProjectCard image="" title="" description="" technologies="" codeLink="" demoLink=""/>
                </div>
            </section>
        </>
    );
}