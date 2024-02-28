import {
  X,
  Search,
  Bookmark,
  Heart,
  MoreHorizontal,
  ChevronLeft,
  Menu,
  Flame,
  AlarmClock
} from 'lucide-react'

export type IconType =
  | 'search'
  | 'bookmark'
  | 'heart'
  | 'account'
  | 'dots'
  | 'schedule'
  | 'chevron-left'
  | 'menu'
  | 'x'
  | 'flame'
  | 'alarmclock'

const switcher = (type: IconType) => {
  switch (type) {
    case 'search':
      return Search

    case 'bookmark':
      return Bookmark

    case 'heart':
      return Heart

    case 'dots':
      return MoreHorizontal

    case 'chevron-left':
      return ChevronLeft

    case 'menu':
      return Menu

    case 'x':
      return X

    case 'flame':
      return Flame

    case 'alarmclock':
      return AlarmClock

    default:
      return X
  }
}

export default function Icon({ type }: { type: IconType }) {
  const IconComponent = switcher(type)

  return (
    <IconComponent size={24} strokeWidth="1.5" className="stroke-current" />
  )
  // return IconComponent({
  //   size: 24,
  //   strokeWidth: '1.5',
  //   className: 'stroke-current'
  // })
}
