'use client'

import { useSession, signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useState, FormEvent } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Passwrod() {
  const searchParams = useSearchParams()
  const { data: session } = useSession()

  if (session) console.log('no need to login')
  const [loading, setLoading] = useState(false)
  const error = searchParams.get('error')
  const callbackUrl = searchParams.get('callbackUrl')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    setLoading(true) // redirect automatically renew the page so no need to reset the loading state
    // make api calls?
  }

  return (
    <form className="w-full px-12 py-8 self-center" onSubmit={handleSubmit}>
      <div className="pb-6">
        <p className="font-bold text-xl text-generous-600 pb-1">
          パスワードを変更
        </p>
      </div>

      {/* 
      Following Apple's naming convention for autocomplete attribute
      https://developer.apple.com/documentation/security/password_autofill/enabling_password_autofill_on_an_html_input_element
      */}
      <p className="pt-4 pb-2 text-generous-500 text-sm">現在のパスワード</p>
      <Input
        name="current-password"
        autoComplete="current-password"
        type="password"
        placeholder="現在のパスワード"
      />

      <p className="pt-4 pb-2 text-generous-500 text-sm">新しいパスワード</p>
      <div className="flex flex-col gap-2">
        <Input
          name="new-password-text-field"
          autoComplete="new-password"
          type="password"
          placeholder="パスワード"
        />
        <Input
          name="confirm-password-text-field"
          autoComplete="new-password"
          type="password"
          placeholder="パスワードの確認"
        />
      </div>

      {error && (
        <p className="text-red-500 text-xs pt-2">
          現在のパスワードが間違っています
        </p>
      )}

      <div className="flex pt-8">
        <Button
          type="submit"
          className="flex-grow bg-generous-600"
          disabled={loading}
        >
          {loading ? '変更中...' : '変更'}
        </Button>
      </div>
    </form>
  )
}
