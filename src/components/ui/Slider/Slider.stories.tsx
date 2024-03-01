import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from './Slider'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    max: 100,
    min: 0,
    value: [0, 100],
  },
  render: args => {
    const [values, setValues] = useState(args.value)

    return <Slider {...args} onValueChange={setValues} value={values} />
  },
}
