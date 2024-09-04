import { Navigate, Outlet } from "react-router-dom";

import { PATHS } from "@/shared/consts/paths.ts";
import useAuthStore from "@/shared/model/useAuthStore.ts";

/**
 * 게스트 사용자의 멤버전용 페이지 접근을 막는다.
 * @constructor
 */
export const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={PATHS.AUTH.LOGIN} />;
};
