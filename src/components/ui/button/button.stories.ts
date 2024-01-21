import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children: 'Primary button with icon',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}
export const SecondaryWithIcon = {
  args: {
    children: 'Secondary button with icon',
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}
