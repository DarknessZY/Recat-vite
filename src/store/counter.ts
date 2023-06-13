import { create } from 'zustand'

interface CounterState {
  counter: number
  delcounter: number
  increase: (by: number) => void
  decrease: (by: number) => void
}

const useCounterStore = create<CounterState>()((set) => ({
  counter: 0,
  delcounter: 10,
  increase: (by) => set((state) => ({ counter: state.counter + by })),
  decrease: (by) => set((state) => ({ delcounter: state.delcounter - by }))
}))

export default useCounterStore
