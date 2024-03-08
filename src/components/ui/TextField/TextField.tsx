import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { ClosedEye, Cross, OpenedEye, Search } from '@/assets/icons'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

type TextFieldProps = {
  errorText?: string
  label?: string
  onChangeValue?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { disabled, errorText, label, onChange, onChangeValue, type, value, ...restProps } = props
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const inputType = type === 'password' && isShowPassword ? 'text' : type

  const styles = {
    input: clsx(s.input, errorText && s.error, type === 'search' && s.searchInput),
    label: clsx(disabled ? s.disabled : s.label),
    leftIcon: clsx(s.leftIcon),
    leftIconColor: clsx((disabled && '#4C4C4C') || (errorText && '#F23D61') || '#808080'),
    rightIcon: clsx(s.rightIcon),
    rightIconColor: clsx(disabled ? '#4C4C4C' : '#FFFFFF'),
  }

  const handleClickShowPassword = () => {
    setIsShowPassword(prev => !prev)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
  }
  const handleClickClearField = () => {
    onChangeValue?.('')
  }

  return (
    <div className={s.container}>
      {label && (
        <Typography as={'label'} className={styles.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={s.inputWrapper}>
        {type === 'search' && <Search className={styles.leftIcon} color={styles.leftIconColor} />}
        <input
          className={styles.input}
          disabled={disabled}
          onChange={handleChange}
          ref={ref}
          type={inputType}
          value={value}
          {...restProps}
        />
        {type === 'search' && value && (
          <Cross
            className={styles.rightIcon}
            color={styles.rightIconColor}
            onClick={handleClickClearField}
          />
        )}
        {type === 'password' && (
          <div className={s.rightIcon} onClick={handleClickShowPassword}>
            {isShowPassword ? (
              <OpenedEye className={styles.rightIcon} color={styles.rightIconColor} />
            ) : (
              <ClosedEye className={styles.rightIcon} color={styles.rightIconColor} />
            )}
          </div>
        )}
      </div>
      {!!errorText && (
        <Typography as={'span'} className={s.errorLabel}>
          {errorText}
        </Typography>
      )}
    </div>
  )
})
