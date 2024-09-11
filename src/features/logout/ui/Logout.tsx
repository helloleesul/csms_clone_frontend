import { MouseEvent } from "react";

import { removeAuth } from "@/entities/auth";
import { UserInfo } from "@/entities/user";

import IC_Logout from "@/shared/assets/icons/log-out.svg";
import useAuthStore from "@/shared/model/useAuthStore.ts";
import useUserStore from "@/shared/model/useUserStore.ts";
import { IconButton } from "@/shared/ui";

export const Logout = () => {
  const { clearAuth } = useAuthStore();
  const { clearUserInfo } = useUserStore();

  const logoutHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await removeAuth();
      clearAuth();
      clearUserInfo();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <UserInfo />
      <IconButton
        imagePath={IC_Logout}
        imageAlt="log out"
        onClick={logoutHandler}
      />
    </div>
  );
};
