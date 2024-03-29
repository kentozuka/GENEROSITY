import { Skeleton } from '@/components/ui/skeleton'

export default function CourseResultSkeleton() {
  return (
    <div className="py-6">
      <div className="flex items-center gap-2 pb-4">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-20 h-4" />
      </div>

      <div className="grid gap-2 pb-8 md:grid-cols-3">
        {Array.from({ length: 27 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-64" />
        ))}
      </div>
    </div>
  )
}
