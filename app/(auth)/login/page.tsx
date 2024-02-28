import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

import LoginFormSkeleton from '@/components/atoms/LoginFormSkeleton'
import LoginForm from '@/components/organisms/LoginForm'

export default async function Login({
  searchParams: sp
}: {
  searchParams: Record<string, string>
}) {
  const session = await getServerSession()

  if (session) {
    return redirect(sp.callbackUrl || '/registered')
  }

  return (
    <Suspense fallback={<LoginFormSkeleton />}>
      <LoginForm error={sp.error} callbackUrl={sp.callbackUrl} />
    </Suspense>
  )
}
