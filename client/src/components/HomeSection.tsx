import '../styles/home_section.css'

export function HomeSection() {
    return (
        <>
            <section id="home" className="home-section">
                <div className="hero">
                    <div className="hero-banner">
                        <h2>Hi, I'm Nyasha</h2>
                        <h1>Welcome to my portfolio</h1>
                        {/*    TODO: Add Education Info*/}
                    </div>
                    <div className="hero-bio">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                            commodo
                            diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor
                            interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis
                            viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}