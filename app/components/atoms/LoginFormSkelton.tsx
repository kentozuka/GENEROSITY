import { Skeleton } from '@/components/ui/skeleton'

export default function LoginFormSkelton() {
  return (
    <div className="self-center w-full p-4 md:px-20 md:py-8">
      <div className="flex flex-col gap-2 pb-8">
        <Skeleton className="w-40 h-8" />
        <Skeleton className="w-40 h-4" />
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-full h-12" />
      </div>

      <div className="flex pt-8">
        <Skeleton className="w-full h-12" />
      </div>
    </div>
  )
}
