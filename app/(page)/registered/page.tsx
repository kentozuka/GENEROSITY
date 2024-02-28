import RegisteredCourseSkelton from '@/components/atoms/RegisteredCourseSkelton'
import FallRegisteredCourse from '@/components/organisms/FallRegisteredCourse'
import SpringRegisteredCourse from '@/components/organisms/SpringRegisteredCourse'
import { Suspense } from 'react'

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
