import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { color = '#fff', ...restProps } = props

  return (
    <svg
      fill={'none'}
      height={16}
      ref={ref}
      width={16}
      xmlns={'http://www.w3.org/2000/svg'}
      {...restProps}
    >
      <path
        clipRule={'evenodd'}
        d={
          'M12.854 2.854a.5.5 0 0 0-.708-.708L7.5 6.793 2.854 2.146a.5.5 0 1 0-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 0 0 .708.708L7.5 8.207l4.646 4.647a.5.5 0 0 0 .708-.708L8.207 7.5l4.647-4.646Z'
        }
        fill={color}
        fillRule={'evenodd'}
      />
    </svg>
  )
}

export default memo(forwardRef(SvgComponent))
