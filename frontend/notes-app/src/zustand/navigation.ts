import { create } from "zustand";

interface NavigationStateInterface {
  pathName: string;
  updatePathName: (pathName: string) => void;
}

const useNavigationState = create<NavigationStateInterface>()((set) => ({
  pathName: "/",
  updatePathName: (pathName: string) => set({ pathName }),
}));

export default useNavigationState;
