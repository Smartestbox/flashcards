import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSelect: Story = {
  args: {},
}
