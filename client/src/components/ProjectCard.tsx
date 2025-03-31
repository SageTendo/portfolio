import '../styles/project_card.css'

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    technologies: string;
    codeLink: string;
    demoLink: string;
}

export function ProjectCard({image, title, description, technologies, codeLink, demoLink}: ProjectCardProps) {
    if (!image) {
        image = "https://cdn.pixabay.com/photo/2021/04/24/06/30/sunset-6203315_640.png";
    }

    if (!title) {
        title = "Project Title";
    }

    if (!description) {
        description = "Project Description";
    }

    if (!technologies) {
        technologies = "React Node Express MongoDB React Node Express MongoDB React Node";
    }

    if (!codeLink) {
        codeLink = "https://github.com";
    }

    if (!demoLink) {
        demoLink = "https://github.com";
    }


    return (
        <>
            <div className="project-card">
                <img className="project-image"
                     src={image}/>
                <div className="project-content">
                    <h2 className="project-title">{title}</h2>
                    <span className="project-description">
                                {description}
                    </span>

                    <h2 className="project-subtitle">Technologies:</h2>
                    <span className="project-tools">
                                {technologies}
                            </span>

                    <div className="project-links">
                        <button className="project-button"
                                onClick={() => window.open(codeLink, "_blank")}>View Code
                        </button>
                        <button className="project-button"
                                onClick={() => window.open(demoLink, "_blank")}>Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}