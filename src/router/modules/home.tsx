import Layout from '@/layouts/index'
import type { RouteObject } from '@/router/interface'
import IsloginStatus from '@/components/auth/loginStatus'
import lazyLoad from '../lazyLoad'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

/** 首页模块*/
const Home = lazy(() => import('@/views/home'))
const homeRouter: Array<RouteObject> = [
  {
    element: (
      <IsloginStatus>
        <Layout />
      </IsloginStatus>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: '/home',
        element: lazyLoad(Home),
        meta: {
          requiresAuth: false,
          title: '首页',
          key: 'home'
        }
      }
    ]
  }
]

export default homeRouter
