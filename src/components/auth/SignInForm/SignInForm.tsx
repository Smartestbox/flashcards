import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { ControlledCheckbox } from '@/components/ui_controlled/ControlledCheckbox'
import { ControlledTextField } from '@/components/ui_controlled/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignInForm.module.scss'

const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(3, 'Password must contain at least 3 characters'),
  rememberMe: z.boolean().default(false),
})

export type SignInFormFields = z.infer<typeof signInSchema>

type SignInFormProps = {
  className?: string
  disabled?: boolean
  onSubmit: (values: SignInFormFields) => void
}

export const SignInForm = ({ disabled, onSubmit }: SignInFormProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })

  return (
    <Card as={'form'} className={s.SignInForm} onSubmit={handleSubmit(onSubmit)}>
      <Typography as={'h1'} variant={'h1'}>
        Sign In
      </Typography>
      <ControlledTextField
        className={s.EmailField}
        control={control}
        disabled={disabled}
        label={'Email'}
        name={'email'}
      ></ControlledTextField>
      <ControlledTextField
        className={s.PasswordField}
        control={control}
        disabled={disabled}
        label={'Password'}
        name={'password'}
        type={'password'}
      ></ControlledTextField>
      <ControlledCheckbox
        className={s.RememberCheckbox}
        control={control}
        disabled={disabled}
        label={'Remember me'}
        name={'rememberMe'}
      />
      <Typography as={'a'} className={s.ForgotPassword} variant={'body2'}>
        Forgot password?
      </Typography>
      <Button className={s.SignInBtn} disabled={disabled} fullWidth type={'submit'}>
        Sign In
      </Button>
      <Typography className={s.AccountQuestion} variant={'body2'}>
        {"Don't have an account?"}
      </Typography>
      <Typography as={'a'} variant={'link1'}>
        Sign Up
      </Typography>
    </Card>
  )
}
