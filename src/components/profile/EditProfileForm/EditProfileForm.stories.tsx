import type { Meta, StoryObj } from '@storybook/react'

import { EditProfileForm } from '@/components/profile/EditProfileForm/EditProfileForm'

const meta = {
  component: EditProfileForm,
  tags: ['autodocs'],
  title: 'Profile/EditProfileForm',
} satisfies Meta<typeof EditProfileForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { avatar: 'https://picsum.photos/200', onSubmit: () => alert('Submitting...') },
}
