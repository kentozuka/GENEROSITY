'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function ClientGoBackButton() {
  const router = useRouter()
  const handler = () => router.back()

  return (
    <Button onClick={handler} variant="secondary">
      戻る
    </Button>
  )
}
