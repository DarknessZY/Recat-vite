import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoad from './lazyLoad'
import Layout from '@/layouts/index'

const Home = lazy(() => import('@/views/home'))
const About = lazy(() => import('@/views/about'))
const routes: RouteObject[] = [
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
        path: 'about',
        element: lazyLoad(About)
      }
    ]
  }
]

export default createBrowserRouter(routes, {
  basename: '/'
})
