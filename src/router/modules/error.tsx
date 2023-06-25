import type { RouteObject } from '@/router/interface'
import lazyLoad from '../lazyLoad'
import { lazy } from 'react'

/** 错误页面模块*/
const Error404 = lazy(() => import('@/components/ErrorPage/404'))
const errorRouter: RouteObject[] = [
  {
    path: '/404',
    element: lazyLoad(Error404),
    meta: {
      requiresAuth: false,
      title: '404页面',
      key: '404'
    }
  }
]

export default errorRouter
