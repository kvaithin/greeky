import { create } from "zustand";
import { combine } from 'zustand/middleware'

const initialValues: StateType = {
  god: {},
  adjacentGod: {},
  showToast: false,
  graphData: {},
  shortestPathData: {},
}

const useStore = create(
  combine<StateType, ActionType>(
    { ...initialValues },
    (set) => ({
      addGod: (god: GodType) => set((state) => ({ god })),
      addAdjacentGod: (adjacentGod: GodType) => set((state) => ({ adjacentGod })),
      addGraphData: (graphData: object) => set((state) => ({ graphData })),
      addShortestPathData: (shortestPathData: object) => set((state) => ({ shortestPathData })),
      removeGod: (name: string) => set((state) => ({ god: undefined, })),
      toggleToast: (showToast: boolean) => set(() => ({ showToast }))
    })
  ),
)

export default useStore;
