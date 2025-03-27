import '../styles/HomeSection.css'

export function HomeSection() {
    return (
        <>
            <section className="home-section">
                <div className="hero">
                    <div className="hero-banner">
                        <h3>SageTendo</h3>
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