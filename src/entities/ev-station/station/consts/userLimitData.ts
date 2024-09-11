import { StationUserLimitEnum } from "../model/enums.ts";

export const USER_LIMIT_DATA: {
  [key: number]: {
    description: string;
  };
} = {
  [StationUserLimitEnum.PUBLIC]: {
    description: "완전 공용",
  },
  [StationUserLimitEnum.PARTIAL]: {
    description: "부분 공용",
  },
  [StationUserLimitEnum.PRIVATE]: {
    description: "비공용",
  },
};

Object.freeze(USER_LIMIT_DATA);
