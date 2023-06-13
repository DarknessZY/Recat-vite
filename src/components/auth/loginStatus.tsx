import { Navigate, useLocation } from 'react-router-dom'

import useUserInfoStore from '@/store/userInfo'

const IsloginStatus = ({ children }: any) => {
  const { loginStatus } = useUserInfoStore() // 获取登录状态
  const location = useLocation() // 获取URL参数
  if (!loginStatus) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default IsloginStatus
