import RegisteredCourse from '@/components/molecures/RegisteredCourse'
import { getFallCourses } from '@/actions/getUserCourses'

export default async function FallRegisteredCourse() {
  const courses = await getFallCourses()

  return <RegisteredCourse term="秋学期" courses={courses} />
}
