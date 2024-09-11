import { StationOperatingStatusEnum } from "../model/enums.ts";
import { OperatingStatisticType } from "../model/types.ts";

export interface RequestFetchListDto {
  evStationAddress: string;
  evStationName: string;
  operatingInstitutionList: string[];
  operatingStatus: StationOperatingStatusEnum;
  page: number;
  rowsPerPage: number;
}

export interface ResponseFetchListDto {
  resultCode: number;
  description: string;
  needRedirect: boolean;
  resultData: {
    contents: ListContentDto[];
    pagination: PaginationDto;
    operatingStatistics: OperatingStatisticType;
  };
}

export interface ListContentDto {
  no: number;
  evStationId: string;
  operatingInstitution: string;
  evStationName: string;
  address: {
    main: string;
    detail: null;
  };
  userLimit: {
    item: number;
    detail: null;
  };
  operatingStatus: number;
  registerDate: string;
}

export interface PaginationDto {
  descending: boolean;
  page: number;
  rowsNumber: number;
  rowsPerPage: number;
  sortBy: string[];
}
