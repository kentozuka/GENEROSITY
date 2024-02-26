import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'

export default function LoginRedirectButton() {
  // TODO: use ? to set return url
  const handleClick = () => redirect('/login')

  return (
    <Button type="button" className="bg-generous-600" onClick={handleClick}>
      ログイン
    </Button>
  )
}
