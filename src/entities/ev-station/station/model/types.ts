import { StationOperatingStatusEnum } from "./enums.ts";

export type OperatingStatisticType = {
  [key in keyof typeof StationOperatingStatusEnum]: number;
};
