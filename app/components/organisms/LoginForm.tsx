'use client'

import InputError from '@/components/atoms/InputError'
import { useLoginForm } from '@/hooks/useLoginForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginForm({
  error,
  callbackUrl
}: {
  error?: string
  callbackUrl?: string
}) {
  const { loading, handleSubmit } = useLoginForm(callbackUrl)
  const buttonLabel = loading ? 'ログイン中...' : 'ログイン'

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

      <InputError error={error} />

      <div className="flex pt-8">
        <Button
          type="submit"
          className="flex-grow bg-generous-600"
          disabled={loading}
        >
          {buttonLabel}
        </Button>
      </div>
    </form>
  )
}
