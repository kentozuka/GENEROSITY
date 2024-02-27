import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function LoginRedirectButton() {
  // TODO: use ? to set return url
  const handleClick = () => redirect('/login')

  return (
    <Button type="button" className="bg-generous-600" onClick={handleClick}>
      ログイン
    </Button>
  )
}
