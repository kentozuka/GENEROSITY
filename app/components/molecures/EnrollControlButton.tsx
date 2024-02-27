'use client'

import { useEffect, useState } from 'react'

import Unenrollconfirmation from './UnenrollConfirmation'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

export default function EnrollControlButton({
  courseId
}: {
  courseId: string
}) {
  const [data, setData] = useState<{ connected: boolean } | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const url = `/api/course/user/${courseId}`
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <>
      {data === null ? (
        <Skeleton className="flex-grow h-10" />
      ) : data.connected ? (
        <Unenrollconfirmation className="flex-grow" />
      ) : (
        <Button className="flex-grow">授業を登録する</Button>
      )}
    </>
  )
}
