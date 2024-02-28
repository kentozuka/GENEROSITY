import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

import LoginFormSkeleton from '@/components/atoms/LoginFormSkeleton'
import PasswordForm from '@/components/organisms/PasswordForm'

export default async function Passwrod() {
  const session = await getServerSession()
  if (!session) {
    return redirect('/login')
  }

  return (
    <Suspense fallback={<LoginFormSkeleton />}>
      <PasswordForm />
    </Suspense>
  )
}
