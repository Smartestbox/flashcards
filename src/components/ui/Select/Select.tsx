import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { ChevronDown } from '@/assets/icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './Select.module.scss'

export const Select = (props: ComponentPropsWithoutRef<typeof SelectPrimitive.Root>) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger aria-label={'Food'} className={s.SelectTrigger}>
        <SelectPrimitive.Value placeholder={'Select a fruit…'} />
        <SelectPrimitive.Icon className={s.SelectIcon}>
          <ChevronDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className={s.SelectContent} position={'popper'} sideOffset={-1}>
          <SelectPrimitive.Viewport className={s.SelectViewport}>
            <SelectItem value={'apple'}>Apple</SelectItem>
            <SelectItem value={'banana'}>Banana</SelectItem>
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
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})
