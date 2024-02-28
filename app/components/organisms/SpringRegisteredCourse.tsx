import RegisteredCourse from '@/components/molecures/RegisteredCourse'
import { getSpringCourses } from '@/actions/getUserCourses'

export default async function SpringRegisteredCourse() {
  const courses = await getSpringCourses()

  return <RegisteredCourse term="春学期" courses={courses} />
}
