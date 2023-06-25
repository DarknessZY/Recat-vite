import Layout from '@/layouts/index'
import type { RouteObject } from '@/router/interface'
import IsloginStatus from '@/components/auth/loginStatus'
import lazyLoad from '../lazyLoad'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

/** 关于模块*/
const About = lazy(() => import('@/views/aboutMy/about'))
const Study = lazy(() => import('@/views/aboutMy/study'))
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
        element: <Navigate to="/about/study" replace />
      },
      {
        path: '/about/study',
        element: lazyLoad(Study),
        meta: {
          requiresAuth: false,
          title: '学习',
          key: 'study'
        }
      },
      {
        path: '/about/aboutMy',
        element: lazyLoad(About),
        meta: {
          requiresAuth: false,
          title: '关于我',
          key: 'aboutMy'
        }
      }
    ]
  }
]

export default homeRouter
