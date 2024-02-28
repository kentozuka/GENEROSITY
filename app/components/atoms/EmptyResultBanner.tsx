export default function EmptyResultBanner() {
  return (
    <div className="py-6">
      <p className="pb-4 text-xl">
        検索結果
        <span className="pl-2 text-sm align-middle text-generous-500">
          - 0件
        </span>
      </p>

      <div className="w-full h-[500px] bg-generous-100 rounded grid place-items-center">
        <p className="text-generous-500">該当する授業がありませんでした</p>
      </div>
    </div>
  )
}
