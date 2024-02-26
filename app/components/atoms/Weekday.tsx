import clsx from 'clsx'

const daysData = [
  { day: '日', color: 'bg-red-200' },
  { day: '月', color: 'bg-indigo-200' },
  { day: '火', color: 'bg-orange-200' },
  { day: '水', color: 'bg-blue-200' },
  { day: '木', color: 'bg-green-200' },
  { day: '金', color: 'bg-yellow-200' },
  { day: '土', color: 'bg-red-200' }
]

export default function Weekday({ dayIndex }: { dayIndex?: number }) {
  const dayData = daysData[dayIndex || 0]
  const sharedStyle = 'block leading-4 rounded-sm text-xs p-1'
  const emptyStyle = 'bg-gray-200 animate-pulse'

  // out of boundary, full-width space to keep the layout
  if (dayData === undefined)
    return <span className={clsx(sharedStyle, emptyStyle)}>　</span>

  return <span className={clsx(sharedStyle, dayData.color)}>{dayData.day}</span>
}