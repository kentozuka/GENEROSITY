import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import Weekday from '@/components/atoms/Weekday'
import Term from '../components/atoms/Term'
import Avator from '../components/atoms/Avator'
import Credit from '../components/atoms/Credit'
import Button from '../components/atoms/Button'
import CourseCard from '../components/organisms/CourseCard'

export default async function Home() {
  const user = await getServerSession(authOptions)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
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
    </main>
  )
}
