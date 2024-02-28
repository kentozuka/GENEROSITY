'use client'

import Unenrollconfirmation from '@/components/molecures/UnenrollConfirmation'
import { useEnrollStatusCheck } from '@/hooks/useEnrollStatusCheck'
import { Skeleton } from '@/components/ui/skeleton'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function EnrollControlButton({
  courseId
}: {
  courseId: string
}) {
  const { loading, connected, authStatus, update } =
    useEnrollStatusCheck(courseId)

  if (loading || authStatus === 'loading')
    return <Skeleton className="flex-grow h-10" />

  if (authStatus === 'unauthenticated')
    return (
      <Link
        className={buttonVariants({ className: 'flex-grow' })}
        href="/login"
      >
        ログインして授業を登録する
      </Link>
    )

  if (connected)
    return <Unenrollconfirmation className="flex-grow" action={update} />

  return (
    <Button className="flex-grow" onClick={update}>
      授業を登録する
    </Button>
  )
}
