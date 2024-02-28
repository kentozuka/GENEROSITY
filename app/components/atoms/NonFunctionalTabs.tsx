import clsx from 'clsx'

export default function NonFunctionalTabs() {
  const entries = ['基本情報', '授業計画', '評価方法', 'レビュー']

  return (
    <div className="flex gap-4 text-xs border-b md:text-sm text-generous-500">
      {entries.map((tab, index) => {
        const firstItemStyle = 'border-b border-generous-600'
        const tabStyle = clsx(
          'px-1 md:px-4 pb-2 pt-3 cursor-not-allowed',
          index === 0 && firstItemStyle
        )

        return (
          <div key={index} className={tabStyle}>
            {tab}
          </div>
        )
      })}
    </div>
  )
}
