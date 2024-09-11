export enum StationOperatingStatusEnum { // 충전소 운영 상태
  OPERATING = 0, // 운영중
  PAUSE = 1, // 임시중지
  STOP = 2, // 영구중지
}

export enum StationUserLimitEnum { // 공용 부분
  PUBLIC = 0, // 완전 공용
  PARTIAL = 1, // 부분 공용
  PRIVATE = 2, // 비 공용
}
