import axios from "axios";

// 토큰 API 인스턴스
export const tokenInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_TOKEN_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// CSMS API 인스턴스
export const csmsInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_CSMS_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
