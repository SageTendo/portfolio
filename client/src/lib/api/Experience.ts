import { Client } from "./Base.ts";

export interface ExperienceResponseObject {
  title: string;
  company: string;
  position: string;
  start: string;
  end: string;
  description: string[];
}

export async function getExperience() {
  const data: ExperienceResponseObject[] = await Client.get("/experience");
  return data;
}
