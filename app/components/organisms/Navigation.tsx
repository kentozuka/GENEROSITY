'use client'

import { usePathname } from 'next/navigation'

import AccountDisplay from '@/components/molecures/AccountDisplay'
import NavItem from '@/components/molecures/NavItem'
import { IconType } from '@/components/atoms/Icon'
import Logo from '@/components/atoms/Logo'

interface NavItemProps {
  href: string
  icon: IconType
  text: string
  active: boolean
}

export default function Navigation() {
  const pathname = usePathname()

  const navItems: NavItemProps[] = [
    {
      href: '/',
      icon: 'search',
      text: '授業検索',
      active: ['/', '/result', '/detail'].includes(pathname)
    },
    {
      href: '/registered',
      icon: 'bookmark',
      text: '登録済み授業',
      active: pathname === '/registered'
    },
    {
      href: '/',
      icon: 'heart',
      text: 'お気に入り授業',
      active: false
    }
  ]

  return (
    <aside className="col-span-1 sticky top-0 h-screen flex flex-col justify-between p-4 bg-generous-100">
      <div>
        <div className="px-4 pt-6 pb-20">
          <Logo />
        </div>
        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              href={item.href}
              icon={item.icon}
              text={item.text}
              active={item.active}
            />
          ))}
        </div>
      </div>

      <AccountDisplay />
    </aside>
  )
}
