import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { TextField } from '@/components/ui/TextField'
import { ControlledCheckbox } from '@/components/ui/controlled/ControlledCheckbox/ControlledCheckbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    // console.log('data:', data)
  }

  // console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} errorText={errors.email?.message} label={'email'} />
      <TextField
        {...register('password')}
        errorText={errors.password?.message}
        label={'password'}
        type={'password'}
      />
      <ControlledCheckbox control={control} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
