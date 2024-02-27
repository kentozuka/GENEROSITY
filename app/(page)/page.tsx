import { Suspense } from 'react'
import HighCreditCourses from '@/components/organisms/HighCreditCourses'
import LateTimeCourses from '@/components/organisms/LateTimeCourses'
import { CourseHighlightSkelton } from '@/components/molecures/CourseHighlightSkelton'

export default async function Home() {
  return (
    <>
      <div className="w-full h-24 bg-generous-500">search bar</div>
      <Suspense fallback={<CourseHighlightSkelton />}>
        <HighCreditCourses />
      </Suspense>
      <Suspense fallback={<CourseHighlightSkelton />}>
        <LateTimeCourses />
      </Suspense>
    </>
  )
}
