import { Logo } from '@/assets/icons'
import { UserDropdown } from '@/components/layout/Header/UserDropdown/UserDropdown'
import { Typography } from '@/components/ui/Typography'

import s from './Header.module.scss'

type HeaderProps = {
  avatar: string
  email: string
  isLoggedIn: boolean
  onLogout: () => void
  userName: string
}

export const Header = ({ avatar, email, isLoggedIn, onLogout, userName }: HeaderProps) => {
  return (
    <header className={s.Header}>
      <div className={s.Container}>
        <Typography as={'a'} className={s.Logo}>
          <Logo />
        </Typography>

        {isLoggedIn ? (
          <div className={s.HeaderUserInfo}>
            <Typography as={'a'} className={s.HeaderUserName} href={'#'} variant={'subtitle1'}>
              {userName}
            </Typography>
            <UserDropdown avatar={avatar} email={email} onLogout={onLogout} userName={userName} />
          </div>
        ) : (
          <Typography as={'a'} variant={'link4'}>
            Sign In
          </Typography>
        )}
      </div>
    </header>
  )
}
