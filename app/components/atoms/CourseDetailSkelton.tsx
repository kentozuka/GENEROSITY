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
      <h1 className="pb-2 text-xl">
        <Skeleton className="h-8 max-w-sm" />
      </h1>
      <p className="text-sm text-generous-500">
        <Skeleton className="h-4 w-[200px]" />
      </p>

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

      <div className="max-w-lg">
        <NonFunctionalTabs />

        <div className="py-8">
          <div className="pb-4">
            <h2 className="text-lg">副題</h2>
            <p className="py-2 whitespace-pre-wrap text-generous-600">
              <MultiLine />
            </p>
          </div>

          <div className="pb-4">
            <h2 className="text-lg">授業概要</h2>
            <p className="py-2 whitespace-pre-wrap text-generous-600">
              <MultiLine />
            </p>
          </div>

          <div className="pb-4">
            <h2 className="text-lg">授業計画</h2>
            <p className="py-2 whitespace-pre-wrap text-generous-600">
              <MultiLine />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
