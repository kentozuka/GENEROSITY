import CourseDetailContent from '@/components/molecures/CourseDetailContent'
import { getCourseById } from '@/actions/getCourseById'

export default async function CourseDetailDisplay({ id }: { id: string }) {
  const course = await getCourseById(id)

  if (course === null) return <p className="py-6">該当する授業はありません。</p>

  return <CourseDetailContent course={course} />
}
