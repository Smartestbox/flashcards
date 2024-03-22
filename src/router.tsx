import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/components/layout/Layout'
import { SignInPage } from '@/pages/auth/SignInPage/SignInPage'
import { DecksListPage } from '@/pages/decks/DecksListPage/DecksListPage'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/sign-in',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <DecksListPage />,
    path: '/',
  },
]

const router = createBrowserRouter([
  { children: [...publicRoutes, ...privateRoutes], element: <Layout /> },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
