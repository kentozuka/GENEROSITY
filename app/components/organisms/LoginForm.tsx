'use client'

import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react' // serverside auth does not work so ill opt for clientside

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginForm({
  error,
  callbackUrl
}: {
  error?: string
  callbackUrl?: string
}) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    setLoading(true) // redirect automatically renew the page so no need to reset the loading state
    await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      redirect: true,
      callbackUrl: callbackUrl || '/registered'
    })
  }

  return (
    <form className="self-center w-full px-20 py-8" onSubmit={handleSubmit}>
      <div className="pb-8">
        <p className="pb-1 text-xl font-bold text-generous-600">
          授業管理にログイン
        </p>
        <p className="text-generous-500">
          発行されたアカウントをご使用ください。
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Input name="email" type="email" placeholder="メールアドレス" />
        <Input name="password" type="password" placeholder="パスワード" />
      </div>

      {error && (
        <p className="pt-2 text-xs text-red-500">
          メールアドレスまたはパスワードが間違っています
        </p>
      )}

      <div className="flex pt-8">
        <Button
          type="submit"
          className="flex-grow bg-generous-600"
          disabled={loading}
        >
          {loading ? 'ログイン中...' : 'ログイン'}
        </Button>
      </div>
    </form>
  )
}
