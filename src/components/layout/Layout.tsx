import { Outlet } from 'react-router-dom'

import { Header } from '@/components/layout/Header'

import s from './Layout.module.scss'

export const Layout = () => {
  const onLogout = () => {}
  const isAuthenticated = false
  const data: any = []

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
