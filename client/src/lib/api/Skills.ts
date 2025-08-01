import {Client} from "./Base.ts";

export interface SkillsResponseObject {
    categories: CategoryResponseObject[];
}

export interface CategoryResponseObject {
    name: string;
    skills: SkillResponseObject[];
}

export interface SkillResponseObject {
    title: string;
    image: string;
}

export async function getSkills() {
    const data: SkillsResponseObject = await Client.get("/skills");
    return data.categories;
}