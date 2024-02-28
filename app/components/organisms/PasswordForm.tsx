'use client'

import { usePasswordForm } from '@/hooks/usePasswordForm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import InputError from '../atoms/InputError'

// Following Apple's naming convention for autocomplete attribute
// https://developer.apple.com/documentation/security/password_autofill/enabling_password_autofill_on_an_html_input_element

export default function PasswordForm() {
  const { loading, error, handleSubmit, focusHandler } = usePasswordForm()
  const actionButtonLabel = loading ? '変更中...' : '変更'

  return (
    <form
      className="self-center w-full p-4 md:px-12 md:py-8"
      onSubmit={handleSubmit}
    >
      <div className="pb-6">
        <p className="pb-1 text-xl font-bold text-generous-600">
          パスワードを変更
        </p>
      </div>

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

      <InputError error={error} />

      <div className="flex pt-8">
        <Button
          type="submit"
          className="flex-grow bg-generous-600"
          disabled={loading}
        >
          {actionButtonLabel}
        </Button>
      </div>
    </form>
  )
}
