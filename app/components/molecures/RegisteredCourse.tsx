import CourseActionCard from '@/components/molecures/CourseActionCard'
import EmptyCourseBanner from '@/components/atoms/EmptyCourseBanner'
import { CompeleteCourse } from '@/types'

export default function RegisteredCourse({
  term,
  courses
}: {
  term: string
  courses: CompeleteCourse[]
}) {
  if (courses.length === 0)
    return (
      <div className="pb-8">
        <p className="py-4 text-xl font-bold">{term}</p>
        <EmptyCourseBanner />
      </div>
    )

  return (
    <div className="pb-8">
      <p className="py-4 text-xl font-bold">
        {term}
        <span className="pl-2 text-xs font-normal align-middle text-generous-500">
          - {courses.length.toLocaleString()}件
        </span>
      </p>

      <div className="grid grid-cols-3 gap-2">
        {courses.map((course) => (
          <CourseActionCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
