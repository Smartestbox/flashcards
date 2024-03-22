import { SignInForm } from '@/components/auth/SignInForm'
import { Page } from '@/components/ui/Page/Page'

export const SignInPage = () => {
  const handleSignIn = () => {}

  return (
    <Page>
      <SignInForm onSubmit={handleSignIn} />
    </Page>
  )
}
