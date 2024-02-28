import NonFunctionalTabs from '@/components/atoms/NonFunctionalTabs'
import ProfileDisplay from '@/components/molecures/ProfileDisplay'
import TimeDisplay from '@/components/molecures/TimeDisplay'
import MultiLine from '@/components/atoms/MultiLineSkeleton'
import { Skeleton } from '@/components/ui/skeleton'
import Credit from '@/components/atoms/Credit'
import Term from '@/components/atoms/Term'

export default function CourseDetailContent() {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-1">
        <Skeleton className="w-[300px] max-w-sm md:w-[1000px] h-4 md:max-w-lg" />
        <Skeleton className="w-1/2 h-4" />
      </div>

      <div className="flex gap-4 py-2">
        <Credit />
        <Term />
        <TimeDisplay />
      </div>
      <ProfileDisplay />

      <div className="flex max-w-sm gap-2 py-6">
        <Skeleton className="w-full h-10" />
        <Skeleton className="h-10 w-14" />
      </div>

      <div className="w-full">
        <NonFunctionalTabs />

        <div className="py-8">
          <div className="pb-4">
            <h2 className="text-lg">副題</h2>
            <div className="py-2">
              <MultiLine length={3} />
            </div>
          </div>

          <div className="pb-4">
            <h2 className="text-lg">授業概要</h2>
            <div className="py-2">
              <MultiLine />
            </div>
          </div>

          <div className="pb-4">
            <h2 className="text-lg">授業計画</h2>
            <div className="py-2">
              <MultiLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
