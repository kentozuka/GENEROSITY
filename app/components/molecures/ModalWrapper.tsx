import { PropsWithChildren } from 'react'
import clsx from 'clsx'

export default function ModalWrapper({
  longContent = false,
  children
}: PropsWithChildren<{ longContent?: boolean }>) {
  const innerClass = clsx(
    'px-8 py-6 overflow-y-scroll bg-white rounded-lg shadow-lg',
    longContent && 'h-full'
  )
  return (
    <div className="fixed top-0 grid w-screen h-screen p-4 md:p-12 bg-generous-500/50 place-items-center">
      <div className={innerClass}>{children}</div>
    </div>
  )
}
