import { FormEvent } from "react";

import { fetchAuth } from "@/entities/auth";

import useAuthStore from "@/shared/model/useAuthStore.ts";
import { Button } from "@/shared/ui";

export const LoginForm = () => {
  const { setAuth } = useAuthStore();

  const loginHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { accessToken, refreshToken } = await fetchAuth({
        userId: "",
        userPassword: "",
      });
      setAuth({ accessToken, refreshToken });
    } catch (error) {
      console.error("Error during authentication:", error); // 에러 처리
    }
  };

  return (
    <form className="w-80" onSubmit={loginHandler}>
      <Button color="white">Log In</Button>
    </form>
  );
};
