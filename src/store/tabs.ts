import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface userInfoState {
  tabsList: Array<any>
  setTabsList: (list: any) => void
}

const useTabsListStore = create<userInfoState>()(
  persist(
    (set) => ({
      tabsList: [{ title: '首页', path: '/home' }],
      setTabsList: (list: Array<any>) => set(() => ({ tabsList: list }))
    }),
    {
      name: 'tabsList'
    }
  )
)

export default useTabsListStore
