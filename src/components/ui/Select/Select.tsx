import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { ArrowDown } from '@/assets/icons'
import { Typography } from '@/components/ui/Typography'
import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

type Option = {
  title: string
  value: string
}

export type SelectProps = {
  className?: string
  fullWidth?: boolean
  label?: string
  options: Option[]
  pagination?: boolean
  placeholder?: ReactNode
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = (props: SelectProps) => {
  const { className, disabled, fullWidth, label, options, pagination, placeholder, ...restProps } =
    props

  return (
    <SelectPrimitive.Root {...restProps} disabled={disabled}>
      {label && (
        <Typography className={clsx(s.label, disabled && s.disabled)} variant={'body2'}>
          {label}
        </Typography>
      )}
      <SelectPrimitive.Trigger
        className={clsx(s.selectTrigger, fullWidth && s.fullWidth, pagination && s.pagination)}
      >
        <Typography variant={pagination ? 'body2' : 'body1'}>
          <SelectPrimitive.Value placeholder={placeholder} />
        </Typography>
        <SelectPrimitive.Icon className={s.icon}>
          <ArrowDown color={disabled ? '#4C4C4C' : '#fff'} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={s.selectContent} position={'popper'} sideOffset={-1}>
          <SelectPrimitive.Viewport>
            {options.map(option => (
              <SelectItem
                className={clsx(s.selectItem, s.pagination)}
                key={option.value}
                value={option.value}
              >
                <Typography variant={pagination ? 'body2' : 'body1'}>{option.title}</Typography>
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
