import './App.css'
import {NavBar} from "./components/NavBar.tsx";
import {HomeSection} from "./components/HomeSection.tsx";
import {SkillsSection} from "./components/SkillsSection.tsx";
import {ProjectSection} from "./components/ProjectSection.tsx";
import {Contact} from "./components/Contact.tsx";

function App() {

    return (
        <>
            <div className="body">
                <NavBar/>
                <HomeSection/>
                <SkillsSection/>
                <ProjectSection />
                <Contact/>
            </div>
        </>
    )
}

export default App
