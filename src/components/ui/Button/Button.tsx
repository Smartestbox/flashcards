import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactElement,
  ReactNode,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './Button.module.scss'

type InferType<T> = T extends ElementType<infer U> ? U : never

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
  variant?: 'icon' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<InferType<T>>) => {
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

/** Accepts all props of the native button element. */
export default Button as <T extends ElementType = 'button'>(
  props: ButtonProps<T> & {
    ref?: ForwardedRef<ElementRef<T>>
  }
) => ReactElement
