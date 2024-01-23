import type { Meta, StoryObj } from '@storybook/react'

import { Logout } from '@/assets/icons'

import { Button } from './'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryButton: Story = {
  args: {
    children: 'Primary button',
    variant: 'primary',
  },
}

export const PrimaryButtonWithIcon: Story = {
  args: {
    children: 'Primary button logout',
    disabled: false,
    icon: <Logout />,
    variant: 'primary',
  },
}

export const SecondaryButton: Story = {
  args: {
    children: 'Secondary button',
    disabled: false,
    variant: 'secondary',
  },
}
export const SecondaryButtonWithIcon = {
  args: {
    children: 'Secondary button logout',
    disabled: false,
    icon: <Logout />,
    variant: 'secondary',
  },
}

export const DisabledButton = {
  args: {
    children: 'Disabled primary button',
    disabled: true,
  },
}

export const FullWidthButton: Story = {
  args: {
    children: 'Full width button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
