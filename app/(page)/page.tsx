import { getServerSession } from 'next-auth'

import CourseCard from '@/components/organisms/CourseCard'
import { authOptions } from '@/lib/auth'

export default async function Home() {
  const user = await getServerSession(authOptions)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="grid grid-cols-3 gap-2">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  )
}
