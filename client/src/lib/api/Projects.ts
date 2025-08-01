import {Client} from "./Base.ts";

interface ProjectsResponseObject {
    projects: ProjectResponseObject[]
}

export interface ProjectResponseObject {
    image: string
    title: string
    description: string
    tools: string[]
    github: string
    demo: string
}
export async function getProjects(): Promise<ProjectResponseObject[]> {
    const data: ProjectsResponseObject = await Client.get("/projects");
    return data.projects;
}