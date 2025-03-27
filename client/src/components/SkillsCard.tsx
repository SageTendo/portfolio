import '../styles/skill_card.css'

export function SkillsCard() {
    return (
        <>
            <div className="skills-card">
                <img className="skills-icon" src="https://img.icons8.com/color/48/000000/html-5.png"/>
                <h2 className="skills-title">Frontend</h2>
                <ul className="skills-list">
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </>
    );
}