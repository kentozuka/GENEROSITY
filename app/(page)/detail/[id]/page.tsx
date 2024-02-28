import { Suspense } from 'react'

import CourseDetailDisplay from '@/components/organisms/CourseDetailDisplay'
import ClientGoBackButton from '@/components/organisms/ClientGoBackButton'
import CourseDetailSkeleton from '@/components/atoms/CourseDetailSkeleton'

export default async function Detail({
  params: { id }
}: {
  params: { id: string }
}) {
  return (
    <>
      <ClientGoBackButton />
      <Suspense fallback={<CourseDetailSkeleton />}>
        <CourseDetailDisplay id={id} />
      </Suspense>
    </>
  )
}
