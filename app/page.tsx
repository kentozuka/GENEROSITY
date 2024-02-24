import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const user = await getServerSession(authOptions)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="">ホームのページ。検索のページ</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  )
}
