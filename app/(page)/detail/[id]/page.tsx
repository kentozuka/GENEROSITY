import { Suspense } from 'react'

import CourseDetailContent from '@/components/molecures/CourseDetailContent'
import CourseDetailSkelton from '@/components/atoms/CourseDetailSkelton'
import db from '@/lib/db'

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
    <>
      <div className="py-4">
        <p className="">一覧に戻る</p>
      </div>
      <Suspense fallback={<CourseDetailSkelton />}>
        <ChildrenBoundary id={id} />
      </Suspense>
    </>
  )
}
