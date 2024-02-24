'use client'

import { SessionProvider } from 'next-auth/react'

export const Providers = ({ children }: React.PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>
}
