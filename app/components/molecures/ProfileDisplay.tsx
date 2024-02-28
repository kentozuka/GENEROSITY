import Avator from '@/components/atoms/Avator'
import clsx from 'clsx'

export default function ProfileDisplay({
  name,
  id,
  fullLength = false
}: {
  name?: string
  id?: number
  fullLength?: boolean
}) {
  // https://pravatar.cc/ they only have 70 images so using the identifier instead
  const url = `https://i.pravatar.cc/150?u=${id}`
  const displayName = name || 'loading...'
  const isLoading = name === undefined

  const src = id ? url : undefined
  const titleClass = clsx('text-sm', {
    'max-w-36 truncate': !fullLength,
    'text-generous-400': isLoading
  })

  return (
    <div className="flex items-center gap-2 py-2">
      <Avator src={src} alt={displayName} />
      <p className={titleClass}>{displayName}</p>
    </div>
  )
}
