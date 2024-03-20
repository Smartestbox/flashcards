import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import s from './Tabs.module.scss'

type Props = {
  label?: string
} & Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, 'asChild'>

export const Tabs = forwardRef<ElementRef<typeof TabsPrimitive.Root>, Props>((props, ref) => {
  const { children, label, ...rest } = props

  return (
    <TabsPrimitive.Root className={s.Container} {...rest} ref={ref}>
      {label && (
        <Typography as={'label'} className={s.Label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <TabsPrimitive.List className={s.List}>{children}</TabsPrimitive.List>
    </TabsPrimitive.Root>
  )
})
