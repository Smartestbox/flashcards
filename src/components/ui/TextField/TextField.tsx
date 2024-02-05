import { ComponentPropsWithoutRef, useState } from 'react'

import { ClosedEye, OpenedEye, Search } from '@/assets/icons'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

type TextFieldProps = {
  error?: boolean
  errorLabel?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = (props: TextFieldProps) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const { disabled, error, errorLabel, label, placeholder = 'Input', type, ...rest } = props

  const inputType = type === 'password' && isShowPassword ? 'text' : type

  const styles = {
    eyeColor: clsx(disabled ? '#4C4C4C' : '#FFFFFF'),
    input: clsx(s.field, error && s.error, type === 'search' && s.searchInput),
    label: clsx(disabled ? s.disabled : s.label),
    searchColor: clsx((disabled && '#4C4C4C') || (error && '#F23D61') || '#808080'),
  }

  const handleClickShowPassword = () => {
    setIsShowPassword(prev => !prev)
  }

  return (
    <div className={s.container}>
      {label && (
        <Typography as={'span'} className={styles.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={s.inputWrapper}>
        {type === 'search' && <Search className={s.searchIcon} color={styles.searchColor} />}
        {type === 'password' && (
          <div className={s.passwordIcon} onClick={handleClickShowPassword}>
            {isShowPassword ? (
              <OpenedEye color={styles.eyeColor} />
            ) : (
              <ClosedEye color={styles.eyeColor} />
            )}
          </div>
        )}
        <input
          className={styles.input}
          disabled={disabled}
          placeholder={error ? 'Error' : placeholder}
          type={inputType}
          {...rest}
        />
      </div>
      {!!errorLabel && (
        <Typography as={'span'} className={s.errorLabel}>
          {errorLabel}
        </Typography>
      )}
    </div>
  )
}
