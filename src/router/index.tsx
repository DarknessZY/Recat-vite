import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from '@/router/interface'
import Login from '@/views/login'

// * 导入所有router
const metaRouters: any = import.meta.glob('./modules/*.tsx', { eager: true })
export const routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    console.log(metaRouters[item][key])
    routerArray.push(...metaRouters[item][key])
  })
})
const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login'
    }
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />
  }
]

export default createBrowserRouter(rootRouter, {
  basename: '/'
})
