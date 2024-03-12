import { ComponentPropsWithoutRef } from 'react'

import { Logout, PersonOutline } from '@/assets/icons'
import { Avatar } from '@/components/ui/Avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/Dropdown'
import { Typography } from '@/components/ui/Typography'

import s from './UserDropdown.module.scss'

export type UserDropdownProps = {
  avatar: null | string
  email: string
  onLogout: ComponentPropsWithoutRef<typeof DropdownMenuItem>['onSelect']
  userName: string
}

export const UserDropdown = ({ avatar, email, onLogout, userName }: UserDropdownProps) => {
  if (!avatar) {
    avatar = `https://ui-avatars.com/api/?name=${userName.split(' ').join('+')}`
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={s.Trigger}>
          <Avatar src={avatar} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Avatar src={avatar} />
          <div className={s.Label}>
            <Typography variant={'subtitle2'}>{userName}</Typography>
            <Typography className={s.Email} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Typography as={'a'} href={'#'}>
            <PersonOutline />
            My profile
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={onLogout}>
          <Logout />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
