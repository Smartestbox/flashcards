import type { Meta, StoryObj } from '@storybook/react'

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
    children: 'Button',
    variant: 'primary',
  },
}

export const PrimaryButtonWithIcon: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

export const SecondaryButton: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}
export const SecondaryButtonWithIcon = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const DisabledButton = {
  args: {
    children: 'Button',
    disabled: true,
  },
}

export const FullWidthButton: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
    variant: 'primary',
  },
}
