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
                            I’m a software engineer who enjoys backend development — building systems, experimenting
                            with APIs, and figuring out how things work by re-implementing them.
                            <br/>
                            When I’m not coding, you’ll find me exploring new music or making my own, watching anime,
                            playing chess, competing in tactical FPS games, or skateboarding.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}