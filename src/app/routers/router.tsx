import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import { EVStationPage } from "@/pages/charging-infra/ev-station";
import { LoginPage } from "@/pages/login";

import { LayoutAdmin } from "@/widgets/LayoutAdmin";

import { PATHS } from "@/shared/consts/paths.ts";

import { ProtectedRoute } from "./ProtectedRoute.tsx";
import { PublicRoute } from "./PublicRoute.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    // 원래라면 Dashboard 경로로 이동해야 함
    element: <Navigate to={PATHS.CHARGING_INFRA.BASE} />,
  },
  // 게스트 전용 접근 경로
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        path: PATHS.AUTH.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
  // 멤버 전용 접근 경로
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <LayoutAdmin />,
        children: [
          {
            path: PATHS.CHARGING_INFRA.BASE,
            element: <Navigate to={PATHS.CHARGING_INFRA.EV_STATION} />,
          },
          {
            path: PATHS.CHARGING_INFRA.EV_STATION,
            element: <EVStationPage />,
          },
          {
            path: "*",
            element: <h1>404</h1>,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
