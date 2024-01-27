import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

type TypographyProps<T extends ElementType> = {
  as?: T
  className?: string
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, variant = 'body1', ...restProps } = props

  return <Component className={clsx(s.text, s[variant], className)} {...restProps} />
}
