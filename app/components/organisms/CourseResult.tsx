import IncrementalPagination from '@/components/molecures/IncrementalPagination'
import CourseResultDisplay from '@/components/molecures/CourseResultDisplay'
import { getCourseResult } from '@/actions/getCourseResult'

export default async function CourseResult({
  take,
  searchParams
}: {
  take: number
  searchParams: any
}) {
  const page = +searchParams.page || 1

  const { courses, total } = await getCourseResult(page, take, searchParams)
  const maxPage = Math.ceil(total / take)

  return (
    <div className="py-6">
      <p className="pb-4 text-xl">
        検索結果
        <span className="pl-2 text-sm align-middle text-generous-500">
          - {total.toLocaleString()}件
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
