import { create } from "zustand";

const useAiPillSearchStore = create((set, get) => ({
  frontBlob: null,
  backBlob: null,
  setFrontBlob: frontBlob => set(() => ({ frontBlob })),
  setBackBlob: backBlob => set(() => ({ backBlob })),
}));

export default useAiPillSearchStore;
