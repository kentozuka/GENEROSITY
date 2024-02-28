import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'

export const useEnrollStatusCheck = (courseId: string) => {
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    setLoading(true)
    const url = `/api/course/user/${courseId}`
    const response = await fetch(url)
    const data = (await response.json()) as { connected: boolean }
    setConnected(data.connected)
    setLoading(false)
  }, [courseId])

  const updateConnectionState = async () => {
    setLoading(true)
    const connectionType = connected ? 'disconnect' : 'connect'
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
    setConnected((pr) => !pr)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { loading, connected, update: updateConnectionState }
}
