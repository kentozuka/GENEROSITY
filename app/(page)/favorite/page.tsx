import Icon from '@/components/atoms/Icon'

export default function Favorite() {
  return (
    <div className="grid h-full place-items-center">
      <div className="flex flex-col items-center px-16 py-24 rounded bg-generous-100 text-generous-500">
        <Icon type="heart" />
        <p className="pt-4 pb-2 text-xl">表示する授業がありません</p>
        <p className="text-sm">
          お気に入りに登録した授業はここに表示されます。
        </p>
      </div>
    </div>
  )
}
