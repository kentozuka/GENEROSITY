import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import Avator from '@/components/atoms/Avator'
import Icon from '@/components/atoms/Icon'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function AccountDisplay({ name }: { name: string }) {
  const router = useRouter()
  const avatorUrl = `https://i.pravatar.cc/150?u=${name}`

  return (
    <div className="flex justify-between px-4 py-5 border border-transparent rounded">
      <div className="flex items-center gap-4">
        <Avator src={avatorUrl} />
        <p>{name}</p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Icon type="dots" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => signOut()}>
            ログアウト
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('/password')}>
            パスワード変更
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
