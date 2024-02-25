import { ComponentPropsWithoutRef } from 'react'

import { Check } from '@/assets/icons'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checkbox.module.scss'

import { Typography } from '../Typography'

type CheckboxProps = {
  label?: string
} & Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'asChild'>
export const Checkbox = (props: CheckboxProps) => {
  const { disabled, label, ...restProps } = props

  return (
    <Typography as={'label'} className={clsx(s.container, disabled && s.disabled)}>
      <CheckboxPrimitive.Root className={s.box} disabled={disabled} {...restProps}>
        <CheckboxPrimitive.Indicator className={s.indicator}>
          <Check color={disabled ? '#808080' : '#fff'} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label}
    </Typography>
  )
}
