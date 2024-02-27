import clsx from 'clsx'

export default function NonFunctionalTabs() {
  return (
    <div className="flex gap-4 border-b text-sm text-generous-500">
      {['基本情報', '授業計画', '評価方法', 'レビュー'].map((tab, index) => {
        const firstItem = index === 0
        const firstItemStyle = 'border-b border-generous-600'
        const tabStyle = clsx(
          'px-4 pb-2 pt-3 cursor-not-allowed',
          firstItem && firstItemStyle
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
