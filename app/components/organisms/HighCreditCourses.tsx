import { getHighCreditCourses } from '@/actions/getCourseSuggestions'
import CourseHighlight from '../molecures/CourseHighlight'

export default async function HighCreditCourses() {
  const courses = await getHighCreditCourses()

  return (
    <CourseHighlight
      icon="flame"
      title="注目されている授業"
      courses={courses}
    />
  )
}
