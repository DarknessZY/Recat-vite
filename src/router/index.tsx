import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import lazyLoad from './lazyLoad'
import Layout from '@/layouts/index'
import Login from '@/views/login'

const Home = lazy(() => import('@/views/home'))
const About = lazy(() => import('@/views/aboutMy/about'))
const Study = lazy(() => import('@/views/aboutMy/study'))
const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: lazyLoad(Home)
      },
      {
        path: '/about',
        children: [
          {
            index: true,
            element: <Navigate to="/about/study" replace />
          },
          {
            path: 'study',
            element: lazyLoad(Study)
          },
          {
            path: 'aboutMy',
            element: lazyLoad(About)
          }
        ]
      }
    ]
  }
]

export default createBrowserRouter(routes, {
  basename: '/'
})
