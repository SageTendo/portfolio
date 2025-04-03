import "../styles/navbar.css";
// import logo from "../assets/logo.png"
import hamburger from "../assets/hamburger-menu.svg"
import {useState} from "react";

export function NavBar() {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    }


    return (
        <>
            <nav className="navbar" role="navigation">

                <button aria-label="Toggle menu" className="hamburger" onClick={toggleMenu}>
                    <div className="logo">
                        {/*<img src={logo} alt="logo" width="48" height="32"></img>*/}
                    </div>
                    <img className={toggle ? "menu-icon-active" : "menu-icon"} src={hamburger} width="48"
                         height="32"></img>
                </button>

                <div className={toggle ? "container active" : "container"}>
                    {/*<div className="logo"*/}
                    {/*     style={toggle ? {display: "none"} : {display: "flex"}}>*/}
                    {/*    <img src={logo} alt="logo" width="48" height="32"></img>*/}
                    {/*</div>*/}
                    <div className="links">
                        <a href="#home">Home</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact Me</a>
                    </div>

                    <div className="actions">
                        <button className="resume">
                            <a href="#">My Resume</a>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}