import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={15}
    ref={ref}
    width={15}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 0 1-.944.12l-2.75-2.5a.625.625 0 0 1 .841-.925l2.208 2.007 3.849-5.886a.625.625 0 0 1 .865-.181Z'
      }
      fill={'currentColor'}
      fillRule={'evenodd'}
    />
  </svg>
)

export default memo(forwardRef(SvgComponent))
