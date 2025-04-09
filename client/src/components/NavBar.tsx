import "../styles/navbar.css";
import hamburger from "../assets/hamburger-menu.svg"
import {useEffect, useState} from "react";
import {getResume} from "../api/Resume.ts";

export function NavBar() {
    const [toggle, setToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [resumeUrl, setResumeUrl] = useState("");

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    const toggleModal = () => {
        setShowModal(!showModal);
        if (showModal) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    }

    useEffect(() => {
        getResume().then(
            (response: string) => {
                setResumeUrl(response)
            }
        );
    }, []);

    return (
        <>
            <nav className="navbar" role="navigation">

                <button aria-label="Toggle menu" className="hamburger" onClick={toggleMenu}>
                    <div className="logo">
                    </div>
                    <img className={toggle ? "menu-icon-active" : "menu-icon"} src={hamburger} width="48"
                         height="32"></img>
                </button>

                <div className={toggle ? "container active" : "container"}>
                    <div className="links">
                        <a href="#home">Home</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact Me</a>
                    </div>

                    <div className="actions">
                        <button className="resume" onClick={toggleModal}>
                            My Resume
                        </button>
                    </div>
                </div>
            </nav>

            {showModal && (
                <div className="modal">
                    <span className="close-modal" onClick={toggleModal}>&times;</span>
                    <iframe
                        src={resumeUrl}
                        className="modal-content"
                        title="Resume"
                    />
                </div>
            )}
        </>
    );
}