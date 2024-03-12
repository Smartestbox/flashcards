import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from '@/components/profile/PersonalInformation/PersonalInformation'

const meta = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Profile/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: 'https://picsum.photos/200',
    email: 'email@email.com',
    name: 'John Galt',
    onAvatarChange: () => {
      alert('Avatar changed')
    },
    onLogout: () => {
      alert('Logged out')
    },
    onNameChange: () => {
      alert('Name changed')
    },
  },
}
