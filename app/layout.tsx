import { Noto_Sans_JP } from 'next/font/google'
import type { Metadata } from 'next'
import clsx from 'clsx'

import './globals.css'
import Navigation from './components/organism/Navigation'
import { Providers } from './context/providers'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
})

export const metadata: Metadata = {
  title: 'GENEROSITY - 授業登録システム',
  description: '授業登録システム by GENEROSITY'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={clsx(notoSansJP.variable, 'font-sans')}>
      <body>
        <Providers>
          <Navigation />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
