import Weekday from '@/components/atoms/Weekday'

export default function TimeDisplay({
  dayIndex,
  period
}: {
  dayIndex?: number
  period?: number
}) {
  return (
    <div className="flex items-center gap-1">
      <Weekday dayIndex={dayIndex} />
      <p className="text-sm text-generous-500">{period}時限</p>
    </div>
  )
}
