import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as SliderPrimitive from '@radix-ui/react-slider'

import s from './Slider.module.scss'

type SliderProps = {
  value: (null | number)[]
} & Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value'>

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (props, ref) => {
    const { max, min = 0, onValueChange, value, ...rest } = props

    useEffect(() => {
      if (value?.[1] === undefined || value?.[1] === null) {
        onValueChange?.([value?.[0] ?? 0, max ?? 0])
      }
    }, [max, value, onValueChange])

    return (
      <div className={s.Container}>
        <Typography as={'span'} className={s.RangeValue}>
          {value?.[0]}
        </Typography>
        <SliderPrimitive.Root
          className={s.SliderRoot}
          max={max}
          onValueChange={onValueChange}
          ref={ref}
          value={[value[0] ?? 0, value[1] ?? max ?? 0]}
          {...rest}
        >
          <SliderPrimitive.Track className={s.SliderTrack}>
            <SliderPrimitive.Range className={s.SliderRange} />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className={s.SliderThumb} />
          <SliderPrimitive.Thumb className={s.SliderThumb} />
        </SliderPrimitive.Root>
        <Typography as={'span'} className={s.RangeValue}>
          {value?.[1]}
        </Typography>
      </div>
    )
  }
)
