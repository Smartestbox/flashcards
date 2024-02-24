import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'

const meta = {
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for modal',
    },
  },
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultModal: Story = {
  args: {
    title: 'Content title',
    trigger: <Button>Open modal</Button>,
  },
}
