import Link from 'next/link'

import StatusBasedAccountDisplay from '@/components/organisms/StatusBasedAccountDisplay'
import ClientsideNavigationList from '@/components/organisms/ClientsideNavigationList'
import Logo from '@/components/atoms/Logo'

export default function Navigation() {
  return (
    <aside className="sticky top-0 flex flex-col justify-between h-screen col-span-1 p-4 bg-generous-100">
      <div>
        <Link href="/" className="block px-4 pt-6 pb-20">
          <Logo />
        </Link>

        <ClientsideNavigationList />
      </div>

      <StatusBasedAccountDisplay />
    </aside>
  )
}
