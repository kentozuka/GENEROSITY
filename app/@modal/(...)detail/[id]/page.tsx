import { Suspense } from 'react'

import CourseDetailDisplay from '@/components/organisms/CourseDetailDisplay'
import CourseDetailSkelton from '@/components/atoms/CourseDetailSkelton'
import ModalCloseButton from '@/components/organisms/ModalCloseButton'
import ModalWrapper from '@/components/molecures/ModalWrapper'

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <ModalWrapper longContent>
      <Suspense fallback={<CourseDetailSkelton />}>
        <ModalCloseButton />
        <CourseDetailDisplay id={id} />
      </Suspense>
    </ModalWrapper>
  )
}
