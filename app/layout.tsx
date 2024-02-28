import { Noto_Sans_JP } from 'next/font/google'
import type { Metadata } from 'next'
import clsx from 'clsx'

import { Toaster } from '@/components/ui/sonner'
import { Providers } from '@/context/providers'
import '@/globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
})

export const metadata: Metadata = {
  title: 'GENEROSITY - 授業登録システム',
  description: '授業登録システム by GENEROSITY'
}

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="ja" className={clsx(notoSansJP.variable, 'font-sans')}>
      <Providers>
        <body>
          {children}
          <Toaster />
          {modal}
        </body>
      </Providers>
    </html>
  )
}
