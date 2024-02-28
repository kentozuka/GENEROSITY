'use client'

import Link from 'next/link'

import ProfileDisplay from '@/components/molecures/ProfileDisplay'
import TimeDisplay from '@/components/molecures/TimeDisplay'
import Credit from '@/components/atoms/Credit'
import Term from '@/components/atoms/Term'
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
    <Link href={`/detail/${course.id}`} className="cursor-pointer">
      <Card>
        <CardHeader>
          <div>
            <Term text={course.term} />
          </div>
          <CardTitle className="text-lg line-clamp-1">{course.title}</CardTitle>
          <CardDescription>{course.faculty.name}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex justify-between">
            <TimeDisplay dayIndex={course.weekday} period={course.period} />

            <Credit count={course.credit} />
          </div>

          <div className="py-2">
            <p className="line-clamp-3">{course.description}</p>
          </div>
          <ProfileDisplay
            id={course.professor.id}
            name={course.professor.name}
          />
        </CardContent>
      </Card>
    </Link>
  )
}
