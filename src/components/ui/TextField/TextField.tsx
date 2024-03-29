import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { ClosedEye, Cross, OpenedEye, Search } from '@/assets/icons'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './TextField.module.scss'

export type TextFieldProps = {
  className?: string
  errorText?: string
  label?: string
  onChangeValue?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { className, disabled, errorText, label, onChange, onChangeValue, type, ...restProps } =
    props
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const inputType = type === 'password' && isShowPassword ? 'text' : type

  const styles = {
    container: clsx(s.Container, className),
    input: clsx(s.Input, type === 'search' && s.SearchInput, errorText && s.Error),
    label: clsx(disabled ? s.Disabled : s.Label),
    leftIcon: clsx(s.LeftIcon, disabled && s.Disabled),
    leftIconColor: clsx((disabled && '#4C4C4C') || (errorText && '#F23D61') || '#808080'),
    rightIcon: clsx(s.RightIcon, disabled && s.Disabled),
    rightIconColor: clsx(disabled ? '#4C4C4C' : '#FFFFFF'),
  }

  const handleClickShowPassword = () => {
    setIsShowPassword(prev => !prev)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.currentTarget.value)
  }
  const handleClickClearField = () => {
    onChangeValue?.('')
  }

  return (
    <div className={styles.container}>
      {label && (
        <Typography as={'label'} className={styles.label} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={s.InputWrapper}>
        {type === 'search' && <Search className={styles.leftIcon} color={styles.leftIconColor} />}
        <input
          className={styles.input}
          disabled={disabled}
          onChange={handleChange}
          ref={ref}
          type={inputType}
          {...restProps}
        />
        {type === 'search' && restProps.value && (
          <Cross
            className={styles.rightIcon}
            color={styles.rightIconColor}
            onClick={handleClickClearField}
          />
        )}
        {type === 'password' && (
          <div className={s.RightIcon} onClick={handleClickShowPassword}>
            {isShowPassword ? (
              <OpenedEye className={styles.rightIcon} color={styles.rightIconColor} />
            ) : (
              <ClosedEye className={styles.rightIcon} color={styles.rightIconColor} />
            )}
          </div>
        )}
      </div>
      {!!errorText && (
        <Typography as={'span'} className={s.ErrorLabel}>
          {errorText}
        </Typography>
      )}
    </div>
  )
})
