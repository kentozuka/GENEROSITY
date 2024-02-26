import AccountDisplay from '../molecures/AccountDisplay'
import NavItem from '../molecures/NavItem'
import Logo from '../atoms/Logo'

export default function Navigation() {
  return (
    <aside className="col-span-1 sticky top-0 h-screen flex flex-col justify-between p-4 bg-generous-100">
      <div>
        <div className="px-4 pt-6 pb-20">
          <Logo />
        </div>
        <NavItem href="/" icon="search" text="授業検索" />
        <NavItem href="/registered" icon="bookmark" text="授業登録済み" />
        <NavItem href="/" icon="heart" text="お気に入り授業" />
      </div>

      <AccountDisplay />
    </aside>
  )
}
