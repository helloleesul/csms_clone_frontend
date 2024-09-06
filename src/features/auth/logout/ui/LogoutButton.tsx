import { MouseEvent } from "react";

import { removeAuth } from "@/entities/auth";

import useAuthStore from "@/shared/model/useAuthStore.ts";

export const LogoutButton = () => {
  const { clearAuth } = useAuthStore();

  const logoutHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const status = await removeAuth();
      if ("OK" === status) clearAuth();
    } catch (error) {
      console.error("Error during authentication:", error); // 에러 처리
    }
  };

  return <button onClick={logoutHandler}>Log out</button>;
};
