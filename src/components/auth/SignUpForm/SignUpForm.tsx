import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { ControlledTextField } from '@/components/ui_controlled/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './SignUpForm.module.scss'

const signUpSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(3, 'Must be at least 3 characters'),
  passwordConfirmation: z.string().min(3, 'Must be at least 3 characters'),
})

export type SignUpFormFields = z.infer<typeof signUpSchema>

type SignUpFormProps = {
  className?: string
  disabled?: boolean
  onSubmit: (values: SignUpFormFields) => void
}

export const SignUpForm = ({ disabled, onSubmit }: SignUpFormProps) => {
  const { control, handleSubmit } = useForm<SignUpFormFields>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Card as={'form'} className={s.SignUpForm} onSubmit={handleSubmit(onSubmit)}>
      <Typography as={'h1'} variant={'h1'}>
        Sign Up
      </Typography>
      <ControlledTextField
        className={s.EmailField}
        control={control}
        disabled={disabled}
        label={'Email'}
        name={'email'}
      />
      <ControlledTextField
        control={control}
        disabled={disabled}
        label={'Password'}
        name={'password'}
      />
      <ControlledTextField
        control={control}
        disabled={disabled}
        label={'Confirm password'}
        name={'passwordConfirmation'}
      />
      <Button className={s.SignUpBtn} disabled={disabled} fullWidth type={'submit'}>
        Sign Up
      </Button>
      <Typography className={s.AccountQuestion} variant={'body2'}>
        Already have an account?
      </Typography>
      <Typography as={'a'} variant={'link1'}>
        Sign In
      </Typography>
    </Card>
  )
}
