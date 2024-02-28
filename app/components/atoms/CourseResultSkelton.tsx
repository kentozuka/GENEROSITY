import { Skeleton } from '../ui/skeleton'

export default function CourseResultSkelton() {
  return (
    <div className="py-6">
      <div className="flex items-center gap-2 pb-4">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-20 h-4" />
      </div>

      <div className="grid grid-cols-3 gap-2 pb-8">
        {Array.from({ length: 27 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-64" />
        ))}
      </div>
    </div>
  )
}
