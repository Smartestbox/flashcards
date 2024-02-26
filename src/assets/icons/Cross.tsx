import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { color = '#FFF', ...restProps } = props

  return (
    <svg
      fill={'none'}
      height={20}
      ref={ref}
      viewBox={'0 0 24 24'}
      width={20}
      xmlns={'http://www.w3.org/2000/svg'}
      {...restProps}
    >
      <g clipPath={'url(#a)'}>
        <path
          d={
            'm13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29A1 1 0 0 0 7 18.01a1 1 0 0 0 .71-.3l4.29-4.3 4.29 4.3a1 1 0 1 0 1.42-1.42L13.41 12Z'
          }
          fill={color}
        />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path d={'M0 0h24v24H0z'} fill={'#fff'} />
        </clipPath>
      </defs>
    </svg>
  )
}

export default memo(forwardRef(SvgComponent))
