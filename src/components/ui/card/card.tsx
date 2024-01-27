import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType>(props: CardProps<T>) => {
  const { as: Component = 'div', className, ...restProps } = props

  return <Component className={clsx(s.card, className)} {...restProps} />
}
