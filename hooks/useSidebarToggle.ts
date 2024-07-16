import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface useSidebarToggleStore {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default create(
  persist<useSidebarToggleStore>(
    (set, get) => ({
      isOpen: true,
      setIsOpen: () => {
        set({ isOpen: !get().isOpen });
      },
    }),
    {
      name: "sidebarOpen",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
