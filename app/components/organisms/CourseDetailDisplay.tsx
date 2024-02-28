import CourseDetailContent from '@/components/molecures/CourseDetailContent'
import db from '@/lib/db'

export default async function CourseDetailDisplay({ id }: { id: string }) {
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

  if (course === null)
    return (
      <p className="">
        no such class exist. go back and type in the correct url.
      </p>
    )

  return <CourseDetailContent course={course} />
}
