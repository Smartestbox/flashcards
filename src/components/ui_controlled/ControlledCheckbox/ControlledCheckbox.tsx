import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/Checkbox'

type ControlledCheckboxProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'rules'
> &
  Omit<CheckboxProps, 'checked' | 'onChange'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({ control, disabled: rest.disabled, name: rest.name, shouldUnregister })

  return <Checkbox {...rest} checked={value} onBlur={onBlur} onChange={onChange} ref={ref} />
}
