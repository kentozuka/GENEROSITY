'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import Icon from '@/components/atoms/Icon'

export default function ModalCloseButton() {
  const router = useRouter()
  const handler = () => {
    router.back()
    router.refresh() // re-validate server rendered pages
  }

  return (
    <Button onClick={handler} variant="secondary">
      <Icon type="x" />
    </Button>
  )
}
