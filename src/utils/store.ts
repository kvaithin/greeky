import { create } from "zustand";
import { combine } from 'zustand/middleware'

const initialValues: StateType = {
  god: {},
  showToast: true,
}

const useStore = create(
  combine<StateType, ActionType>(
    { ...initialValues },
    (set) => ({
      addGod: (god: GodType) => set((state) => ({ god })),
      removeGod: (name: string) => set((state) => ({ god: undefined, })),
      toggleToast: (showToast: boolean) => set(() => ({ showToast }))
    })
  ),
)

export default useStore;
