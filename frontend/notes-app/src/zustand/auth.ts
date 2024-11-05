import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStateInterface {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const useAuthStore = create<AuthStateInterface>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
