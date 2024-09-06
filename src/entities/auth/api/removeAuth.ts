import { tokenApi } from "@/shared/api";

import { ResponseRemoveAuthDto } from "../model/types.ts";

export const removeAuth = async () => {
  try {
    const response = await tokenApi.post("/auth/logout");
    const { status }: Pick<ResponseRemoveAuthDto["resultData"], "status"> =
      response.data.resultData;
    return status;
  } catch (error) {
    console.error("Login failed:", error);
    throw error; // 에러 발생 시 호출한 곳에서 처리할 수 있도록 에러를 던짐
  }
};
