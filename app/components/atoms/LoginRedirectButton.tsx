import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function LoginRedirectButton() {
  return (
    <Link href="/login" className={buttonVariants()}>
      ログイン
    </Link>
  )
}
