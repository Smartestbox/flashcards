import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    label: {},
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
export const CheckboxWithLabel: Story = {
  args: {
    label: 'Checkbox label',
  },
}
export const DisabledCheckbox: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled checkbox',
  },
}
