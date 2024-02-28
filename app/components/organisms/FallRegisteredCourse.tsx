import EmptyRegisteredCourseState from '@/components/atoms/EmptyRegisteredCourseState'
import RegisteredCourse from '@/components/molecures/RegisteredCourse'
import { getFallCourses } from '@/actions/getUserCourses'

export default async function FallRegisteredCourse() {
  const courses = await getFallCourses()
  const term = '秋学期'

  if (courses.length === 0) return <EmptyRegisteredCourseState term={term} />

  return <RegisteredCourse term={term} courses={courses} />
}
