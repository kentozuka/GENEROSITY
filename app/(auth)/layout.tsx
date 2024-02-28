import { Suspense } from 'react'

import UnnecessaryTorusKnot from '@/components/atoms/UnnecessaryTorusKnot'
import Logo from '@/components/atoms/Logo'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="grid grid-cols-12 h-screen w-screen">
      <div className="col-span-5 p-12 flex flex-col justify-between h-full">
        <Logo />
        {children}
        <p className="text-generous-500 text-sm text-center py-6">
          利用規約・プライバシーポリシー
        </p>
      </div>

      <div className="p-4 col-span-7">
        <div className="bg-generous-600 rounded-lg h-full">
          <Suspense>
            <UnnecessaryTorusKnot />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
