import { Navigate, Outlet } from "react-router-dom";

import { PATHS } from "@/shared/consts/paths.ts";
import useAuthStore from "@/shared/model/useAuthStore.ts";

/**
 * 멤버 사용자의 게스트전용 페이지 접근을 막는다.
 * @constructor
 */
export const PublicRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Navigate to={PATHS.ROOT} /> : <Outlet />;
};
