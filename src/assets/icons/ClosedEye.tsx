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
          'M14.765 6.076a.5.5 0 0 1 .159.689 9.519 9.519 0 0 1-1.554 1.898l1.201 1.201a.5.5 0 0 1-.707.707l-1.263-1.263a8.472 8.472 0 0 1-2.667 1.343l.449 1.677a.5.5 0 0 1-.966.258l-.458-1.709a8.666 8.666 0 0 1-2.918 0l-.458 1.71a.5.5 0 1 1-.966-.26l.45-1.676a8.473 8.473 0 0 1-2.668-1.343l-1.263 1.263a.5.5 0 0 1-.707-.707l1.2-1.201A9.521 9.521 0 0 1 .077 6.765a.5.5 0 1 1 .848-.53 8.425 8.425 0 0 0 1.77 2.034A7.462 7.462 0 0 0 7.5 9.999c2.808 0 5.156-1.493 6.576-3.764a.5.5 0 0 1 .689-.159Z'
        }
        fill={color}
        fillRule={'evenodd'}
      />
    </svg>
  )
}

export default memo(forwardRef(SvgComponent))