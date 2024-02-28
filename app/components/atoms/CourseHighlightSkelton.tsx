import { Skeleton } from '../ui/skeleton'

export function CourseHighlightSkelton() {
  return (
    <div className="py-4">
      <div className="flex items-center gap-2 pb-4 text-xl">
        <Skeleton className="w-10 h-10 rounded" />
        <Skeleton className="w-32 h-6" />
      </div>
      <div className="flex flex-wrap w-full gap-2 pb-4 overflow-visible md:flex-nowrap md:overflow-x-scroll">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="w-full md:w-auto md:flex-[0_0_30%]" key={index}>
            <Skeleton className="w-full h-72" />
          </div>
        ))}
      </div>
    </div>
  )
}
