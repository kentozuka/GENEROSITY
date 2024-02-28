import Credit from './Credit'
import MultiLine from './MultiLineSkelton'
import NonFunctionalTabs from './NonFunctionalTabs'
import Term from './Term'
import { Skeleton } from '../ui/skeleton'
import ProfileDisplay from '../molecures/ProfileDisplay'
import TimeDisplay from '../molecures/TimeDisplay'

export default function CourseDetailContent() {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-6 max-w-sm" />
        <Skeleton className="h-4 w-[200px]" />
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
