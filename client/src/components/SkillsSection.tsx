import {SkillsCard} from "./SkillsCard.tsx";

export function SkillsSection() {
    return (
        <>
            <section id="skills" className="skills-section">
                <h1>Skills</h1>
                <div className="content-box">
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