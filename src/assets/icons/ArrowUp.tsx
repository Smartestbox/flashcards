import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { color = '#fff', ...rest } = props

  return (
    <svg
      fill={'none'}
      height={15}
      ref={ref}
      width={15}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <path
        clipRule={'evenodd'}
        d={
          'M3.135 8.842a.5.5 0 0 0 .707.023L7.5 5.435l3.658 3.43a.5.5 0 0 0 .684-.73l-4-3.75a.5.5 0 0 0-.684 0l-4 3.75a.5.5 0 0 0-.023.707Z'
        }
        fill={color}
        fillRule={'evenodd'}
      />
    </svg>
  )
}

export default memo(forwardRef(SvgComponent))
