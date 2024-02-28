import EmptyRegisteredCourseState from '@/components/atoms/EmptyRegisteredCourseState'
import RegisteredCourse from '@/components/molecures/RegisteredCourse'
import { getSpringCourses } from '@/actions/getUserCourses'

export default async function SpringRegisteredCourse() {
  const courses = await getSpringCourses()
  const term = '春学期'

  if (courses.length === 0) return <EmptyRegisteredCourseState term={term} />

  return <RegisteredCourse term="春学期" courses={courses} />
}
