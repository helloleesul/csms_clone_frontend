import { FormEvent, useState } from "react";

import { fetchAuth } from "@/entities/auth";
import { fetchUser } from "@/entities/user";

import IC_CircleX from "@/shared/assets/icons/circle-x.svg";
import IC_EyeOff from "@/shared/assets/icons/eye-off.svg";
import IC_Eye from "@/shared/assets/icons/eye.svg";
import useAuthStore from "@/shared/model/useAuthStore.ts";
import useUserStore from "@/shared/model/useUserStore.ts";
import { Button, IconButton, LoginTextField } from "@/shared/ui";

export const LoginForm = () => {
  const { setAuth } = useAuthStore();
  const { setUserInfo } = useUserStore();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const loginHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userId || !userPassword) return;

    try {
      const { accessToken, refreshToken } = await fetchAuth({
        userId,
        userPassword,
      });
      setAuth({ accessToken, refreshToken });

      // 인증 후 사용자 정보를 요청
      try {
        const userInfo = await fetchUser();
        setUserInfo(userInfo);
      } catch (userError) {
        console.error(userError);
        // 사용자 정보 요청 실패에 대한 처리
        // 로그인 세션을 종료하거나, 사용자에게 에러 메시지 던지기
      }
    } catch (error) {
      console.error(error);
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
            imagePath={IC_CircleX}
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
              imagePath={isPasswordShow ? IC_Eye : IC_EyeOff}
              imageAlt="close"
              onClick={() => setIsPasswordShow((prevState) => !prevState)}
              className="hover:opacity-100 opacity-50"
            />
            <IconButton
              imagePath={IC_CircleX}
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
