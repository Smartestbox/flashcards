import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './RadioGroup'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Radio: Story = {}
