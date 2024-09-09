import { csmsApi } from "@/shared/api";

import { ResponseFetchUserDto } from "../model/types.ts";

export const fetchUser = async () => {
  const response = await csmsApi.get("/account/user");
  const data: ResponseFetchUserDto = response.data;

  if (data.resultCode !== 100) {
    throw new Error(
      `유저 정보 조회 실패: ${data.description || "알 수 없는 오류"}`,
    );
  }

  const { userId } = data.resultData.resultData;
  return userId;
};
