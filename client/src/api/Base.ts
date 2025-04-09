const BaseUrl = "https://sagetendo-portfolio.vercel.app/api";
// const BaseUrl = "http://localhost:8000/api";

export const Client = {
    get: async (path: string) => {
        const response = await fetch(BaseUrl + path);
        return await response.json();
    },
};
