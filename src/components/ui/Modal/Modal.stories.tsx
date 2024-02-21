import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '@/components/ui/Modal'

const meta = {
  args: {
    disabled: false,
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultModal: Story = {}
