import type { Meta, StoryObj } from '@storybook/react'

import {
  CreateNewPasswordForm,
  CreateNewPasswordFormFields,
} from '@/components/auth/CreateNewPasswordForm/CreateNewPasswordForm'

const meta = {
  component: CreateNewPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPasswordForm',
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

const onSubmit = (data: CreateNewPasswordFormFields) => {
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
