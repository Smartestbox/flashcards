import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './Page.module.scss'

type PageProps = {
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const Page = ({ children, className, ...rest }: PageProps) => {
  return (
    <div {...rest} className={clsx(s.PageContainer, className)}>
      {children}
    </div>
  )
}
