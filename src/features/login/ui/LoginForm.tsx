import { FormEvent, useRef } from "react";

import { fetchAuth } from "@/entities/auth";

import useAuthStore from "@/shared/model/useAuthStore.ts";
import { Button } from "@/shared/ui";

export const LoginForm = () => {
  const { setAuth } = useAuthStore();
  const userId = useRef<HTMLInputElement>(null);
  const userPassword = useRef<HTMLInputElement>(null);

  const loginHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userId.current?.value || !userPassword.current?.value) return;

    if (userId.current && userPassword.current) {
      try {
        const { accessToken, refreshToken } = await fetchAuth({
          userId: userId.current.value,
          userPassword: userPassword.current.value,
        });
        setAuth({ accessToken, refreshToken });
      } catch (error) {
        console.error("Error during authentication:", error); // 에러 처리
      }
    }
  };

  return (
    <form className="w-80" onSubmit={loginHandler}>
      <input type="text" ref={userId} />
      <input type="password" ref={userPassword} />
      <Button color="white">Log In</Button>
    </form>
  );
};
