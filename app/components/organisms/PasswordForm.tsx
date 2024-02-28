'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function PasswordForm() {
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

  return (
    <form className="self-center w-full px-12 py-8" onSubmit={handleSubmit}>
      <div className="pb-6">
        <p className="pb-1 text-xl font-bold text-generous-600">
          パスワードを変更
        </p>
      </div>

      {/* 
      Following Apple's naming convention for autocomplete attribute
      https://developer.apple.com/documentation/security/password_autofill/enabling_password_autofill_on_an_html_input_element
      */}
      <p className="pt-4 pb-2 text-sm text-generous-500">現在のパスワード</p>
      <Input
        name="current-password"
        autoComplete="current-password"
        type="password"
        placeholder="現在のパスワード"
        onFocus={focusHandler}
      />

      <p className="pt-4 pb-2 text-sm text-generous-500">新しいパスワード</p>
      <div className="flex flex-col gap-2">
        <Input
          name="new-password-text-field"
          autoComplete="new-password"
          type="password"
          placeholder="パスワード"
          onFocus={focusHandler}
        />
        <Input
          name="confirm-password-text-field"
          autoComplete="new-password"
          type="password"
          placeholder="パスワードの確認"
          onFocus={focusHandler}
        />
      </div>

      {error !== '' && <p className="py-2 text-xs text-red-500">{error}</p>}

      <div className="flex pt-8">
        <Button
          type="submit"
          className="flex-grow bg-generous-600"
          disabled={loading}
        >
          {loading ? '送信中...' : '変更'}
        </Button>
      </div>
    </form>
  )
}
