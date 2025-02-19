import { apiClient } from "@/lib/api";

export const fetchData = async (url: string) => {
  try {
    const response = await apiClient.get(url);
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};
