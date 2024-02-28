import clsx from 'clsx'

import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'

export default function Term({ text }: { text?: string }) {
  const className = clsx(
    'text-xs font-normal bg-opacity-50 text-generous-500',
    {
      'bg-pink-100': text === '春学期',
      'bg-orange-100': text === '秋学期'
    }
  )

  if (!text) return <Skeleton className="w-12 h-6 rounded-full" />

  return (
    <Badge variant="outline" className={className}>
      {text}
    </Badge>
  )
}
