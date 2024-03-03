import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import s from './Tabs.module.scss'

type Props = {
  label?: string
} & Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, 'asChild'>

export const Tabs = forwardRef<ElementRef<typeof TabsPrimitive.Root>, Props>((props, ref) => {
  const { children, label, onChange, ...rest } = props

  return (
    <TabsPrimitive.Root className={s.root} {...rest} ref={ref}>
      {label && (
        <Typography as={'label'} className={s.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <TabsPrimitive.List className={s.list}>{children}</TabsPrimitive.List>
    </TabsPrimitive.Root>
  )
})
