import { create } from "zustand";

interface MenuStateType {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useMenuState = create<MenuStateType>((set, get) => ({
  isOpen: false,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
}));
