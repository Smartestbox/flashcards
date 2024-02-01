import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

type TextFieldProps = {
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = (props: TextFieldProps) => {
  const { disabled, label, placeholder = 'Input', ...restProps } = props

  return (
    <div className={s.container}>
      {label && (
        <Typography as={'span'} className={clsx(disabled ? s.disabled : s.label)} variant={'body2'}>
          {label}
        </Typography>
      )}
      <input
        className={clsx(s.field)}
        disabled={disabled}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  )
}
