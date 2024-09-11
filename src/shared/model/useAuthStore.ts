import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Tokens } from "./types.ts";

interface AuthState {
  isAuthenticated: boolean;
  tokens: Tokens;
  setAuth: (tokens: Tokens) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      tokens: {
        accessToken: "",
        refreshToken: "",
      },
      setAuth: (tokens) => set({ isAuthenticated: true, tokens }),
      clearAuth: () =>
        set({
          isAuthenticated: false,
          tokens: {
            accessToken: "",
            refreshToken: "",
          },
        }),
    }),
    {
      name: "auth-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useAuthStore;
