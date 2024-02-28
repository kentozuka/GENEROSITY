import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export const usePasswordForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const formRetry = async (error: string) => {
    setError(error)
    setLoading(false)
    return
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError('')
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const currentPassword = form.get('current-password')
    const newPassword = form.get('new-password-text-field')
    const confirmPassword = form.get('confirm-password-text-field')

    // local validation
    if (newPassword !== confirmPassword)
      return formRetry('新しいパスワードが一致しません。')

    if (newPassword === currentPassword)
      return formRetry('新しいパスワードが現在のパスワードと同じです。')

    const result = await fetch('/api/auth/password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword })
    })
    const json = await result.json()

    if (json.error) return formRetry(json.error)

    toast('パスワードを変更しました。3秒後にリダイレクトされます。')
    await new Promise((resolve) =>
      setTimeout(() => {
        setLoading(false)
        router.push('/registered')
        resolve('')
      }, 3 * 1000)
    )
  }

  const focusHandler = () => setError('')

  return {
    loading,
    error,
    handleSubmit,
    focusHandler
  }
}
