import CourseCard from '@/components/molecures/CourseCard'
import { CompeleteCourse } from '@/types'

export default function CourseResultDisplay({
  courses
}: {
  courses: CompeleteCourse[]
}) {
  return (
    <div className="grid grid-cols-3 gap-2 pb-8">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}
