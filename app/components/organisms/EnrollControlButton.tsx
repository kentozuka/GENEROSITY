'use client'

import Unenrollconfirmation from '@/components/molecures/UnenrollConfirmation'
import { useEnrollStatusCheck } from '@/hooks/useEnrollStatusCheck'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'

export default function EnrollControlButton({
  courseId
}: {
  courseId: string
}) {
  const { loading, connected, update } = useEnrollStatusCheck(courseId)

  if (loading) return <Skeleton className="flex-grow h-10" />

  if (connected)
    return <Unenrollconfirmation className="flex-grow" action={update} />

  return (
    <Button className="flex-grow" onClick={update}>
      授業を登録する
    </Button>
  )
}
