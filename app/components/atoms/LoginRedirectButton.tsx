import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function LoginRedirectButton() {
  const router = useRouter()
  // TODO: use ? to set return url
  const handleClick = () => router.push('/login')

  return (
    <Button type="button" className="bg-generous-600" onClick={handleClick}>
      ログイン
    </Button>
  )
}
