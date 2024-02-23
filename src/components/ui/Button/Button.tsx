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

type ButtonProps<T extends ElementType> = {
  as?: T
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

interface PolymorphRef<T extends ElementType> {
  ref?: Ref<ElementRef<T>>
}

type ButtonWithRef = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & PolymorphRef<T>
) => ReactNode

export const Button: ButtonWithRef = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ElementRef<T>) => {
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
