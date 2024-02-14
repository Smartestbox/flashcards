import { ComponentPropsWithoutRef } from 'react'

import { Check } from '@/assets/icons'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checkbox.module.scss'

import { Typography } from '../Typography'

type CheckboxProps = {
  disabled: boolean
  label?: string
} & Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'asChild'>
export const Checkbox = (props: CheckboxProps) => {
  const { disabled, label, ...restProps } = props

  return (
    <Typography as={'label'} className={clsx(s.label, disabled && s.disabled)}>
      <CheckboxPrimitive.Root className={s.root} disabled={disabled} {...restProps}>
        <CheckboxPrimitive.Indicator className={s.indicator}>
          <Check />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label}
    </Typography>
  )
}
