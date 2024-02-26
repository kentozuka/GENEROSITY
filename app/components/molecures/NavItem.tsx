import Link from 'next/link'
import Icon, { IconType } from '../atoms/Icon'
import clsx from 'clsx'

export default function NavItem({
  href,
  icon,
  text,
  active
}: {
  href: string
  icon: IconType
  text: string
  active: boolean
}) {
  const sharedClass =
    'border border-transparent flex items-center gap-2 px-4 py-5 rounded hover:bg-generous-200 hover:border-generous-300'
  const activeClass = 'bg-generous-200 border-generous-300'
  const linkClass = clsx(sharedClass, active && activeClass)

  return (
    <Link href={href} className={linkClass}>
      <Icon type={icon} />
      <p>{text}</p>
    </Link>
  )
}
