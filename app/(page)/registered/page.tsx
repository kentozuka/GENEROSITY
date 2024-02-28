import { Suspense } from 'react'

import SpringRegisteredCourse from '@/components/organisms/SpringRegisteredCourse'
import RegisteredCourseSkelton from '@/components/atoms/RegisteredCourseSkelton'
import FallRegisteredCourse from '@/components/organisms/FallRegisteredCourse'

export default async function Registered() {
  return (
    <>
      <Suspense fallback={<RegisteredCourseSkelton />}>
        <SpringRegisteredCourse />
      </Suspense>
      <Suspense fallback={<RegisteredCourseSkelton />}>
        <FallRegisteredCourse />
      </Suspense>
    </>
  )
}
