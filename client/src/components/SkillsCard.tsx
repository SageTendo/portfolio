import '../styles/skill_card.css'
import {ReactNode} from "react";

interface SkillCardProps {
    icon: string;
    category: string;
    skills: ReactNode[];
}

export function SkillsCard({icon, category, skills}: SkillCardProps) {
    if (!icon) {
        icon = "https://img.icons8.com/color/48/000000/html-5.png";
    }

    if (!category) {
        category = "Category";
    }

    if (!skills) {
        skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4"];
    }

    return (
        <>
            <div className="skills-card">
                <img className="skills-icon" src={icon}/>
                <h2 className="skills-title">{category}</h2>
                <ul className="skills-list">
                    {
                        skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}