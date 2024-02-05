import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { color, ...rest } = props

  return (
    <svg
      fill={'none'}
      height={20}
      ref={ref}
      viewBox={'0 0 14 14'}
      width={20}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <path
        clipRule={'evenodd'}
        d={
          'M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708L9.31 10.016Z'
        }
        fill={color}
        fillRule={'evenodd'}
      />
    </svg>
  )
}

export default memo(forwardRef(SvgComponent))
