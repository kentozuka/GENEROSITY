import Link from 'next/link'

import StatusBasedAccountDisplay from '@/components/organisms/StatusBasedAccountDisplay'
import ClientsideNavigationList from '@/components/organisms/ClientsideNavigationList'
import MobileNavigationItems from '@/components/organisms/MobileNavigationItems'
import Logo from '@/components/atoms/Logo'

export default function Navigation() {
  return (
    <aside className="sticky top-0 z-30 p-3 md:p-4 md:h-screen md:col-span-1 bg-generous-200 md:bg-generous-100">
      <div className="flex-col justify-between hidden h-full md:flex">
        <div>
          <Link href="/" className="block px-4 pt-6 pb-20">
            <Logo />
          </Link>

          <ClientsideNavigationList />
        </div>

        <StatusBasedAccountDisplay />
      </div>

      <div className="flex items-center justify-between md:hidden">
        <Link href="/" className="block">
          <Logo width={86} />
        </Link>

        <MobileNavigationItems />
      </div>
    </aside>
  )
}
