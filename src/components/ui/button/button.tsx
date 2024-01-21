import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

type ButtonProps<T extends ElementType> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary' } = props

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...props}
    />
  )
}
