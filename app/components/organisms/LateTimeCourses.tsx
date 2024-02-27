import { getLateTimeCourses } from '@/actions/getCourseSuggestions'
import CourseHighlight from '../molecures/CourseHighlight'

export default async function LateTimeCourses() {
  const courses = await getLateTimeCourses()

  return (
    <CourseHighlight
      icon="alarmclock"
      title="遅い時間の授業"
      courses={courses}
    />
  )
}
