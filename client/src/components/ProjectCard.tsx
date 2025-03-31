import '../styles/project_card.css'

export function ProjectCard() {
    return (
        <>
            <div className="project-card">
                <img className="project-image"
                     src="https://cdn.pixabay.com/photo/2021/04/24/06/30/sunset-6203315_640.png"/>
                <div className="project-content">
                    <h2 className="project-title">Project Title</h2>
                    <span className="project-description">
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique.em ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                varius enim in eros.
                            </span>

                    <h2 className="project-subtitle">Technologies Used:</h2>
                    <span className="project-tools">
                                React Node Express MongoDB React Node Express MongoDB React Node
                            </span>

                    <div className="project-links">
                        <button className="project-button">View Code</button>
                        <button className="project-button">Live Demo</button>
                    </div>
                </div>
            </div>
        </>
    );
}