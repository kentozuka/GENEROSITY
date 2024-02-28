import { Suspense } from 'react'

import { CourseHighlightSkelton } from '@/components/atoms/CourseHighlightSkelton'
import HighCreditCourses from '@/components/organisms/HighCreditCourses'
import LateTimeCourses from '@/components/organisms/LateTimeCourses'
import SearchForm from '@/components/organisms/SearchForm'

export default async function Home() {
  return (
    <>
      <SearchForm />

      <Suspense fallback={<CourseHighlightSkelton />}>
        <HighCreditCourses />
      </Suspense>
      <Suspense fallback={<CourseHighlightSkelton />}>
        <LateTimeCourses />
      </Suspense>
    </>
  )
}
