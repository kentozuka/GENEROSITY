import { Suspense } from 'react'
import Link from 'next/link'

import CourseResultSkelton from '@/components/atoms/CourseResultSkelton'
import CourseResult from '@/components/organisms/CourseResult'
import { buttonVariants } from '@/components/ui/button'

// https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional
export default async function Result({
  searchParams
}: {
  searchParams: Record<string, string>
}) {
  const take = 27

  return (
    <>
      <Link href="/" className={buttonVariants({ variant: 'secondary' })}>
        戻る
      </Link>

      <Suspense fallback={<CourseResultSkelton />}>
        <CourseResult take={take} searchParams={searchParams} />
      </Suspense>
    </>
  )
}
