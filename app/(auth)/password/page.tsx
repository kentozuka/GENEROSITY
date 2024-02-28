import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

import LoginFormSkelton from '@/components/atoms/LoginFormSkelton'
import PasswordForm from '@/components/organisms/PasswordForm'

export default async function Passwrod() {
  const session = await getServerSession()
  if (!session) {
    return redirect('/login')
  }

  return (
    <Suspense fallback={<LoginFormSkelton />}>
      <PasswordForm />
    </Suspense>
  )
}
