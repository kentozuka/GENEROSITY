import CourseDetailContent from '@/components/organisms/CourseDetailContent'
import db from '@/lib/db'

export default async function Detail({
  params: { id }
}: {
  params: { id: string }
}) {
  // server side data fetching
  const course = await db.course.findUnique({
    where: {
      id
    },
    include: {
      faculty: true,
      professor: true,
      users: true
    }
  })

  if (course === null) return <p className="">null class</p>

  return <CourseDetailContent course={course} />
}
