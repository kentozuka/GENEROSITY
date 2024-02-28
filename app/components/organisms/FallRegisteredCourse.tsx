import { getFallCourses } from '@/actions/getUserCourses'
import RegisteredCourse from '../molecures/RegisteredCourse'

export default async function FallRegisteredCourse() {
  const courses = await getFallCourses()

  return <RegisteredCourse term="秋学期" courses={courses} />
}
