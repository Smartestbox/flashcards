import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm, SignUpFormFields } from '@/components/auth/SignUpForm/SignUpForm'

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/SignUpForm',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

const onSubmit = (data: SignUpFormFields) => {
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
