import type { Meta, StoryObj } from '@storybook/react'

import {
  ForgotPasswordForm,
  ForgotPasswordFormFields,
} from '@/components/auth/ForgotPasswordForm/ForgotPasswordForm'

const meta = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

const onSubmit = (data: ForgotPasswordFormFields) => {
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
    onSubmit: onSubmit,
  },
}
