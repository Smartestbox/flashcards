import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Check } from '@/assets/icons'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checkbox.module.scss'

import { Typography } from '../Typography'

export type CheckboxProps = {
  label?: string
  onChange?: (checked: boolean) => void
} & Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  (props, ref) => {
    const { disabled, label, onChange, ...restProps } = props

    return (
      <Typography as={'label'} className={clsx(s.container, disabled && s.disabled)}>
        <CheckboxPrimitive.Root
          className={s.box}
          disabled={disabled}
          ref={ref}
          {...restProps}
          onCheckedChange={onChange}
        >
          <CheckboxPrimitive.Indicator className={s.indicator}>
            <Check color={disabled ? '#808080' : '#fff'} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label}
      </Typography>
    )
  }
)
