import '../styles/project_card.css'
import cardBG from '../assets/projectCardDefault.jpg'

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    tools: string[];
    codeLink: string;
    demoLink: string;
}

export function ProjectCard({image, title, description, tools, codeLink, demoLink}: ProjectCardProps) {
    if (!image) {
        image = cardBG;
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


                    <div className="project-tools">
                        {
                            tools.map(
                                (tool, index) => (
                                    <span key={index} className="tool-badge">{tool}</span>
                                )
                            )
                        }
                    </div>


                    <div className="project-links">
                        <button className="project-button"
                                onClick={() => window.open(codeLink, "_blank")}>View Code
                        </button>
                        {demoLink &&
                            <button className="project-button"
                                    onClick={() => window.open(demoLink, "_blank")}>Live Demo
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}