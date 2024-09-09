import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  userId: string;
  setUserInfo: (id: string) => void;
  clearUserInfo: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userId: "",
      setUserInfo: (userId) => set({ userId }),
      clearUserInfo: () =>
        set({
          userId: "",
        }),
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useUserStore;
