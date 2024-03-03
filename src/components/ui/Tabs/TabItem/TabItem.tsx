import { ComponentPropsWithoutRef } from 'react'

import * as RadixTabItem from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './TamItem.module.scss'

type Props = ComponentPropsWithoutRef<typeof RadixTabItem.Trigger>

export const TabItem = (props: Props) => {
  const { children, className, ...rest } = props

  return (
    <RadixTabItem.Trigger className={clsx(s.trigger, className)} {...rest}>
      {children}
    </RadixTabItem.Trigger>
  )
}
