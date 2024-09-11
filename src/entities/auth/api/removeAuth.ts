import { tokenApi } from "@/shared/api";

import { ResponseRemoveAuthDto } from "./types.ts";

export const removeAuth = async () => {
  const response = await tokenApi.post("/auth/logout");
  const data: ResponseRemoveAuthDto = response.data;

  if ("OK" !== data.resultData.status) {
    throw new Error(`로그아웃 실패: ${data.description || "알 수 없는 오류"}`);
  }
};
