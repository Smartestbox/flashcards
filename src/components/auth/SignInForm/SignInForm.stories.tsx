import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm, SignInFormFields } from '@/components/auth/SignInForm/SignInForm'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/SignInForm',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

const onSubmit = (data: SignInFormFields) => {
  alert(JSON.stringify(data))
}

export const Default: Story = {
  args: {
    onSubmit: onSubmit,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
