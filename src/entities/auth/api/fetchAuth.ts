import { tokenApi } from "@/shared/api";
import { Tokens } from "@/shared/model/types.ts";

import { RequestFetchAuthBody, ResponseFetchAuthDto } from "./types.ts";

export const fetchAuth = async ({
  userId,
  userPassword,
  serviceType = "EVIQ_CSMS_PUBLIC",
}: RequestFetchAuthBody) => {
  const response = await tokenApi.post("/auth/login", {
    userId,
    userPassword,
    serviceType,
  });
  const data: ResponseFetchAuthDto = response.data;

  if ("0000" !== data.resultCode) {
    throw new Error(`인증 실패: ${data.description || "알 수 없는 오류"}`);
  }

  const { accessToken, refreshToken }: Tokens = data.resultData;
  return { accessToken, refreshToken };
};
