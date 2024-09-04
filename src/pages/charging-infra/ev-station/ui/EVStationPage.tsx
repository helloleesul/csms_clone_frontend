import useAuthStore from "@/shared/model/useAuthStore.ts";

export const EVStationPage = () => {
  const { logout } = useAuthStore();
  return (
    <>
      <h1>EVStationPage</h1>
      <button onClick={logout}>Log out</button>
    </>
  );
};
