import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { ChevronDown } from '@/assets/icons'
import { Typography } from '@/components/ui/Typography'
import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

type Option = {
  title: string
  value: string
}

type SelectProps = {
  className?: string
  fullWidth?: boolean
  label?: string
  options: Option[]
  placeholder?: ReactNode
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = (props: SelectProps) => {
  const {
    className,
    fullWidth,
    label,
    options,
    placeholder = 'Select value...',
    ...restProps
  } = props

  return (
    <SelectPrimitive.Root {...restProps}>
      {label && (
        <Typography className={clsx(s.label, restProps.disabled && s.disabled)} variant={'body2'}>
          {label}
        </Typography>
      )}
      <SelectPrimitive.Trigger className={clsx(s.SelectTrigger, fullWidth && s.fullWidth)}>
        <Typography>
          <SelectPrimitive.Value placeholder={placeholder} />
        </Typography>
        <SelectPrimitive.Icon className={s.SelectIcon}>
          <ChevronDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          avoidCollisions={false}
          className={s.SelectContent}
          position={'popper'}
          sideOffset={-1}
        >
          <SelectPrimitive.Viewport className={s.SelectViewport}>
            {options.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.title}
              </SelectItem>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

const SelectItem = forwardRef((props: any, forwardedRef) => {
  const { children, className, ...rest } = props

  return (
    <SelectPrimitive.Item className={clsx(s.SelectItem, className)} {...rest} ref={forwardedRef}>
      <Typography>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </Typography>
    </SelectPrimitive.Item>
  )
})
