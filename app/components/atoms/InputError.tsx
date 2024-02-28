export default function InputError({ error }: { error?: string }) {
  if (!error) return null

  return (
    <p className="pt-2 text-xs text-red-500">
      メールアドレスまたはパスワードが間違っています
    </p>
  )
}
