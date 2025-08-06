const BaseUrl = import.meta.env.VITE_API_ENDPOINT;
export const Client = {
  get: async (path: string) => {
    const response = await fetch(BaseUrl + path);
    return await response.json();
  },
};
