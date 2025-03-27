import './App.css'
import {NavBar} from "./components/NavBar.tsx";
import {HomeSection} from "./components/HomeSection.tsx";
import {SkillsSection} from "./components/SkillsSection.tsx";
import {ProjectSection} from "./components/ProjectSection.tsx";

function App() {

    return (
        <>
            <div className="body">
                <NavBar/>
                <HomeSection/>
                <SkillsSection/>
                <ProjectSection />
            </div>
        </>
    )
}

export default App
