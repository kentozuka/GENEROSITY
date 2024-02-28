import { Suspense } from 'react'

import UnnecessaryTorusKnot from '@/components/atoms/UnnecessaryTorusKnot'
import Logo from '@/components/atoms/Logo'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="grid w-screen h-screen md:grid-cols-12">
      <div className="flex flex-col justify-between h-full p-6 md:p-12 md:col-span-5">
        <Logo />
        {children}
        <p className="py-6 text-sm text-center text-generous-500">
          利用規約・プライバシーポリシー
        </p>
      </div>

      <div className="hidden col-span-7 p-4 md:block">
        <div className="h-full rounded-lg bg-generous-600">
          <Suspense>
            <UnnecessaryTorusKnot />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
