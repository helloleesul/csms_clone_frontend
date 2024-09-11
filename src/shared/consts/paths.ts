export const PATHS = {
  ROOT: "/",
  AUTH: { LOGIN: "/login" },
  DASHBOARD: { BASE: "/dashboard" },
  CHARGING_INFRA: {
    BASE: "/charging-infra",
    EV_STATION: "/charging-infra/ev-station",
    EV_CHARGER: "/charging-infra/ev-charger",
  },
  CHARGING_HISTORY: { BASE: "/charging-history" },
  USER: { BASE: "/user", ONLINE_USER: "/user/online-user" },
  CHARGING_PRICE: {
    BASE: "/charging-price",
    PRICE_LIST: "/charging-price/list",
    PRICE_HISTORY: "/charging-price/history",
  },
  CUSTOMER_SERVICE: { BASE: "/customer-service" },
  SETTINGS: {
    BASE: "/settings",
    NOTICE: "/settings/notice",
    ADMIN_USER: "/settings/admin-user",
  },
};

Object.freeze(PATHS);
