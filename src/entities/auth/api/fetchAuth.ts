import { tokenApi } from "@/shared/api";
import { Tokens } from "@/shared/model/types.ts";

import { RequestFetchAuthBody } from "../model/types.ts";

export const fetchAuth = async ({
  userId,
  userPassword,
  serviceType = "EVIQ_CSMS_PUBLIC",
}: RequestFetchAuthBody) => {
  try {
    const response = await tokenApi.post("/auth/login", {
      userId,
      userPassword,
      serviceType,
    });
    const { accessToken, refreshToken }: Tokens = response.data.resultData;
    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // 에러 발생 시 호출한 곳에서 처리할 수 있도록 에러를 던짐
  }
};
