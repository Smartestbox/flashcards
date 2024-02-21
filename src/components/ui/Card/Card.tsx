import { ComponentPropsWithoutRef, ElementRef, ElementType, Ref, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = forwardRef(
  <T extends ElementType = 'div'>(props: CardProps<T>, ref: Ref<ElementRef<T>>) => {
    const { as, className, ...restProps } = props

    const Component: ElementType = as || 'div'

    return <Component className={clsx(s.card, className)} ref={ref} {...restProps} />
  }
)
