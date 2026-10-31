import { create } from "zustand";
import type { CardField, PidCard } from "@/types/card";

interface CardStore {
  activeCard: PidCard | null;
  setActiveCard: (card: PidCard | null) => void;
  updateIdentity: (patch: Partial<PidCard["identity"]>) => void;
  updateDesign: (patch: Partial<PidCard["design"]>) => void;
  updateCard: (patch: Partial<Pick<PidCard, "name" | "visibility">>) => void;
  addField: () => void;
  updateField: (id: string, patch: Partial<CardField>) => void;
  removeField: (id: string) => void;
  reset: () => void;
}

export const useCardStore = create<CardStore>((set) => ({
  activeCard: null,
  setActiveCard: (card) => set({ activeCard: card }),
  updateIdentity: (patch) =>
    set((state) => state.activeCard ? {
      activeCard: {
        ...state.activeCard,
        identity: { ...state.activeCard.identity, ...patch },
        updatedAt: new Date().toISOString(),
      },
    } : state),
  updateDesign: (patch) =>
    set((state) => state.activeCard ? {
      activeCard: {
        ...state.activeCard,
        design: { ...state.activeCard.design, ...patch },
        updatedAt: new Date().toISOString(),
      },
    } : state),
  updateCard: (patch) =>
    set((state) => state.activeCard ? {
      activeCard: { ...state.activeCard, ...patch, updatedAt: new Date().toISOString() },
    } : state),
  addField: () =>
    set((state) => {
      if (!state.activeCard || state.activeCard.fields.length >= 20) return state;
      const field: CardField = {
        id: crypto.randomUUID(),
        label: "New field",
        value: "",
        type: "text",
      };
      return { activeCard: { ...state.activeCard, fields: [...state.activeCard.fields, field] } };
    }),
  updateField: (id, patch) =>
    set((state) => state.activeCard ? {
      activeCard: {
        ...state.activeCard,
        fields: state.activeCard.fields.map((field) => field.id === id ? { ...field, ...patch } : field),
      },
    } : state),
  removeField: (id) =>
    set((state) => state.activeCard ? {
      activeCard: { ...state.activeCard, fields: state.activeCard.fields.filter((field) => field.id !== id) },
    } : state),
  reset: () => set({ activeCard: null }),
}));
