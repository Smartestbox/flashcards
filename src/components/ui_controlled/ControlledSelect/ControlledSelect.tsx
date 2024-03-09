import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { SelectProps } from '@/components/ui/Select'
import { Select } from '@radix-ui/react-select'

type ControlledSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<SelectProps, 'onValueChange' | 'value'>
export const ControlledSelect = <T extends FieldValues>(props: ControlledSelectProps<T>) => {
  const { control, defaultValue, name, ...rest } = props
  const {
    field: { onChange, value },
  } = useController({ control, defaultValue, name })

  return <Select onValueChange={onChange} value={value} {...rest} />
}
