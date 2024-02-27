import clsx from 'clsx'

import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'

export default function Term({ text }: { text?: string }) {
  const sharedStyle = 'block leading-4 rounded-sm text-xs max-w-12 text-center'
  const emptyStyle = 'bg-gray-200 animate-pulse w-11 h-6'

  if (!text) return <Skeleton className={clsx(sharedStyle, emptyStyle)} />

  return (
    <Badge variant="outline" className="text-xs font-normal">
      {text}
    </Badge>
  )
}
