'use client'

import { useSession } from 'next-auth/react'

import LoginRedirectButton from '@/components/atoms/LoginRedirectButton'
import AccountDisplay from '@/components/molecures/AccountDisplay'
import { Skeleton } from '@/components/ui/skeleton'

export default function StatusBasedAccountDisplay() {
  const { data, status } = useSession()

  if (status === 'loading') return <Skeleton className="w-full h-12 rounded" />

  if (status === 'unauthenticated' || data === null)
    return <LoginRedirectButton />

  return <AccountDisplay name={data.user?.name || ''} />
}
