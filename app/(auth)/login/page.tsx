'use client'

import { signIn, useSession } from 'next-auth/react' // serverside auth does not work so ill opt for clientside
import { FormEvent, useState } from 'react'

import { redirect, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const { data: session, status } = useSession()

  const callbackUrl = searchParams.get('callbackUrl')
  const error = searchParams.get('error')

  // mitigate the flash
  if (status === 'loading')
    return (
      <div className="fixed inset-0 w-screen h-screen bg-generous-100 grid place-items-center"></div>
    )

  if (session) {
    // TODO: think about why this is so slow + login flash
    redirect(callbackUrl || '/registered')
  }

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
    <form className="w-full px-20 py-8 self-center" onSubmit={handleSubmit}>
      <div className="pb-8">
        <p className="font-bold text-xl text-generous-600 pb-1">
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
        <p className="text-red-500 text-xs pt-2">
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
