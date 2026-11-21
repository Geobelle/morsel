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
        ...(options.body instanceof FormData
          ? {}
          : { "Content-Type": "application/json" }),
      },
    });

    const responseText = await response.text();

    // console.log("API STATUS:", response.status);
    // console.log("API RESPONSE:", responseText);

    let data;

    try {
      data = JSON.parse(responseText);
    } catch {
      console.log("INVALID SERVER RESPONSE:", responseText);
      throw new Error("Server returned a non-JSON response.");
    }

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    return data;
  };

  return { request };
}
