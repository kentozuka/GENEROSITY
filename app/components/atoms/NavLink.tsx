import Link from 'next/link'

export default function NavLink({
  children,
  href
}: React.PropsWithChildren<{
  href: string
}>) {
  return <Link href={href}>{children}</Link>
}
