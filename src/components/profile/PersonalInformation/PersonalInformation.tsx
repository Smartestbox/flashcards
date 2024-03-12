import { Edit, Logout } from '@/assets/icons'
import { Avatar } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'

import s from './PersonalInformation.module.scss'

type PersonalInformationProps = {
  avatar: string
  email: string
  name: string
  onAvatarChange: () => void
  onLogout: () => void
  onNameChange: () => void
}

export const PersonalInformation = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onLogout,
  onNameChange,
}: PersonalInformationProps) => {
  const handleAvatarChange = () => {
    onAvatarChange()
  }
  const handleNameChange = () => {
    onNameChange()
  }
  const handleLogoutChange = () => {
    onLogout()
  }

  return (
    <Card className={s.PersonalInformationContainer}>
      <Typography as={'h1'} variant={'h1'}>
        Personal Information
      </Typography>
      <div className={s.AvatarContainer}>
        <Avatar alt={'avatar'} size={96} src={avatar} />
        <button onClick={handleAvatarChange}>
          <Edit />
        </button>
      </div>
      <div className={s.NameWithEditBtnContainer}>
        <Typography as={'h2'} className={s.Name} variant={'h2'}>
          {name}
        </Typography>
        <button onClick={handleNameChange}>
          <Edit />
        </button>
      </div>
      <Typography className={s.Email} variant={'body2'}>
        {email}
      </Typography>
      <Button
        className={s.LogoutBtn}
        icon={<Logout />}
        onClick={handleLogoutChange}
        variant={'secondary'}
      >
        Logout
      </Button>
    </Card>
  )
}
