import { create } from "zustand";

const useAiPillSearchStore = create((set, get) => ({
  frontBlob: null,
  backBlob: null,
  pillData: null,
  frontFile: null,
  backFile: null,
  setFrontBlob: frontBlob => set(() => ({ frontBlob })),
  setBackBlob: backBlob => set(() => ({ backBlob })),
  setPillData: pillData => set(() => ({ pillData })),
  setFrontFile: frontFile => set(() => ({ frontFile })),
  setBackFile: backFile => set(() => ({ backFile })),
  reset: () =>
    set(() => ({
      frontBlob: null,
      backBlob: null,
      pillData: null,
      frontFile: null,
      backFile: null,
    })),
}));

export default useAiPillSearchStore;
