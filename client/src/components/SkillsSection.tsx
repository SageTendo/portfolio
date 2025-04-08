import {SkillsCard} from "./SkillsCard.tsx";
import {CategoryResponseObject, getSkills} from "../api/Skills.ts";
import {useEffect, useState} from "react";

export function SkillsSection() {
    const [skillsCategories, setData]
        = useState<CategoryResponseObject[]>([]);

    useEffect(() => {
        getSkills().then(
            (response: CategoryResponseObject[]) => {
                setData(response)
            }
        );
    }, []);

    return (
        <>
            <section id="skills" className="skills-section">
                <h1>Skills</h1>
                <div className="content-box">
                    {
                        skillsCategories.map((category, index) => (
                            <SkillsCard key={index} category={category.name} skills={category.skills}/>
                        ))
                    }
                </div>
            </section>
        </>
    );
}