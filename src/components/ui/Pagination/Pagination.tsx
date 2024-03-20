import { ArrowLeft, ArrowRight } from '@/assets/icons'
import { Select, SelectProps } from '@/components/ui/Select'
import { Typography } from '@/components/ui/Typography'
import { clsx } from 'clsx'

import s from './Pagination.module.scss'

import { usePagination } from './usePagination'

type Props = {
  className?: string
  currentPage: number
  onChangePage: (page: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & Omit<SelectProps, 'fullWidth' | 'label' | 'pagination'>

export const Pagination = ({
  className,
  currentPage = 1,
  onChangePage,
  pageSize,
  siblingCount = 1,
  totalCount,
  ...restProps
}: Props) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return (
      <Typography as={'div'} className={s.selectContainer} variant={'body2'}>
        Show <Select {...restProps} pagination /> on page
      </Typography>
    )
  }

  const handleClickPrev = () => {
    onChangePage(currentPage - 1)
  }

  const handleClickNext = () => {
    onChangePage(currentPage + 1)
  }

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1]

  return (
    <div className={clsx(s.container, className)}>
      <div className={s.pagination}>
        <button
          className={clsx(s.item, isFirstPage && s.disabled)}
          disabled={isFirstPage}
          onClick={handleClickPrev}
        >
          <ArrowLeft color={isFirstPage ? '#808080' : '#fff'} />
        </button>
        {paginationRange.map((num, i) => {
          if (num === 0) {
            return (
              <span className={clsx(s.item, s.dots)} key={i}>
                &#8230;
              </span>
            )
          }
          const isCurrentPage = num === currentPage

          const handleChangePage = () => onChangePage(num)

          return (
            <button
              className={clsx(s.item, isCurrentPage && s.selected)}
              key={i}
              onClick={handleChangePage}
            >
              <Typography as={'span'} variant={'body2'}>
                {num}
              </Typography>
            </button>
          )
        })}
        <button
          className={clsx(s.item, isLastPage && s.disabled)}
          disabled={isLastPage}
          onClick={handleClickNext}
        >
          <ArrowRight color={isLastPage ? '#808080' : '#fff'} />
        </button>
      </div>
      <Typography as={'div'} className={s.selectContainer} variant={'body2'}>
        Show <Select {...restProps} pagination /> on page
      </Typography>
    </div>
  )
}
