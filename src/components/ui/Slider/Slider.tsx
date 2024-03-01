import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'
import * as SliderPrimitive from '@radix-ui/react-slider'

import s from './Slider.module.scss'

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>((props, ref) => {
  const { max, onValueChange, value, ...rest } = props

  return (
    <div className={s.container}>
      <Typography as={'span'} className={s.rangeValue}>
        {value?.[0]}
      </Typography>
      <SliderPrimitive.Root
        className={s.SliderRoot}
        max={max}
        onValueChange={onValueChange}
        ref={ref}
        value={value}
        {...rest}
      >
        <SliderPrimitive.Track className={s.SliderTrack}>
          <SliderPrimitive.Range className={s.SliderRange} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={s.SliderThumb} />
        <SliderPrimitive.Thumb className={s.SliderThumb} />
      </SliderPrimitive.Root>
      <Typography as={'span'} className={s.rangeValue}>
        {value?.[1]}
      </Typography>
    </div>
  )
})
