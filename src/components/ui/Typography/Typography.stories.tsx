import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3',
    variant: 'h3',
  },
}
export const H4: Story = {
  args: {
    as: 'h3',
    children: 'Heading 4',
    variant: 'h4',
  },
}
export const BODY1: Story = {
  args: {
    as: 'p',
    children: 'Body 1',
    variant: 'body1',
  },
}
export const BODY2: Story = {
  args: {
    as: 'p',
    children: 'Body 2',
    variant: 'body2',
  },
}
export const SUBTITLE1: Story = {
  args: {
    as: 'p',
    children: 'Subtitle 1',
    variant: 'subtitle1',
  },
}
export const SUBTITLE2: Story = {
  args: {
    as: 'p',
    children: 'Subtitle 2',
    variant: 'subtitle2',
  },
}
export const CAPTION: Story = {
  args: {
    as: 'span',
    children: 'Caption',
    variant: 'caption',
  },
}
export const OVERLINE: Story = {
  args: {
    as: 'p',
    children: 'Overline',
    variant: 'overline',
  },
}
export const LINK1: Story = {
  args: {
    as: 'a',
    children: 'Link 1',
    variant: 'link1',
  },
}
export const LINK2: Story = {
  args: {
    as: 'a',
    children: 'Link 2',
    variant: 'link2',
  },
}
export const LINK3: Story = {
  args: {
    as: 'a',
    children: 'Link 3',
    variant: 'link3',
  },
}
