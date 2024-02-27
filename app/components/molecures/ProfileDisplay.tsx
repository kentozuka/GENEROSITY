import Avator from '@/components/atoms/Avator'

export default function ProfileDisplay({
  name,
  id
}: {
  name?: string
  id?: number
}) {
  // https://pravatar.cc/ they only have 70 images so using the identifier instead
  const url = `https://i.pravatar.cc/150?u=${id}`
  const displayName = name || 'user'

  return (
    <div className="flex items-center gap-2 py-2">
      <Avator src={url} alt={displayName} />
      <p className="text-sm">{displayName}</p>
    </div>
  )
}
