import type { Meta, StoryObj } from '@storybook/react'

import {
  RecoverPasswordForm,
  RecoverPasswordFormFields,
} from '@/components/auth/RecoverPasswordForm/RecoverPasswordForm'

const meta = {
  component: RecoverPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/RecoverPasswordForm',
} satisfies Meta<typeof RecoverPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

const onSubmit = (data: RecoverPasswordFormFields) => {
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
