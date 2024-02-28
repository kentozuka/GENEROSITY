import Link from 'next/link'

import ProfileDisplay from '@/components/molecures/ProfileDisplay'
import TimeDisplay from '@/components/molecures/TimeDisplay'
import Credit from '@/components/atoms/Credit'
import { CompeleteCourse } from '@/types'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'

export default function CourseCard({ course }: { course: CompeleteCourse }) {
  return (
    <Link href={`/detail/${course.id}`}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg line-clamp-1">{course.title}</CardTitle>
          <CardDescription>{course.faculty.name}</CardDescription>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="flex justify-between pb-2">
            <ProfileDisplay
              id={course.professor.id}
              name={course.professor.name}
            />
            <TimeDisplay dayIndex={course.weekday} period={course.period} />
            <Credit count={course.credit} />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
