import { Suspense } from 'react'

import CourseDetailDisplay from '@/components/organisms/CourseDetailDisplay'
import CourseDetailSkelton from '@/components/atoms/CourseDetailSkelton'
import ModalCloseButton from '@/components/organisms/ModalCloseButton'

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="fixed top-0 grid w-screen h-screen p-12 bg-generous-500/50 place-items-center">
      <div className="h-full px-8 py-6 overflow-y-scroll bg-white rounded-lg shadow-lg">
        <Suspense fallback={<CourseDetailSkelton />}>
          <ModalCloseButton />
          <CourseDetailDisplay id={id} />
        </Suspense>
      </div>
    </div>
  )
}
