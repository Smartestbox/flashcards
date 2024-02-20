import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './RadioGroup'

const meta = {
  args: {
    disabled: false,
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: 'Radio 1', value: 'r1' },
  { label: 'Radio 2', value: 'r2' },
  { label: 'Radio 3', value: 'r3' },
  { label: 'Radio 4', value: 'r4' },
]

export const DefaultRadioGroup: Story = {
  args: { options },
}
export const DisabledRadioGroup: Story = {
  args: {
    disabled: true,
    options,
  },
}
