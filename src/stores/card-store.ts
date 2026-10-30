import { create } from "zustand";
import type { PidCard } from "@/types/card";

interface CardStore {
  activeCard: PidCard | null;
  setActiveCard: (card: PidCard | null) => void;
  updateActiveCard: (patch: Partial<PidCard>) => void;
  reset: () => void;
}

export const useCardStore = create<CardStore>((set) => ({
  activeCard: null,
  setActiveCard: (card) => set({ activeCard: card }),
  updateActiveCard: (patch) =>
    set((state) => ({
      activeCard: state.activeCard
        ? { ...state.activeCard, ...patch, updatedAt: new Date().toISOString() }
        : null,
    })),
  reset: () => set({ activeCard: null }),
}));
