'use client'

import StatusBasedAccountDisplay from '@/components/organisms/StatusBasedAccountDisplay'
import ClientsideNavigationList from '@/components/organisms/ClientsideNavigationList'
import { Button } from '@/components/ui/button'
import Icon from '@/components/atoms/Icon'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent
} from '@radix-ui/react-dropdown-menu'

export default function MobileNavigationItems() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Icon type="menu" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-2 p-4 border rounded shadow-xl bg-generous-100">
          <ClientsideNavigationList />
          <StatusBasedAccountDisplay />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
