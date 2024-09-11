import { useEffect, useState } from "react";

import { FilterItems } from "@/features/ev-station-filter";
import { SearchBar } from "@/features/ev-station-search";

import {
  fetchEvOperaingInsList,
  OperatingInstitutionDto,
} from "@/entities/ev-station/operating-institution";
import {
  fetchEvStationList,
  ResponseFetchListDto,
  StationOperatingStatusEnum,
} from "@/entities/ev-station/station";
import { RequestFetchListDto } from "@/entities/ev-station/station/api/types.ts";

import { Lists } from "./Lists.tsx";

export const EvStationView = () => {
  const [evStationList, setEvStationList] = useState<Pick<
    ResponseFetchListDto["resultData"],
    "contents" | "operatingStatistics" | "pagination"
  > | null>(null);
  const [operatingInsList, setOperatingInsList] = useState<
    OperatingInstitutionDto[] | []
  >([]);

  const [currentOperatingStatus, setCurrentOperatingStatus] =
    useState<StationOperatingStatusEnum>();
  const [currentSearchBarData, setCurrentSearchBarData] = useState<Partial<
    Pick<
      RequestFetchListDto,
      "evStationName" | "evStationAddress" | "operatingInstitutionList"
    >
  > | null>(null);

  const initEvStationList = async () => {
    try {
      const [evStationData, evOperatingInsData] = await Promise.all([
        fetchEvStationList({}),
        fetchEvOperaingInsList(),
      ]);
      setEvStationList(evStationData);
      setOperatingInsList(evOperatingInsData);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEvStationList = async (
    searchData: Partial<RequestFetchListDto>,
  ) => {
    try {
      const newEvStationData = await fetchEvStationList(searchData);
      setEvStationList(newEvStationData);
    } catch (error) {
      console.error(error);
    }
  };

  // 초기 데이터 불러오기
  useEffect(() => {
    initEvStationList();
  }, []);

  // 데이터 업데이트
  useEffect(() => {
    // 초기 데이터 호출 막기
    if (!evStationList) return;

    updateEvStationList({
      ...currentSearchBarData,
      operatingStatus: currentOperatingStatus,
    });
  }, [currentOperatingStatus, currentSearchBarData]);

  if (!evStationList) return;

  return (
    <div className="flex flex-col gap-6">
      <SearchBar
        data={operatingInsList}
        onSearch={(data) => {
          setCurrentSearchBarData(data);
        }}
      />
      <FilterItems
        data={evStationList?.operatingStatistics}
        currentOperatingStatus={currentOperatingStatus}
        setOperatingStatus={(key) => setCurrentOperatingStatus(key)}
      />
      <Lists
        data={evStationList?.contents}
        pagination={evStationList?.pagination}
      />
    </div>
  );
};
