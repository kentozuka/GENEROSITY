import IncrementalPagination from '@/components/molecures/IncrementalPagination'
import CourseResultDisplay from '@/components/molecures/CourseResultDisplay'
import EmptyResultBanner from '@/components/atoms/EmptyResultBanner'
import { getCourseResult } from '@/actions/getCourseResult'

export default async function CourseResult({
  take,
  searchParams
}: {
  take: number
  searchParams: any
}) {
  const { page, total, maxPage, courses } = await getCourseResult(
    take,
    searchParams
  )

  if (total === '0') return <EmptyResultBanner />

  return (
    <div className="py-6">
      <p className="pb-4 text-xl">
        検索結果
        <span className="pl-2 text-sm align-middle text-generous-500">
          - {total}件
        </span>
      </p>

      <CourseResultDisplay courses={courses} />
      <IncrementalPagination
        page={page}
        maxPage={maxPage}
        searchParams={searchParams}
      />
    </div>
  )
}
