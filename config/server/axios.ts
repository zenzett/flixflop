import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const cookieStore = cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token && typeof window !== "undefined") {
      const tokenFromCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("auth_token="))
        ?.split("=")[1];
      if (tokenFromCookie) {
        config.headers["Authorization"] = `Bearer ${tokenFromCookie}`;
      }
    }

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized access - Token expired or invalid");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
