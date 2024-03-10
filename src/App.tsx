import { SignInForm, SignInFormFields } from '@/components/auth/SignInForm/SignInForm'

export function App() {
  const onSubmit = (data: SignInFormFields) => {
    alert(JSON.stringify(data))
  }

  return <SignInForm onSubmit={onSubmit} />
}
