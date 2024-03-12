import { useForm } from 'react-hook-form'

import { Avatar } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { ControlledTextField } from '@/components/ui_controlled/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import z from 'zod'

import s from './EditProfileForm.module.scss'

const editProfileFormSchema = z.object({
  username: z.string(),
})

type editProfileFormFields = z.infer<typeof editProfileFormSchema>

type EditProfileFormProps = {
  avatar: string
  className?: string
  disabled?: boolean
  onSubmit: (values: editProfileFormFields) => void
}

export const EditProfileForm = ({
  avatar,
  className,
  disabled,
  onSubmit,
}: EditProfileFormProps) => {
  const { control, handleSubmit } = useForm<editProfileFormFields>({
    defaultValues: {
      username: '',
    },
    resolver: zodResolver(editProfileFormSchema),
  })

  return (
    <Card as={'form'} className={clsx(s.EditForm, className)} onSubmit={handleSubmit(onSubmit)}>
      <Typography as={'h1'} variant={'h1'}>
        Personal Information
      </Typography>
      <Avatar alt={'avatar'} className={s.Avatar} size={96} src={avatar} />
      <ControlledTextField
        className={s.NicknameField}
        control={control}
        disabled={disabled}
        label={'Nickname'}
        name={'username'}
      />
      <Button fullWidth>Save Changes</Button>
    </Card>
  )
}
