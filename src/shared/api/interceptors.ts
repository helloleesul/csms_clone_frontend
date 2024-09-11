import { attachAuthTokenToConfig } from "@/shared/libs/attachAuthTokenToConfig.ts";
import { fetchTokenReissue } from "@/shared/libs/fetchTokenReissue.ts";

import { csmsInstance, tokenInstance } from "./instances.ts";

// TODO: 하나로 통일 시키기
// 토큰 API 요청 전 처리
tokenInstance.interceptors.request.use(
  (config) => {
    return attachAuthTokenToConfig(config);
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 토큰 API 응답 전 처리
tokenInstance.interceptors.response.use(
  async (response) => {
    console.log("토큰 API 응답 성공: ", response);

    if ("Access Token expired" === response.data.description) {
      try {
        // 재발급 함수 호출
        await fetchTokenReissue(response.config);
        // 재요청
        return tokenInstance(response.config);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return response;
  },
  async (error) => {
    console.log("토큰 API 응답 실패: ", error);
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
  async (response) => {
    console.log("CSMS API 응답 성공: ", response);

    if ("Access Token expired" === response.data.description) {
      try {
        // 재발급 함수 호출
        await fetchTokenReissue(response.config);
        // 재요청
        return csmsInstance(response.config);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return response;
  },
  async (error) => {
    console.log("CSMS API 응답 실패: ", error);
    return Promise.reject(error);
  },
);

export { csmsInstance as csmsApi, tokenInstance as tokenApi };
