'use client'

import { useEffect, useState } from 'react'

import Unenrollconfirmation from '../molecures/UnenrollConfirmation'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function EnrollControlButton({
  courseId
}: {
  courseId: string
}) {
  const [data, setData] = useState<{ connected: boolean }>({ connected: false })
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchData = async () => {
    setLoading(true)
    const url = `/api/course/user/${courseId}`
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  const updateConnectionState = async () => {
    if (data === null) return null

    setLoading(true)
    const connectionType = data?.connected ? 'disconnect' : 'connect'
    const response = await fetch('/api/course/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ courseId, connectionType })
    })
    const json = await response.json()
    if (!response.ok) {
      toast('エラーが発生しました。もう一度お試しください。\n' + json.error)
      setLoading(false)
      return
    }

    toast(connectionType === 'connect' ? '登録しました' : '登録を解除しました')
    setData((pr) => ({ connected: !pr.connected }))
    router.refresh()
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {loading ? (
        <Skeleton className="flex-grow h-10" />
      ) : data.connected ? (
        <Unenrollconfirmation
          className="flex-grow"
          action={updateConnectionState}
        />
      ) : (
        <Button className="flex-grow" onClick={updateConnectionState}>
          授業を登録する
        </Button>
      )}
    </>
  )
}
