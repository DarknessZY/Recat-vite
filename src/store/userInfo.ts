import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface userInfoState {
  loginStatus: boolean
  setLoginStatus: (status: boolean) => void
  userInfo: Record<string, any> | null
  setUserInfo: (info: any) => void
  reset: () => void
}

const useUserInfoStore = create<userInfoState>()(
  persist(
    (set) => ({
      userInfo: null,
      loginStatus: false,
      setLoginStatus: (status) => set(() => ({ loginStatus: status })),
      setUserInfo: (userInfo) => set(() => ({ userInfo: userInfo })),
      reset: () => set(() => ({ userInfo: null, loginStatus: false }))
    }),
    {
      name: 'userInfo'
    }
  )
)

export default useUserInfoStore
