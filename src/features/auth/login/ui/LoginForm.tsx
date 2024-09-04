import useAuthStore from "@/shared/model/useAuthStore.ts";
import { Button } from "@/shared/ui";

export const LoginForm = () => {
  const { login } = useAuthStore();
  return (
    <form className="w-80" onSubmit={login}>
      <Button color="white">Log In</Button>
    </form>
  );
};
