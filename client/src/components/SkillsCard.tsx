import '../styles/skill_card.css'

type Skill = {
    icon: string;
    skill: string
}

interface SkillCardProps {
    category: string;
    skills: Skill[];
}

export function SkillsCard({category, skills}: SkillCardProps) {


    if (!category) {
        category = "Category";
    }

    if (!skills) {
        skills = [
            {"icon": "https://img.icons8.com/color/48/000000/html-5.png", "skill": "HTML"},
            {"icon": "https://img.icons8.com/color/48/000000/css3.png", "skill": "CSS"},
            {"icon": "https://img.icons8.com/color/48/000000/javascript.png", "skill": "JavaScript"},
            {"icon": "https://img.icons8.com/color/48/000000/typescript.png", "skill": "React"},
        ];
    }

    return (
        <>
            <div className="skills-card">
                <h2 className="skills-title">{category}</h2>
                <ul className="skills-list">
                    {
                        skills.map((skill, index) => (
                            <li key={index} className="skills-item">
                                <img src={skill.icon}
                                     width="32"
                                     height="32"/>
                                {skill.skill}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}