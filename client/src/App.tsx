import './App.css'
import {NavBar} from "./components/NavBar.tsx";
import {HomeSection} from "./components/HomeSection.tsx";
import {SkillsSection} from "./components/SkillsSection.tsx";

function App() {

    return (
        <>
            <div className="body">
                <NavBar/>
                <HomeSection/>
                <SkillsSection/>
            </div>
        </>
    )
}

export default App
