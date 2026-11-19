import { useAuth } from "@clerk/expo";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export function useApi() {
  const { getToken } = useAuth();

  const request = async (endpoint: string, options: RequestInit = {}) => {
    const token = await getToken();

    if (!token) {
      throw new Error("You must be logged in.");
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    return data;
  };

  return { request };
}
