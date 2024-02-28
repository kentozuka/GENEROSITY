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
  return (
    <div className="pb-4 md:pb-8">
      <p className="py-4 text-xl font-bold">
        {term}
        <span className="pl-2 text-xs font-normal align-middle text-generous-500">
          - {courses.length.toLocaleString()}件
        </span>
      </p>

      <div className="grid gap-2 md:grid-cols-3">
        {courses.map((course) => (
          <CourseActionCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
