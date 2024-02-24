import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/Button'

import { Card } from './'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', padding: '12px 18px' }}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aspernatur at
          blanditiis ducimus esse facilis illo incidunt modi, nemo omnis perspiciatis possimus
          quidem sed ullam velit vitae voluptatem! Id.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aspernatur at
          blanditiis ducimus esse facilis illo incidunt modi, nemo omnis perspiciatis possimus
          quidem sed ullam velit vitae voluptatem! Id.
        </div>
        <Button as={'a'} variant={'secondary'}>
          Some button
        </Button>
      </div>
    ),
  },
}
