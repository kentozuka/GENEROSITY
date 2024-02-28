'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent
} from '@radix-ui/react-dropdown-menu'
import Icon from '../atoms/Icon'
import { Button } from '../ui/button'
import ClientsideNavigationList from './ClientsideNavigationList'
import StatusBasedAccountDisplay from './StatusBasedAccountDisplay'

export default function MobileNavigationItems() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Icon type="menu" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-2 p-4 rounded bg-generous-100">
          <ClientsideNavigationList />
          <StatusBasedAccountDisplay />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
