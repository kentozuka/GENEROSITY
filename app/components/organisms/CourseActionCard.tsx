import Link from 'next/link'

import Unenrollconfirmation from '@/components/organisms/UnenrollConfirmation'
import ProfileDisplay from '@/components/molecures/ProfileDisplay'
import TimeDisplay from '@/components/molecures/TimeDisplay'
import Credit from '@/components/atoms/Credit'
import { CompeleteCourse } from '@/types'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'

export default function CourseCard({ course }: { course: CompeleteCourse }) {
  return (
    <Card>
      <CardHeader>
        <Link href={`/detail/${course.id}`}>
          <CardTitle className="text-lg">{course.title}</CardTitle>
        </Link>
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
      <CardFooter className="justify-center grow">
        <Unenrollconfirmation className="flex-grow" />
      </CardFooter>
    </Card>
  )
}
