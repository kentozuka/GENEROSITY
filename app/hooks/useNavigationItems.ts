import { usePathname } from 'next/navigation'

import { IconType } from '@/components/atoms/Icon'

interface NavItemProps {
  href: string
  icon: IconType
  text: string
  active: boolean
}

export const useNavigationItems = () => {
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
      active: pathname === '/favorite'
    }
  ]

  return navItems
}
