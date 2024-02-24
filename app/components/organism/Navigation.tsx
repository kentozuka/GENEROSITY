'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Navigation() {
  const { data, status } = useSession()

  return (
    <div className="flex justify-around">
      <Link href="/registered">授業登録済み</Link>
      <Link href="/result">検索結果一覧</Link>
      <Link href="/detail">授業詳細</Link>
      <Link href="/login">ログイン</Link>
      <Link href="/">ホームページ</Link>

      <button onClick={() => signOut()}>Sign out</button>
      <button onClick={() => signIn()}>Sign In</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p className="">{status}</p>
    </div>
  )
}
