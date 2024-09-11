import { csmsApi } from "@/shared/api";

import { RequestFetchListDto, ResponseFetchListDto } from "./types.ts";

export const fetchEvStationList = async ({
  page = 1,
  rowsPerPage = 30,
  evStationAddress,
  evStationName,
  operatingInstitutionList,
  operatingStatus,
}: Partial<RequestFetchListDto>) => {
  const response = await csmsApi.post(
    `/ev-station/list/search?page=${page}&rowsPerPage=${rowsPerPage}`,
    {
      evStationAddress,
      evStationName,
      operatingInstitutionList,
      operatingStatus,
    },
  );
  const data: ResponseFetchListDto = response.data;

  if (100 !== data.resultCode) {
    throw new Error(
      `충전소 목록 조회 실패: ${data.description || "알 수 없는 오류"}`,
    );
  }

  return data.resultData;
};
