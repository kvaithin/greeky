import { create } from "zustand";
import { combine } from 'zustand/middleware'

const initialValues: StateType = {
  god: {},
  showToast: false,
  graphData: {},
}

const useStore = create(
  combine<StateType, ActionType>(
    { ...initialValues },
    (set) => ({
      addGod: (god: GodType) => set((state) => ({ god })),
      addGraphData: (graphData: object) => set((state) => ({ graphData })),
      removeGod: (name: string) => set((state) => ({ god: undefined, })),
      toggleToast: (showToast: boolean) => set(() => ({ showToast }))
    })
  ),
)

export default useStore;
