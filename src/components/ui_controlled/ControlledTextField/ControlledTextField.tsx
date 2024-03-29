import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/TextField'

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>(props: ControlledTextFieldProps<T>) => {
  const { control, defaultValue, name, ...rest } = props
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return <TextField {...rest} {...field} errorText={error?.message} />
}
