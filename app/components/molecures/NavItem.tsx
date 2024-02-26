import Link from 'next/link'
import Icon, { IconType } from '../atoms/Icon'

export default function NavItem({
  href,
  icon,
  text
}: {
  href: string
  icon: IconType
  text: string
}) {
  return (
    <Link
      href={href}
      className="border border-transparent flex items-center gap-2 px-4 py-5 rounded hover:bg-generous-200 hover:border-generous-300"
    >
      <Icon type={icon} />

      <p className="">{text}</p>
    </Link>
  )
}
