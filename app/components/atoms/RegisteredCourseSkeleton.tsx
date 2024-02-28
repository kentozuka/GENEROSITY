import { Skeleton } from '@/components/ui/skeleton'

export default function RegisteredCourseSkeleton() {
  return (
    <div className="pb-8">
      <div className="flex items-center gap-2 pt-2 pb-4">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-12 h-4" />
      </div>

      <div className="grid gap-2 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-48" />
        ))}
      </div>
    </div>
  )
}
