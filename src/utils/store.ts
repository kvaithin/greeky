import create from "zustand";
import { combine } from 'zustand/middleware'

const initialValues: StateType = {
  god: {},
}

const useStore = create(
  combine<StateType, ActionType>(
    { ...initialValues },
    (set) => ({
      addGod: (god: GodType) => set((state) => ({ god })),
      removeGod: (name: string) => set((state) => ({ god: undefined, }))
    })
  ),
)

export default useStore;
