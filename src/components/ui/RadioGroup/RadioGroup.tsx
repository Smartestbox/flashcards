import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './RadioGroup.module.scss'

type Option = {
  label: string
  value: string
}

type RadioGroupProps = {
  options: Option[]
} & Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, 'asChild'>

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  (props, ref) => {
    const { className, disabled, options, ...restProps } = props

    return (
      <RadioGroupPrimitive.Root
        className={clsx(s.RadioGroupPrimitiveRoot, className)}
        disabled={disabled}
        ref={ref}
        {...restProps}
      >
        {options.map(option => {
          return (
            <Typography
              as={'label'}
              className={clsx(s.Label, disabled && s.disabled)}
              key={option.value}
            >
              <RadioGroupPrimitive.Item className={s.RadioGroupPrimitiveItem} value={option.value}>
                <RadioGroupPrimitive.Indicator className={s.RadioGroupPrimitiveIndicator} />
              </RadioGroupPrimitive.Item>
              {option.label}
            </Typography>
          )
        })}
      </RadioGroupPrimitive.Root>
    )
  }
)
