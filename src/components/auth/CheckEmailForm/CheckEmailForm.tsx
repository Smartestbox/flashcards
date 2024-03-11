import { CheckEmail } from '@/assets/icons'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'

import s from './CheckEmailForm.module.scss'

export const CheckEmailForm = () => {
  return (
    <Card className={s.CheckEmailForm}>
      <Typography as={'h1'} variant={'h1'}>
        Check Email
      </Typography>
      <CheckEmail className={s.EmailIcon} />
      <Typography className={s.ResponseTip} variant={'body2'}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Typography as={'a'} className={s.BackToSignInBtn} variant={'link3'}>
        Back to Sign In
      </Typography>
    </Card>
  )
}
