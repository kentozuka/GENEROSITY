'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import Unenrollconfirmation from '@/components/molecures/UnenrollConfirmation'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'

export default function EnrollControlButton({
  courseId
}: {
  courseId: string
}) {
  const [data, setData] = useState<{ connected: boolean }>({ connected: false })
  const [loading, setLoading] = useState(true)

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
      toast('エラーが発生しました: ' + json.error)
      setLoading(false)
      return
    }

    toast(connectionType === 'connect' ? '登録しました' : '登録を解除しました')
    setData((pr) => ({ connected: !pr.connected }))
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <Skeleton className="flex-grow h-10" />

  if (data.connected)
    return (
      <Unenrollconfirmation
        className="flex-grow"
        action={updateConnectionState}
      />
    )

  return (
    <Button className="flex-grow" onClick={updateConnectionState}>
      授業を登録する
    </Button>
  )
}
