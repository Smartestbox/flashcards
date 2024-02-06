import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { color, ...rest } = props

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
          'M7.5 11c-2.697 0-4.97-1.378-6.404-3.5C2.53 5.378 4.803 4 7.5 4s4.97 1.378 6.404 3.5C12.47 9.622 10.197 11 7.5 11Zm0-8C4.308 3 1.656 4.706.076 7.235a.5.5 0 0 0 0 .53C1.656 10.294 4.308 12 7.5 12s5.844-1.706 7.424-4.235a.5.5 0 0 0 0-.53C13.344 4.706 10.692 3 7.5 3Zm0 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
        }
        fill={color}
        fillRule={'evenodd'}
      />
    </svg>
  )
}

export default memo(forwardRef(SvgComponent))