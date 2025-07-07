import type { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type CardProps = HTMLAttributes<HTMLDivElement>

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl border bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm p-6',
        className
      )}
      {...props}
    />
  )
}
