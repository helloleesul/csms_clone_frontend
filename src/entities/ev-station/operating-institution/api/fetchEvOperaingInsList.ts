import { csmsApi } from "@/shared/api";

import { ResponseFetchListDto } from "./types.ts";

export const fetchEvOperaingInsList = async () => {
  const response = await csmsApi.get("/operating-institution/register/list");
  const data: ResponseFetchListDto = response.data;

  if (100 !== data.resultCode) {
    throw new Error(
      `운영기관 목록 조회 실패: ${data.description || "알 수 없는 오류"}`,
    );
  }

  return data.resultData;
};
