import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    label: 'Input',
  },
}
export const InputDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
  },
}
export const InputError: Story = {
  args: {
    error: true,
    errorLabel: 'Error',
    label: 'Input',
  },
}
export const InputPassword: Story = {
  args: {
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
  },
}
export const InputSearch: Story = {
  args: {
    label: 'Search...',
    type: 'search',
  },
}
