import { create } from "zustand";
import { combine } from "zustand/middleware";

const initialValues: StateType = {
  god: {},
  adjacentGod: {},
  showToast: false,
  graphData: {},
  shortestPathData: {},
  relation: "",
  depth: "1",
};

const useStore = create(
  combine<StateType, ActionType>({ ...initialValues }, (set) => ({
    addGod: (god: GodType) => set((state) => ({ god })),
    addRelation: (relation: string) => set((state) => ({ relation })),
    addAdjacentGod: (adjacentGod: GodType) => set((state) => ({ adjacentGod })),
    addGraphData: (graphData: object) => set((state) => ({ graphData })),
    addDepth: (depth: string) => set((state) => ({ depth })),
    addShortestPathData: (shortestPathData: object) =>
      set((state) => ({ shortestPathData })),
    removeGod: (name: string) => set((state) => ({ god: undefined })),
    toggleToast: (showToast: boolean) => set(() => ({ showToast })),
  }))
);

export default useStore;
