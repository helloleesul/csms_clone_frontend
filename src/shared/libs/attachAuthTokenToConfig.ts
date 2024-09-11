import { InternalAxiosRequestConfig } from "axios";

export const attachAuthTokenToConfig = (config: InternalAxiosRequestConfig) => {
  const sessionAuth = sessionStorage.getItem("auth-storage");
  console.log("헤더 토큰을 포함하는 요청 주소", config.url);

  if (sessionAuth) {
    try {
      const { state } = JSON.parse(sessionAuth);
      if (state?.tokens?.accessToken) {
        config.headers.Authorization = `Bearer ${state.tokens.accessToken}`;
      }
    } catch (error) {
      console.error("세션 스토리지 불러오기 오류", error);
    }
  }

  return config;
};
