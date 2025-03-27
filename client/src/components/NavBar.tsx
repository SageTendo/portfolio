import "../styles/NavBar.css";

export function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        {/*    Placeholder*/}
                    </div>
                    <div className="links">
                        <a href="#">Home</a>
                        <a href="#">Skills</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact Me</a>
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