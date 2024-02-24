import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'

interface PolymorphRef<T extends ElementType> {
  ref?: Ref<ElementRef<T>>
}

type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

type CardWithRef = <T extends ElementType = 'div'>(
  props: CardProps<T> & PolymorphRef<T>
) => ReactNode

export const Card: CardWithRef = forwardRef(
  <T extends ElementType = 'div'>(props: CardProps<T>, ref: ElementRef<T>) => {
    const { as, className, ...restProps } = props

    const Component: ElementType = as ?? 'div'

    return <Component className={clsx(s.card, className)} ref={ref} {...restProps} />
  }
)
