import { getUserCourses } from '@/actions/getUserCourses'
import CourseActionCard from '@/components/organisms/CourseActionCard'
import { CompeleteCourse } from '@/types'

export default async function Registered() {
  const courses = await getUserCourses()
  const termGroup = courses.reduce<{
    春学期: CompeleteCourse[]
    秋学期: CompeleteCourse[]
  }>(
    (acc, course) => {
      if (course.term === '春学期') {
        acc['春学期'].push(course)
      }
      if (course.term === '秋学期') {
        acc['秋学期'].push(course)
      }
      return acc
    },
    { 春学期: [], 秋学期: [] }
  )
  const loopable = Object.entries(termGroup)

  return loopable.map(([term, courses]) => (
    <div key={term} className="">
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
  ))
}
