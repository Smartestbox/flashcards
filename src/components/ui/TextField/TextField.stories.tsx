import type { Meta, StoryObj } from '@storybook/react'

import { ChangeEvent, useRef, useState } from 'react'

import { TextField } from './TextField'

const meta = {
  args: {
    disabled: false,
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    label: 'Input',
  },
}
export const InputDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
  },
}
export const InputError: Story = {
  args: {
    errorText: 'Error',
    label: 'Input',
    placeholder: 'Error',
  },
}
export const InputPassword: Story = {
  args: {
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
  },
}
export const InputSearch: Story = {
  args: {
    label: 'Search...',
    type: 'search',
  },
  render: args => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChangeValue = (value: string) => {
      setValue(value)
      inputRef.current?.focus()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget?.value)
    }

    return (
      <TextField
        {...args}
        onChange={handleChange}
        onChangeValue={handleChangeValue}
        ref={inputRef}
        value={value}
      />
    )
  },
}
