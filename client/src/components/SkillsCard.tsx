import '../styles/skill_card.css'
import {SkillResponseObject} from "../api/Skills.ts";

interface SkillCardProps {
    category: string;
    skills: SkillResponseObject[];
}

export function SkillsCard({category, skills}: SkillCardProps) {

    return (
        <>
            <div className="skills-card">
                <h2 className="skills-title">{category}</h2>
                <ul className="skills-list">
                    {
                        skills.map((skill, index) => (
                            <li key={index} className="skills-item">
                                <img className="skill-icon" src={skill.image}/>
                                <span className="skill-title">{skill.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}