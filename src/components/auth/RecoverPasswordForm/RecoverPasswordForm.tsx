import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { ControlledTextField } from '@/components/ui_controlled/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import z from 'zod'

import s from './RecoverPasswordForm.module.scss'

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email'),
})

export type RecoverPasswordFormFields = z.infer<typeof forgotPasswordSchema>

type RecoverPasswordFormProps = {
  className?: string
  disabled?: boolean
  onSubmit: (values: RecoverPasswordFormFields) => void
}

export const RecoverPasswordForm = ({
  className,
  disabled,
  onSubmit,
}: RecoverPasswordFormProps) => {
  const { control, handleSubmit } = useForm<RecoverPasswordFormFields>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })

  return (
    <Card as={'form'} className={clsx(s.ForgotForm, className)} onSubmit={handleSubmit(onSubmit)}>
      <Typography as={'h1'} variant={'h1'}>
        Forgot your password?
      </Typography>
      <ControlledTextField
        className={s.EmailField}
        control={control}
        disabled={disabled}
        label={'Email'}
        name={'email'}
      />
      <Typography className={s.EmailTips} variant={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button className={s.SendInstructionsBtn} disabled={disabled} fullWidth type={'submit'}>
        Send Instructions
      </Button>
      <Typography className={s.PasswordQuestion} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography as={'a'} className={s.LogginRedirectLink} variant={'link1'}>
        Try logging in
      </Typography>
    </Card>
  )
}
