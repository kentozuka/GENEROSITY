import Weekday from '../atoms/Weekday'

export default function TimeDisplay({
  dayIndex,
  period
}: {
  dayIndex?: number
  period?: number
}) {
  return (
    <div className="flex gap-1 items-center">
      <Weekday dayIndex={dayIndex} />
      <p className="text-sm">{period}時限</p>
    </div>
  )
}
