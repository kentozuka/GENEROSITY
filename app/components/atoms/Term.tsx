import clsx from 'clsx'

import { Badge } from '../ui/badge'

export default function Term({ text }: { text?: string }) {
  const sharedStyle = 'block leading-4 rounded-sm text-xs max-w-12 text-center'
  const emptyStyle = 'bg-gray-200 animate-pulse w-11 h-6'

  if (!text) return <span className={clsx(sharedStyle, emptyStyle)}></span>

  return (
    <Badge variant="outline" className="font-normal text-xs">
      {text}
    </Badge>
  )
}
