import { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.scss'

type TypographyProps<T extends ElementType> = {
  as?: T
  className?: string
  disabled?: boolean
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
    | 'link3'
    | 'link4'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const { as: Component = 'span', className, variant = 'body1', ...restProps } = props

  return <Component className={clsx(s.text, s[variant], className)} {...restProps} />
}
