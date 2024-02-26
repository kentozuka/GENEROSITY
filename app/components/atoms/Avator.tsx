import clsx from 'clsx'
import Image from 'next/image'

export default function Avator({ src, alt }: { src?: string; alt?: string }) {
  const sharedStyle = 'rounded-full w-8 h-8 border border-black bg-gray-200'
  const emptyStyle = 'animate-pulse'
  const altText = alt || 'avator image'

  if (!src) return <div className={clsx(sharedStyle, emptyStyle)}></div>

  return (
    <div className={clsx(sharedStyle, 'relative overflow-hidden')}>
      <Image src={src} alt={altText} fill style={{ objectFit: 'cover' }} />
    </div>
  )
}
