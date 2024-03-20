import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'48px'}
    stroke={'#8C61FF'}
    viewBox={'0 0 24.00 24.00'}
    width={'48px'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <g id={'SVGRepo_bgCarrier'} strokeWidth={'0'}></g>
    <g
      id={'SVGRepo_tracerCarrier'}
      stroke={'#CCCCCC'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'0.336'}
    ></g>
    <g id={'SVGRepo_iconCarrier'}>
      <path
        clipRule={'evenodd'}
        d={
          'M6.96899 5.8832C6.82644 5.9589 6.66577 6 6.5 6H5C3.34315 6 2 7.34315 2 9V18C2 19.6569 3.34315 21 5 21H19C19.9023 21 20.7115 20.6017 21.2615 19.9713C21.0898 19.9293 20.927 19.8412 20.7929 19.7071L19.7487 18.6629C19.5655 18.8697 19.298 19 19 19H5C4.44772 19 4 18.5523 4 18V9C4 8.44772 4.44772 8 5 8H6.5C7.20173 8 7.87302 7.75448 8.4041 7.31832L6.96899 5.8832ZM9.66393 8.57815C8.07949 9.41694 7 11.0824 7 13C7 15.7614 9.23858 18 12 18C13.9176 18 15.5831 16.9205 16.4219 15.3361L14.8908 13.805C14.539 15.0709 13.378 16 12 16C10.3431 16 9 14.6569 9 13C9 11.622 9.92908 10.461 11.195 10.1092L9.66393 8.57815ZM16.9993 13.0851L11.9149 8.00071C11.9432 8.00024 11.9716 8 12 8C14.7614 8 17 10.2386 17 13C17 13.0284 16.9998 13.0568 16.9993 13.0851ZM20 16.0858V9C20 8.44772 19.5523 8 19 8H17.5C16.5557 8 15.6666 7.55542 15.1 6.8L14.05 5.4C13.8611 5.14819 13.5648 5 13.25 5H10.75C10.4352 5 10.1389 5.14819 9.95 5.4L9.67752 5.76331L8.24895 4.33474L8.35 4.2C8.91656 3.44458 9.80573 3 10.75 3H13.25C14.1943 3 15.0834 3.44458 15.65 4.2L16.7 5.6C16.8889 5.85181 17.1852 6 17.5 6H19C20.6569 6 22 7.34315 22 9V18C22 18.0283 21.9996 18.0565 21.9988 18.0846L20 16.0858Z'
        }
        fill={'#8C61FF'}
        fillRule={'evenodd'}
      ></path>
      <path
        d={'M3 3L21 21'}
        stroke={'#8C61FF'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'2.1'}
      ></path>
    </g>
  </svg>
)

export default memo(forwardRef(SvgComponent))
