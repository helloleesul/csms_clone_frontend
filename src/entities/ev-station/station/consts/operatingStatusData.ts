import { StationOperatingStatusEnum } from "../model/enums.ts";

export const OPERATING_STATUS_DATA: {
  [key: number]: {
    description: string;
  };
} = {
  [StationOperatingStatusEnum.OPERATING]: {
    description: "운영 중",
  },
  [StationOperatingStatusEnum.PAUSE]: {
    description: "임시 중지",
  },
  [StationOperatingStatusEnum.STOP]: {
    description: "영구 중지",
  },
};

Object.freeze(OPERATING_STATUS_DATA);
