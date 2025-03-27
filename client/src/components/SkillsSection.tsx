import '../styles/SkillsSection.css'
import {SkillsCard} from "./SkillsCard.tsx";

export function SkillsSection() {
    return (
        <>
            <section id="skills" className="skills-section">
                <h1>Skills</h1>
                <div className="skills-box">
                    <SkillsCard/>
                    <SkillsCard/>
                    <SkillsCard/>
                    <SkillsCard/>
                    <SkillsCard/>
                    <SkillsCard/>
                </div>
            </section>
        </>
    );
}