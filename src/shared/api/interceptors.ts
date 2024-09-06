import { attachAuthTokenToConfig } from "@/shared/libs/getSessionToken.ts";

import { csmsInstance, tokenInstance } from "./instances.ts";

// 토큰 API 요청 전 처리
tokenInstance.interceptors.request.use(
  (config) => {
    return attachAuthTokenToConfig(config);
  },
  (error) => {
    return Promise.reject(error);
  },
);

// CSMS API 요청 전 처리
csmsInstance.interceptors.request.use(
  (config) => {
    return attachAuthTokenToConfig(config);
  },
  (error) => {
    return Promise.reject(error);
  },
);

// CSMS API 응답 전 처리
csmsInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // TODO: 토큰을 재발급받고, 저장하는 함수를 호출하고 반환된 토큰을 헤더에 저장시키기
        // originalRequest.headers.Authorization = `Bearer ${newToken}`;
        // return csmsApi(originalRequest); // 기존 요청을 재요청
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export { csmsInstance as csmsApi, tokenInstance as tokenApi };
