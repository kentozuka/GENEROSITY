import { Suspense } from 'react'

import CourseDetailDisplay from '@/components/organisms/CourseDetailDisplay'
import CourseDetailSkeleton from '@/components/atoms/CourseDetailSkeleton'
import ModalCloseButton from '@/components/organisms/ModalCloseButton'
import ModalWrapper from '@/components/molecures/ModalWrapper'

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <ModalWrapper longContent>
      <Suspense fallback={<CourseDetailSkeleton />}>
        <ModalCloseButton />
        <CourseDetailDisplay id={id} />
      </Suspense>
    </ModalWrapper>
  )
}
