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
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const PrimaryButtonWithIcon: Story = {
  args: {
    children: 'Primary Button logout',
    disabled: false,
    icon: <Logout />,
    variant: 'primary',
  },
}

export const SecondaryButton: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const SecondaryButtonWithIcon = {
  args: {
    children: 'Secondary Button logout',
    disabled: false,
    icon: <Logout />,
    variant: 'secondary',
  },
}

export const DisabledButton = {
  args: {
    children: 'Disabled primary Button',
    disabled: true,
  },
}

export const FullWidthButton: Story = {
  args: {
    children: 'Full width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
