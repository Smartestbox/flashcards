import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: Ref<ElementRef<T>>) => {
    const { as, children, className, fullWidth, icon, variant = 'primary', ...restProps } = props

    const Component: ElementType = as || 'button'

    return (
      <Component
        className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
        {...restProps}
        ref={ref}
      >
        {icon}
        {children}
      </Component>
    )
  }
)
