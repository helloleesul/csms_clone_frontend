export const forceLogout = () => {
  sessionStorage.removeItem("auth-storage");
  sessionStorage.removeItem("user-storage");

  window.location.href = "/";
};
