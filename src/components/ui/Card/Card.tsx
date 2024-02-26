import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactElement,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'

type InferType<T> = T extends ElementType<infer U> ? U : never

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

const Card = forwardRef(
  <T extends ElementType = 'div'>(props: CardProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const { as, className, ...restProps } = props

    const Component: ElementType = as ?? 'div'

    return <Component className={clsx(s.card, className)} ref={ref} {...restProps} />
  }
)

/** Accepts all props of the native button element. */
export default Card as <T extends ElementType = 'div'>(
  props: CardProps<T> & {
    ref?: ForwardedRef<ElementRef<T>>
  }
) => ReactElement
