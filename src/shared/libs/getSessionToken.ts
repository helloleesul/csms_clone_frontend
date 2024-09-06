import { InternalAxiosRequestConfig } from "axios";

export const attachAuthTokenToConfig = (config: InternalAxiosRequestConfig) => {
  const sessionAuth = sessionStorage.getItem("auth-storage");

  if (sessionAuth) {
    try {
      const { state } = JSON.parse(sessionAuth);
      if (state?.tokens?.accessToken) {
        config.headers.Authorization = `Bearer ${state.tokens.accessToken}`;
      }
    } catch (error) {
      console.error("Failed to parse JSON from sessionStorage:", error);
    }
  }

  return config;
};
