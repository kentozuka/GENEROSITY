import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

import LoginFormSkelton from '@/components/atoms/LoginFormSkelton'
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
    <Suspense fallback={<LoginFormSkelton />}>
      <LoginForm error={sp.error} callbackUrl={sp.callbackUrl} />
    </Suspense>
  )
}
