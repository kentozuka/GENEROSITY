import CourseDetailSkelton from '@/components/molecures/CourseDetailSkelton'
import CourseDetailContent from '@/components/organisms/CourseDetailContent'
import db from '@/lib/db'
import { Suspense } from 'react'

const ChildrenBoundary = async ({ id }: { id: string }) => {
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

export default async function Detail({
  params: { id }
}: {
  params: { id: string }
}) {
  return (
    <Suspense fallback={<CourseDetailSkelton />}>
      <ChildrenBoundary id={id} />
    </Suspense>
  )
}
