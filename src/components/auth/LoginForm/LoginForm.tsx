import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { ControlledCheckbox } from '@/components/ui_controlled/ControlledCheckbox/ControlledCheckbox'
import { ControlledTextField } from '@/components/ui_controlled/ControlledTextField/ControlledTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(3, 'Password must contain at least 3 character(s)'),
  rememberMe: z.boolean().optional(),
})

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log('data:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField
        control={control}
        errorText={errors?.email?.message}
        label={'Email'}
        name={'email'}
        type={'email'}
      />
      <ControlledTextField
        control={control}
        errorText={errors?.password?.message}
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <ControlledCheckbox control={control} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
