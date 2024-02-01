import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
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
export const InputWithEye: Story = {
  args: {},
}
export const InputWithLens: Story = {
  args: {},
}
