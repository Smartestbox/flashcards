import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { ControlledTextField } from '@/components/ui_controlled/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import z from 'zod'

import s from './CreateNewPasswordForm.module.scss'

const newPasswordSchema = z.object({
  password: z.string().min(3, 'Password must be at least 3 characters'),
})

export type CreateNewPasswordFormFields = z.infer<typeof newPasswordSchema>

type CreateNewPasswordFormProps = {
  className?: string
  disabled?: boolean
  onSubmit: (values: CreateNewPasswordFormFields) => void
}

export const CreateNewPasswordForm = ({
  className,
  disabled,
  onSubmit,
}: CreateNewPasswordFormProps) => {
  const { control, handleSubmit } = useForm<CreateNewPasswordFormFields>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(newPasswordSchema),
  })

  return (
    <Card
      as={'form'}
      className={clsx(s.CreateNewPasswordForm, className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography as={'h1'} variant={'h1'}>
        Create new password
      </Typography>
      <ControlledTextField
        className={s.CreateNewPasswordField}
        control={control}
        disabled={disabled}
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <Typography className={s.CreateNewPasswordTips} variant={'body2'}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button className={s.CreateNewPasswordBtn} disabled={disabled}>
        Create new password
      </Button>
    </Card>
  )
}
