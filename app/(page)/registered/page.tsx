import { Suspense } from 'react'

import SpringRegisteredCourse from '@/components/organisms/SpringRegisteredCourse'
import RegisteredCourseSkeleton from '@/components/atoms/RegisteredCourseSkeleton'
import FallRegisteredCourse from '@/components/organisms/FallRegisteredCourse'

export default async function Registered() {
  return (
    <>
      <Suspense fallback={<RegisteredCourseSkeleton />}>
        <SpringRegisteredCourse />
      </Suspense>
      <Suspense fallback={<RegisteredCourseSkeleton />}>
        <FallRegisteredCourse />
      </Suspense>
    </>
  )
}
