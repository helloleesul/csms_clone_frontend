import useAuthStore from "@/shared/model/useAuthStore.ts";

export const LoginPage = () => {
  const { login } = useAuthStore();
  return (
    <>
      <h1>LoginPage</h1>
      <button onClick={login}>Log in</button>
    </>
  );
};
