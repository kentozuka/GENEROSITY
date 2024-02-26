'use client'

import { useSession } from 'next-auth/react'
import Avator from '../atoms/Avator'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'

export default function AccountDisplay() {
  const { data, status } = useSession()
  // if status is unauthenticated then show login button

  return (
    <div className="border border-transparent flex px-4 py-5 rounded justify-between">
      <div className="flex items-center gap-4">
        <Avator src="https://i.pravatar.cc/150?img=3" />
        <p>user</p>
      </div>

      <Button intent="clear" action={() => {}}>
        <Icon type="dots" />
      </Button>
    </div>
  )
}
