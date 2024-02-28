'use client'

import NavItem from '@/components/molecures/NavItem'
import { IconType } from '@/components/atoms/Icon'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  href: string
  icon: IconType
  text: string
  active: boolean
}

export default function ClientsideNavigationList() {
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
      href: '/favorite',
      icon: 'heart',
      text: 'お気に入り授業',
      active: false
    }
  ]

  return (
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
  )
}
