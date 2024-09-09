import { PATHS } from "@/shared/consts/paths.ts";

export const NAVIGATION_LIST = [
  {
    label: "대시보드",
    path: PATHS.DASHBOARD.BASE,
    icon: "ic-dashboard",
  },
  {
    label: "충전인프라 관리",
    path: PATHS.CHARGING_INFRA.BASE,
    icon: "ic-gasstation",
    subMenu: [
      { label: "충전소 관리", path: PATHS.CHARGING_INFRA.EV_STATION },
      { label: "충전기 관리", path: PATHS.CHARGING_INFRA.EV_CHARGER },
    ],
  },
  {
    label: "충전 내역",
    path: PATHS.CHARGING_HISTORY.BASE,
    icon: "ic-charginglist",
  },
  {
    label: "회원 관리",
    path: PATHS.USER.BASE,
    icon: "ic-member",
    subMenu: [{ label: "온라인 회원 목록", path: PATHS.USER.ONLINE_USER }],
  },
  {
    label: "충전단가 관리",
    path: PATHS.CHARGING_PRICE.BASE,
    icon: "ic-money",
    subMenu: [
      { label: "충전단가 목록", path: PATHS.CHARGING_PRICE.PRICE_LIST },
      { label: "충전단가 히스토리", path: PATHS.CHARGING_PRICE.PRICE_HISTORY },
    ],
  },
  {
    label: "상담접수 내역",
    path: PATHS.CUSTOMER_SERVICE.BASE,
    icon: "ic-consulting",
  },
  {
    label: "시스템 설정",
    path: PATHS.SETTINGS.BASE,
    icon: "ic-setting",
    subMenu: [
      { label: "공지사항", path: PATHS.SETTINGS.NOTICE },
      { label: "관리자 계정 관리", path: PATHS.SETTINGS.ADMIN_USER },
    ],
  },
];
