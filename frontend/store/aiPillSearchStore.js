import { create } from "zustand";

const useAiPillSearchStore = create((set, get) => ({
  frontBlob: null,
  backBlob: null,
  pillData: null,
  setFrontBlob: frontBlob => set(() => ({ frontBlob })),
  setBackBlob: backBlob => set(() => ({ backBlob })),
  setPillData: pillData => set(() => ({ pillData })),
}));

export default useAiPillSearchStore;