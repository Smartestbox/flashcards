import { Navigate, Outlet } from 'react-router-dom'

import { Header } from '@/components/layout/Header'
import { useMeQuery } from '@/services/auth/auth.service'

import s from './Layout.module.scss'

export const Layout = () => {
  const { data, isError } = useMeQuery()

  const onLogout = () => {}
  const isAuthenticated = !isError

  if (!isAuthenticated) {
    return <Navigate to={'/login'} />
  }

  return (
    <div className={s.Layout}>
      <Header
        avatar={data?.avatar ?? null}
        email={data?.email ?? ''}
        isLoggedIn={isAuthenticated}
        onLogout={onLogout}
        userName={data?.name ?? ''}
      />
      <div className={s.Content}>
        <Outlet />
      </div>
    </div>
  )
}
