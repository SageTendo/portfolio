import "../styles/navbar.css";

export function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        {/*    Placeholder*/}
                    </div>
                    <div className="links">
                        <a href="#home">Home</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact Me</a>
                    </div>

                    <div className="actions">
                        <button className="resume">
                            <a href="#">Resume</a>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}