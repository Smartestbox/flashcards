import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Cross } from '@/assets/icons'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import s from './Modal.module.scss'

type ModalProps = {
  title?: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DialogPrimitive.Root>

export const Modal = (props: ModalProps) => {
  const { children, title, trigger, ...rest } = props

  return (
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={s.DialogPrimitiveOverlay} />
        <DialogPrimitive.Content className={s.DialogPrimitiveContent}>
          <Card>
            {title && (
              <div className={s.title}>
                <Typography as={'h2'} variant={'h2'}>
                  {title}
                </Typography>
                <DialogPrimitive.Close>
                  <Cross />
                </DialogPrimitive.Close>
              </div>
            )}
            {children}
          </Card>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
