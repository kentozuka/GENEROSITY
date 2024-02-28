import { Suspense } from 'react'

import CourseDetailDisplay from '@/components/organisms/CourseDetailDisplay'
import ClientGoBackButton from '@/components/organisms/ClientGoBackButton'
import CourseDetailSkelton from '@/components/atoms/CourseDetailSkelton'

export default async function Detail({
  params: { id }
}: {
  params: { id: string }
}) {
  return (
    <>
      <ClientGoBackButton />
      <Suspense fallback={<CourseDetailSkelton />}>
        <CourseDetailDisplay id={id} />
      </Suspense>
    </>
  )
}
