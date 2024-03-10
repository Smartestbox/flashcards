import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/RadioGroup'

type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'onChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>(
  props: ControlledRadioGroupProps<T>
) => {
  const { control, defaultValue, name, ...rest } = props

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return <RadioGroup onValueChange={onChange} value={value} {...rest} />
}
