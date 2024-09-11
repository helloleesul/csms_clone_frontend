import { InternalAxiosRequestConfig } from "axios";

import { tokenApi } from "../api";
import { attachAuthTokenToConfig } from "./attachAuthTokenToConfig.ts";
import { forceLogout } from "./forceLogout.ts";

export const fetchTokenReissue = async (config: InternalAxiosRequestConfig) => {
  console.log("토큰 재발급 중...");
  const sessionAuth = sessionStorage.getItem("auth-storage");

  if (sessionAuth) {
    const { state } = JSON.parse(sessionAuth);
    const { accessToken, refreshToken } = state.tokens;
    console.log("기존 액세스 토큰, 리프레시 토큰", {
      accessToken,
      refreshToken,
    });

    const response = await tokenApi.post("/token/reissue", {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    console.log("토큰 재발급 호출 응답 데이터", response.data);

    if ("0000" !== response.data.resultCode) {
      if ("Refresh Token Not Match" === response.data.description) {
        forceLogout();
        throw new Error("토큰 만료");
      }
      throw new Error(
        `토큰 재발급 실패: ${response.data.description || "알 수 없는 오류"}`,
      );
    }

    const newAccessToken = response.data.resultData.accessToken;
    console.log("재발급된 액세스 토큰", { newAccessToken });
    const updatedState = {
      ...state,
      tokens: {
        ...state.tokens,
        accessToken: newAccessToken,
      },
    };

    // 세션스토리지에 새 토큰 저장
    sessionStorage.setItem(
      "auth-storage",
      JSON.stringify({ state: updatedState }),
    );

    // 헤더에 새 토큰 삽입
    attachAuthTokenToConfig(config);
  }
};
