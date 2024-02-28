import { Suspense } from 'react'

import CourseHighlightSkeleton from '@/components/atoms/CourseHighlightSkeleton'
import HighCreditCourses from '@/components/organisms/HighCreditCourses'
import LateTimeCourses from '@/components/organisms/LateTimeCourses'
import SearchForm from '@/components/organisms/SearchForm'

export default async function Home() {
  return (
    <>
      <SearchForm />

      <Suspense fallback={<CourseHighlightSkeleton />}>
        <HighCreditCourses />
      </Suspense>
      <Suspense fallback={<CourseHighlightSkeleton />}>
        <LateTimeCourses />
      </Suspense>
    </>
  )
}
