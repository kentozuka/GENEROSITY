import clsx from 'clsx'

import { Skeleton } from '@/components/ui/skeleton'

const daysData = [
  { day: '日', color: 'bg-red-200' },
  { day: '月', color: 'bg-indigo-200' },
  { day: '火', color: 'bg-orange-200' },
  { day: '水', color: 'bg-blue-200' },
  { day: '木', color: 'bg-green-200' },
  { day: '金', color: 'bg-yellow-200' },
  { day: '土', color: 'bg-red-200' }
]

const LocalSkeleton = () => <Skeleton className="w-6 h-6" />

export default function Weekday({ dayIndex }: { dayIndex?: number }) {
  const sharedStyle = 'block leading-4 rounded-sm text-xs py-0.5 px-1'
  const emptyStyle = 'bg-gray-200 animate-pulse'

  if (dayIndex === undefined) return <LocalSkeleton />

  const dayData = daysData[dayIndex]
  // out of boundary, full-width space to keep the layout
  if (dayData === undefined) return <LocalSkeleton />

  return <span className={clsx(sharedStyle, dayData.color)}>{dayData.day}</span>
}
