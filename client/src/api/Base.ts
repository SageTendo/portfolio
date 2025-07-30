const BaseUrl = "https://sagetendo-portfolio.vercel.app/api";
// const BaseUrl = "http://localhost:8000/api";

// TODO: Replace with tanstack query?
export const Client = {
  get: async (path: string) => {
    const response = await fetch(BaseUrl + path, { cache: "force-cache" });
    return await response.json();
  },
};
