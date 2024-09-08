import { FormEvent, useState } from "react";

import { fetchAuth } from "@/entities/auth";

import CircleX from "@/shared/assets/icons/circle-x.svg";
import EyeOff from "@/shared/assets/icons/eye-off.svg";
import Eye from "@/shared/assets/icons/eye.svg";
import useAuthStore from "@/shared/model/useAuthStore.ts";
import { Button } from "@/shared/ui";
import { IconButton } from "@/shared/ui/IconButton/IconButton.tsx";
import { LoginTextField } from "@/shared/ui/LoginTextField/LoginTextField.tsx";

export const LoginForm = () => {
  const { setAuth } = useAuthStore();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId || !userPassword) return;

    try {
      const { accessToken, refreshToken } = await fetchAuth({
        userId,
        userPassword,
      });
      setAuth({ accessToken, refreshToken });
    } catch (error) {
      console.error("로그인 실패: ", error);
    }
  };

  return (
    <form className="w-80 flex flex-col gap-8" onSubmit={loginHandler}>
      <div className="flex flex-col gap-2">
        <LoginTextField
          type="text"
          onChange={(e) => setUserId(e.target.value)}
          placeholder="ID"
          value={userId}
        >
          <IconButton
            className={!userId ? "hidden" : "hover:opacity-100 opacity-50"}
            onClick={() => setUserId("")}
            imagePath={CircleX}
            imageAlt="close"
          />
        </LoginTextField>

        <LoginTextField
          type={isPasswordShow ? "text" : "password"}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="Password"
          value={userPassword}
        >
          <div className={`${!userPassword ? "hidden" : "flex gap-2"}`}>
            <IconButton
              imagePath={isPasswordShow ? Eye : EyeOff}
              imageAlt="close"
              onClick={() => setIsPasswordShow((prevState) => !prevState)}
              className="hover:opacity-100 opacity-50"
            />
            <IconButton
              imagePath={CircleX}
              imageAlt="close"
              onClick={() => setUserPassword("")}
              className="hover:opacity-100 opacity-50"
            />
          </div>
        </LoginTextField>
      </div>
      <Button type="submit" color="white">
        Log In
      </Button>
    </form>
  );
};
