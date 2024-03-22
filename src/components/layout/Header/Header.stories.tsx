import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components/layout/Header/Header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'layout/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: 'https://picsum.photos/200',
    email: 'johngalt@gmail.com',
    isLoggedIn: true,
    userName: 'John Galt',
  },
}
