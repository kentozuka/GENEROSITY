import { Skeleton } from '@/components/ui/skeleton'

export default function MultiLine({ length = 6 }: { length?: number }) {
  return (
    <div className="flex flex-col w-full gap-2">
      {Array.from({ length }, (_, i) => (
        <Skeleton key={i} className="w-full h-4" />
      ))}
      <Skeleton className="w-2/3 h-4" />
    </div>
  )
}
