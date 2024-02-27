import Avator from '@/components/atoms/Avator'

export default function ProfileDisplay({
  name,
  src,
  alt
}: {
  name?: string
  src?: string
  alt?: string
}) {
  const displayName = name || 'user'

  return (
    <div className="flex items-center gap-2 py-2">
      <Avator src={src} alt={alt} />
      <p className="text-sm">{displayName}</p>
    </div>
  )
}
