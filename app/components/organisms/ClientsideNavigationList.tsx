'use client'

import { useNavigationItems } from '@/hooks/useNavigationItems'
import NavItem from '@/components/molecures/NavItem'

export default function ClientsideNavigationList() {
  const navItems = useNavigationItems()

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
