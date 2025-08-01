import {Client} from "./Base.ts";

interface ResumeResponseObject {
    url: string
}

export const getResume = async () => {
    const response: ResumeResponseObject[] = await Client.get("/resume");
    return response[0].url;
}