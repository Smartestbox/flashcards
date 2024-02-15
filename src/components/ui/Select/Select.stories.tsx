import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta = {
  args: {
    disabled: false,
    fullWidth: false,
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

const options = [
  { title: 'example1', value: 'example1' },
  { title: 'example2', value: 'example2' },
  { title: 'example3', value: 'example3' },
  { title: 'example4', value: 'example4' },
]

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSelect: Story = {
  args: {
    label: 'Select value',
    options,
  },
}
export const DisabledSelect: Story = {
  args: {
    disabled: true,
    label: 'Select value',
    options,
  },
}
export const FullWidthSelect: Story = {
  args: {
    fullWidth: true,
    label: 'Select value',
    options,
  },
}
