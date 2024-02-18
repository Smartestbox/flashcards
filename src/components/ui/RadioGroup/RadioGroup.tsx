import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import s from './RadioGroup.module.scss'

export const RadioGroup = () => (
  <form>
    <RadioGroupPrimitive.Root
      aria-label={'View density'}
      className={s.RadioGroupPrimitiveRoot}
      defaultValue={'default'}
    >
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupPrimitive.Item className={s.RadioGroupPrimitiveItem} id={'r1'} value={'default'}>
          <RadioGroupPrimitive.Indicator className={s.RadioGroupPrimitiveIndicator} />
        </RadioGroupPrimitive.Item>
        <label className={s.Label} htmlFor={'r1'}>
          Default
        </label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupPrimitive.Item
          className={s.RadioGroupPrimitiveItem}
          id={'r2'}
          value={'comfortable'}
        >
          <RadioGroupPrimitive.Indicator className={s.RadioGroupPrimitiveIndicator} />
        </RadioGroupPrimitive.Item>
        <label className={s.Label} htmlFor={'r2'}>
          Comfortable
        </label>
      </div>
      <div style={{ alignItems: 'center', display: 'flex' }}>
        <RadioGroupPrimitive.Item className={s.RadioGroupPrimitiveItem} id={'r3'} value={'compact'}>
          <RadioGroupPrimitive.Indicator className={s.RadioGroupPrimitiveIndicator} />
        </RadioGroupPrimitive.Item>
        <label className={s.Label} htmlFor={'r3'}>
          Compact
        </label>
      </div>
    </RadioGroupPrimitive.Root>
  </form>
)
